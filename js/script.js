  document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.hackathon-nav .nav-link');
 
  links.forEach(link => {
    link.addEventListener('click', function () {
 
      links.forEach(l => {
        l.classList.remove(
          'border-bottom',
          'border-3',
          'border-warning',
          'text-success',
          'fw-bold'
        );
      });
 
      this.classList.add(
        'border-bottom',
        'border-3',
        'border-warning',
        'text-success',
        'fw-bold'
      );
    });
  });
});

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ِEnglish Buttom
document.getElementById("langBtn").onclick = function () {
    const html = document.documentElement;
    const btn = document.getElementById("langBtn");

    if (html.getAttribute("dir") === "rtl") {
        html.setAttribute("dir", "ltr");
        btn.textContent = "العربية";
    } else {
        html.setAttribute("dir", "rtl");
        btn.textContent = "English";
    }
};