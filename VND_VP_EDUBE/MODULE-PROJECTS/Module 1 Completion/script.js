// ...existing code...
(function () {
  // SMOOTH SCROLLING FOR NAVIGATION LINKS
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ADD ACTIVE CLASS TO CURRENT NAV LINK
  window.addEventListener("load", function () {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("href") === currentPage)
        link.classList.add("active");
    });
  });

  // IMAGE LAZY LOADING
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
  }

  // FORM: validation + Formspree submission (single declaration)
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = (document.getElementById("name") || {}).value?.trim() || "";
    const email = (document.getElementById("email") || {}).value?.trim() || "";
    const subject =
      (document.getElementById("subject") || {}).value?.trim() || "";
    const message =
      (document.getElementById("message") || {}).value?.trim() || "";

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const url = contactForm.action;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const prevBtnText = submitBtn ? submitBtn.textContent : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      if (url) {
        const formData = new FormData(contactForm);
        const res = await fetch(url, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          alert("Thanks — your message was sent.");
          contactForm.reset();
          // optional redirect:
          // const next = contactForm.querySelector('input[name="_next"]')?.value;
          // if (next) window.location.href = next;
        } else {
          const data = await res.json().catch(() => ({}));
          alert(data.error || "Submission failed.");
        }
      } else {
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Try again later.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (prevBtnText !== null) submitBtn.textContent = prevBtnText;
      }
    }
  });
})();
// filepath: d:\2. WEB DEVELOPMENT CENTER\HTML\CODING-IN-HTML\VND_VP_EDUBE\MODULE-PROJECTS\Module 1 Completion\script.js

// ...existing code...
(function () {
  // SMOOTH SCROLLING FOR NAVIGATION LINKS
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ADD ACTIVE CLASS TO CURRENT NAV LINK
  window.addEventListener("load", function () {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("href") === currentPage)
        link.classList.add("active");
    });
  });

  // IMAGE LAZY LOADING
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
  }

  // FORM: validation + Formspree submission (single declaration)
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = (document.getElementById("name") || {}).value?.trim() || "";
    const email = (document.getElementById("email") || {}).value?.trim() || "";
    const subject =
      (document.getElementById("subject") || {}).value?.trim() || "";
    const message =
      (document.getElementById("message") || {}).value?.trim() || "";

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const url = contactForm.action;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const prevBtnText = submitBtn ? submitBtn.textContent : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      if (url) {
        const formData = new FormData(contactForm);
        const res = await fetch(url, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          alert("Thanks — your message was sent.");
          contactForm.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          alert(data.error || "Submission failed.");
        }
      } else {
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Try again later.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (prevBtnText !== null) submitBtn.textContent = prevBtnText;
      }
    }
  });
})();
