(() => {
  const NAVIGATION_HTML = `
<header id="hdr">
  <nav class="container">
    <a class="logo" href="index.html" aria-label="Sanmargaha Home">
      <img class="logo-image" src="assets/img/Sanmargaha_nav.png" alt="" />
      <span class="logo-text">Sanmargaha</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" data-page="home">Home</a></li>
      <li><a href="team.html" data-page="team">Team</a></li>
      <li><a href="courses.html" data-page="courses">Courses</a></li>
      <li><a href="presence.html" data-page="presence">Our Presence</a></li>
      <li><a href="blogs.html" data-page="blogs">Blogs</a></li>
      <li><a href="testimonials.html" data-page="testimonials">Testimonials</a></li>
      <li><a class="nav-cta" href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <button class="ham" id="hamBtn" aria-label="Open navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<div class="mob-menu" id="mobMenu" aria-label="Mobile menu">
  <ul>
    <li><a href="index.html" data-page="home">Home</a></li>
    <li><a href="team.html" data-page="team">Team</a></li>
    <li><a href="courses.html" data-page="courses">Courses</a></li>
    <li><a href="presence.html" data-page="presence">Our Presence</a></li>
    <li><a href="blogs.html" data-page="blogs">Blogs</a></li>
    <li><a href="testimonials.html" data-page="testimonials">Testimonials</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
  </ul>
  <div class="mob-menu-cta">
    <a class="btn btn-p" href="contact.html">Contact Us</a>
    <a class="btn btn-s" href="courses.html">Explore Courses</a>
  </div>
</div>
`;

  const mountNavigation = () => {
    const target = document.querySelector("#site-navigation");
    if (!target) return;
    target.innerHTML = NAVIGATION_HTML;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountNavigation);
  } else {
    mountNavigation();
  }
})();