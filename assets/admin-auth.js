(function(){
'use strict';
const SUPABASE_URL='https://dejcvufdrtlsbjxqnsim.supabase.co';
const SUPABASE_KEY='sb_publishable_vyXTtup4_XmLZ1EUQsRq-Q_Hha5FAgS';
const ADMIN_EMAIL='fayazsk109@gmail.com';
const client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
window.agastyaSupabase=client;
const emailForm=document.getElementById('emailForm');
const otpForm=document.getElementById('otpForm');
if(!emailForm||!otpForm)return;
const status=document.getElementById('status');
const sendBtn=document.getElementById('sendBtn');
const verifyBtn=document.getElementById('verifyBtn');
const emailInput=document.getElementById('email');
const say=(message,error)=>{status.textContent=message;status.style.color=error?'#b42318':'#078f98'};
emailForm.addEventListener('submit',async e=>{
 e.preventDefault();sendBtn.disabled=true;say('Sending secure code…');
 try{
  const {error}=await client.auth.signInWithOtp({email:ADMIN_EMAIL,options:{shouldCreateUser:false}});
  if(error)throw error;
  emailForm.classList.add('hidden');otpForm.classList.remove('hidden');
  document.getElementById('formTitle').textContent='Check your inbox.';
  document.getElementById('formSub').textContent='A one-time code has been sent to '+ADMIN_EMAIL+'. Enter it below to continue.';
  say('Verification code sent. Check your inbox and spam folder.');
 }catch(err){say(err.message||'Unable to send the code. Please try again.',true);sendBtn.disabled=false}
});
otpForm.addEventListener('submit',async e=>{
 e.preventDefault();verifyBtn.disabled=true;say('Verifying your account…');
 try{
  const token=document.getElementById('otp').value.trim();
  const {data,error}=await client.auth.verifyOtp({email:ADMIN_EMAIL,token,type:'email'});
  if(error)throw error;
  if(!data.user||String(data.user.email||'').toLowerCase()!==ADMIN_EMAIL){await client.auth.signOut();throw new Error('This account is not authorised for Agastya administration.')}
  window.location.href='admin.html';
 }catch(err){say(err.message||'Invalid or expired code. Please try again.',true);verifyBtn.disabled=false}
});
})();