(() => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const initHeaderScroll = () => {
    const header = qs("#hdr");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("sc", globalThis.scrollY > 20);
    };

    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
  };

  const initNavActive = () => {
    const page = document.body.dataset.page;
    if (!page) return;

    qsa("[data-page]").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });
  };

  const initMobileMenu = () => {
    const menu = qs("#mobMenu");
    const btn = qs("#hamBtn");
    if (!menu || !btn) return;

    const setOpen = (isOpen) => {
      menu.classList.toggle("open", isOpen);
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    btn.addEventListener("click", () => {
      setOpen(!menu.classList.contains("open"));
    });

    qsa("a", menu).forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  };

  const initReveal = () => {
    const elements = qsa(".rv");
    if (!elements.length) return;

    if (!("IntersectionObserver" in globalThis)) {
      elements.forEach((el) => el.classList.add("vis"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  };

  const animateCounter = (el) => {
    const target = Number.parseInt(el.dataset.count || "0", 10);
    const suffix = el.dataset.suffix || "";
    if (Number.isNaN(target)) return;

    const duration = 1500;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = current.toLocaleString("en-IN") + suffix;

      if (progress < 1) {
        globalThis.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("en-IN") + suffix;
      }
    };

    globalThis.requestAnimationFrame(step);
  };

  const initCounters = () => {
    const counters = qsa("[data-count]");
    if (!counters.length) return;

    if (!("IntersectionObserver" in globalThis)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    counters.forEach((counter) => observer.observe(counter));
  };

  const initCoursesFilter = () => {
    const grid = qs("#coursesGrid");
    if (!grid) return;

    const noResults = qs("#noResults");
    let activeBoard = "all";
    let activeLevel = "all";

    const applyFilter = () => {
      const cards = qsa(".cfc", grid);
      let visible = 0;

      cards.forEach((card) => {
        const boardMatch = activeBoard === "all" || card.dataset.board === activeBoard;
        const levelMatch = activeLevel === "all" || card.dataset.level === activeLevel;
        const isVisible = boardMatch && levelMatch;

        card.classList.toggle("hidden", !isVisible);
        if (isVisible) visible += 1;
      });

      if (noResults) {
        noResults.classList.toggle("show", visible === 0);
      }
    };

    const setActiveFilterButtons = (type, value) => {
      qsa(`[data-filter="${type}"]`).forEach((item) => {
        item.classList.toggle("active", item.dataset.val === value);
      });
    };

    qsa(".fbtn").forEach((button) => {
      button.addEventListener("click", () => {
        const { filter, val } = button.dataset;

        if (filter === "board") {
          activeBoard = val;
          setActiveFilterButtons("board", val);
        }

        if (filter === "level") {
          activeLevel = val;
          setActiveFilterButtons("level", val);
        }

        applyFilter();
      });
    });

    applyFilter();
  };

  const initContactForm = () => {
    const form = qs("#contactForm");
    const formWrapper = qs("#formWrapper");
    const okPanel = qs("#formOk");
    const resetBtn = qs("#resetForm");

    if (!form || !formWrapper || !okPanel) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formWrapper.style.display = "none";
      okPanel.classList.add("vis");
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        form.reset();
        formWrapper.style.display = "block";
        okPanel.classList.remove("vis");
      });
    }
  };

  const initToTop = () => {
    const button = qs("#toTop");
    if (!button) return;

    const onScroll = () => {
      button.classList.toggle("show", globalThis.scrollY > 300);
    };

    button.addEventListener("click", () => {
      globalThis.scrollTo({ top: 0, behavior: "smooth" });
    });

    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
  };

  const initDynamicYear = () => {
    const year = String(new Date().getFullYear());
    qsa("[data-year]").forEach((el) => {
      el.textContent = year;
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initNavActive();
    initMobileMenu();
    initReveal();
    initCounters();
    initCoursesFilter();
    initContactForm();
    initToTop();
    initDynamicYear();
  });
})();
