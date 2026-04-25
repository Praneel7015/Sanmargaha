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
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
              <path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a class="soc-btn" href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.74 1.26 4 4 0 0 1 7.74-1.26z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a class="soc-btn" href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
          <a class="soc-btn" href="#" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.53 7.5L3 21l2.07-5.22A8.5 8.5 0 1 1 21 11.5z" />
              <path d="M9.5 9.5c.2-.5.4-.5.6-.5h.5c.2 0 .5 0 .7.4.2.5.8 1.9.9 2 .1.2.1.3 0 .5l-.4.5c-.1.1-.2.2-.1.4.2.4.8 1.3 1.8 2 .3.2.6.4.9.6.2.1.3.1.5 0l.6-.7c.2-.2.4-.2.6-.1l1.8.9c.2.1.3.2.3.5-.1.3-.4 1.3-.9 1.5-.5.2-1.1.3-1.7.2-1-.2-2.1-.8-3.2-1.8-1.6-1.3-2.6-2.9-2.9-3.7-.3-.8-.2-1.5.1-2.1z" />
            </svg>
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
