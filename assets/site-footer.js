(function(){
  const mount=()=>{if(document.getElementById('agastyaFooter'))return;
    const html=`<footer class="ag-footer" id="contact">
      <div class="ag-footer-enquiry"><div class="ag-footer-enquiry-inner">
        <div class="ag-footer-enquiry-copy"><span>ADMISSIONS 2027–28</span><h2>Start your next chapter at Agastya.</h2></div>
        <form class="ag-footer-form" id="footerEnquiryForm">
          <label class="ag-footer-sr-only" for="footerName">Student name</label><input id="footerName" name="name" type="text" placeholder="Student Name" autocomplete="name" required>
          <label class="ag-footer-sr-only" for="footerPhone">Phone number</label><input id="footerPhone" name="phone" type="tel" inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" placeholder="Phone Number" autocomplete="tel" required>
          <label class="ag-footer-sr-only" for="footerEmail">Email address</label><input id="footerEmail" name="email" type="email" placeholder="Email Address (Optional)" autocomplete="email">
          <button type="submit">Send Enquiry <span aria-hidden="true">→</span></button>
        </form>
      </div></div>
      <div class="ag-footer-main"><div class="ag-footer-grid">
        <div class="ag-footer-brand"><a class="ag-footer-logo" href="index.html"><img src="https://agastyaedu.com/wp-content/uploads/2024/10/Agastya-Logo-1024x898.png" alt="Agastya Junior College logo" loading="lazy"></a>
          <p>Agastya Junior College is committed to strong academic foundations, focused competitive-exam preparation and confident futures.</p>
          <div class="ag-footer-social"><a href="https://wa.me/919717144911" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a><a href="tel:+919717144911" aria-label="Call Agastya">☎</a><a href="mailto:info@agastyaedu.com" aria-label="Email Agastya">✉</a></div>
        </div>
        <nav class="ag-footer-col" aria-label="Quick links"><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About Us</a><a href="founder-director.html">Founder &amp; Director</a><a href="campus.html">Campus &amp; Facilities</a><a href="events.html">News &amp; Events</a><a href="results.html">Results &amp; Achievements</a><a href="contact.html">Contact Us</a></nav>
        <div class="ag-footer-col"><h3>Courses</h3><a href="jee-advanced.html">SUPER PRAGNAN <small>IIT-JEE Advanced</small></a><a href="jee-mains.html">PRAGNAN-I <small>IIT-JEE Advanced + Main</small></a><a href="jee-mains.html">PRAGNAN-N <small>JEE + EAPCET</small></a><a href="neet.html">DHANVANTARI <small>NEET Preparation</small></a><a href="long-term-neet.html">Long-Term NEET for Girls</a></div>
        <div class="ag-footer-col ag-footer-contact"><h3>Contact Us</h3><p><span aria-hidden="true">⌖</span> Sai Teja Trans Arcade, beside TCS Gate, Adibatla, Hyderabad, Telangana – 501510</p><a href="tel:+919717144911"><span aria-hidden="true">☎</span> +91-9717144911</a><a href="mailto:info@agastyaedu.com"><span aria-hidden="true">✉</span> info@agastyaedu.com</a><a href="https://www.google.com/maps/search/?api=1&amp;query=Agastya+Junior+College+Adibatla+Hyderabad" target="_blank" rel="noopener"><span aria-hidden="true">⌖</span> Get Directions</a></div>
      </div></div>
      <div class="ag-footer-bottom"><div class="ag-footer-bottom-inner"><span>© <span class="ag-footer-year"></span> Agastya Junior College. All rights reserved.</span><span>Learn with purpose. <b>Achieve aspirations.</b></span><span class="ag-footer-credit">Designed with <a href="https://campus-creatives.pages.dev/" target="_blank" rel="noopener"><b>Campus Creatives</b></a></span><a href="index.html#home">Back to top ↑</a></div></div>
    </footer>`;
    const old=document.querySelector('footer');
    if(old)old.outerHTML=html;else document.body.insertAdjacentHTML('beforeend',html);
    document.querySelectorAll('.ag-footer-year').forEach(el=>el.textContent=new Date().getFullYear());
    document.getElementById('footerEnquiryForm')?.addEventListener('submit',function(e){
      e.preventDefault();if(!this.reportValidity())return;
      const d=new FormData(this);
      const msg=['Agastya Junior College – Website Enquiry','Student Name: '+d.get('name'),'Phone: '+d.get('phone'),'Email: '+(d.get('email')||'Not provided')].join(String.fromCharCode(10));
      window.open('https://wa.me/919717144911?text='+encodeURIComponent(msg),'_blank','noopener');
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();