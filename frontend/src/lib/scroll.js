export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = 76;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navHeight;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -navHeight, duration: 1.2 });
  } else {
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  }
};
