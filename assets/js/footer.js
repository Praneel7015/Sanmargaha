(() => {
  const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="ft-grid">
      <div class="ft-brand">
        <a class="logo" href="index.html">Sanmarg<span>aha</span></a>
        <p>Guiding every learner with clarity and care across State Board, CBSE, and ICSE pathways from KG to Grade 10.</p>
        <div class="ft-socials">
          <a class="soc-btn" href="#" aria-label="Facebook">
            <img src="assets/img/facebook-svgrepo-com.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
          </a>
          <a class="soc-btn" href="#" aria-label="Instagram">
            <img src="assets/img/instagram-svgrepo-com.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
          </a>
          <a class="soc-btn" href="#" aria-label="YouTube">
            <img src="assets/img/youtube-svgrepo-com.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
          </a>
          <a class="soc-btn" href="#" aria-label="WhatsApp">
            <img src="assets/img/whatsapp-svgrepo-com.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>

      <div class="ft-col">
        <h5>Navigate</h5>
        <ul class="ft-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="courses.html">Courses</a></li>
          <li><a href="presence.html">Our Presence</a></li>
          <li><a href="blogs.html">Blogs</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
        </ul>
      </div>

      <div class="ft-col">
        <h5>Programmes</h5>
        <ul class="ft-links">
          <li><a href="courses.html">State Board</a></li>
          <li><a href="courses.html">CBSE</a></li>
          <li><a href="courses.html">ICSE</a></li>
          <li><a href="courses.html">High School Foundation</a></li>
          <li><a href="courses.html">Board Exam Mentoring</a></li>
          <li><a href="courses.html">Individual Coaching</a></li>
        </ul>
      </div>

      <div class="ft-col">
        <h5>Contact</h5>
        <ul class="ft-links">
          <li><a href="mailto:hello@sanmargaha.edu.in">hello@sanmargaha.edu.in</a></li>
          <li><a href="tel:+918312045600">+91 83120 45600</a></li>
          <li><a href="presence.html">Dharwad Campus</a></li>
          <li><a href="presence.html">Bengaluru Campus</a></li>
        </ul>
      </div>
    </div>

    <div class="ft-bottom">
      <p>&copy; <span data-year>2026</span> Sanmargaha Educational Services Pvt. Ltd. All rights reserved.</p>
      <p>Built for learners across Karnataka.</p>
    </div>
  </div>
</footer>
`;

  const mountFooter = () => {
    const target = document.querySelector("#site-footer");
    if (!target) return;
    target.innerHTML = FOOTER_HTML;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFooter);
  } else {
    mountFooter();
  }
})();
