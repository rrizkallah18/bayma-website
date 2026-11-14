/* bayma — shared behaviour for every page */

/* Mobile menu */
(function(){
  const header = document.querySelector("header");
  const toggle = header && header.querySelector(".menu-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => toggle.setAttribute("aria-expanded", header.classList.toggle("open")));
  header.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => header.classList.remove("open")));
})();

/* Footer year */
document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());

/* Filter drawer on phones (pages with a .filters sidebar) */
(function(){
  const panel = document.querySelector(".filters");
  if (!panel) return;
  const scrim = document.querySelector(".scrim");
  const open = on => {
    panel.classList.toggle("open", on);
    scrim && scrim.classList.toggle("on", on);
    document.body.style.overflow = on ? "hidden" : "";
  };
  document.querySelectorAll(".filters-toggle").forEach(b => b.addEventListener("click", () => open(true)));
  document.querySelectorAll(".filters-close, .filters-apply .btn, .scrim").forEach(b => b.addEventListener("click", () => open(false)));
})();

/* Helpers used by the list pages */
window.bayma = {
  esc: s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
  pager(page, pages){
    if (pages <= 1) return "";
    const nums = [];
    for (let p = 1; p <= pages; p++){
      if (p === 1 || p === pages || Math.abs(p - page) <= 1) nums.push(p);
      else if (nums[nums.length - 1] !== "…") nums.push("…");
    }
    return `<button class="wide" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>Previous</button>`
      + nums.map(p => p === "…" ? `<span class="dots">.....</span>`
          : `<button data-page="${p}" ${p === page ? 'aria-current="page"' : ""}>${p}</button>`).join("")
      + `<button class="wide" data-page="${page + 1}" ${page === pages ? "disabled" : ""}>Next</button>`;
  }
};
