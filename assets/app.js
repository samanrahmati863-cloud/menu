(function () {
  const M = window.MENU;
  const fa = s => String(s).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const foot = '<svg class="foot" viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><ellipse cx="12" cy="15" rx="5.5" ry="6"/><ellipse cx="5" cy="7" rx="2.3" ry="3.4" transform="rotate(-25 5 7)"/><ellipse cx="12" cy="4.2" rx="2.3" ry="3.4"/><ellipse cx="19" cy="7" rx="2.3" ry="3.4" transform="rotate(25 19 7)"/></g></svg>';
  const priceHtml = p => p ? `<span class="lead"></span><span class="price">${esc(fa(p))}<small>${esc(M.currency)}</small></span>` : "";

  // sections
  document.getElementById("menu").innerHTML = M.sections.map(s => `
    <section class="sec" id="${s.id}">
      <h2>${esc(s.title)}</h2>
      <ul>${s.items.map(it => `
        <li class="item">${foot}<span class="name">${esc(it.name)}${it.note ? `<span class="note">(${esc(it.note)})</span>` : ""}</span>${priceHtml(it.price)}</li>`).join("")}
      </ul>
    </section>`).join("");

  // chips → tabs: only the chosen category is shown
  const chips = document.getElementById("chips");
  chips.innerHTML = M.sections.map(s => `<button class="chip" role="tab" data-t="${s.id}">${esc(s.title)}</button>`).join("");
  const secs = [...document.querySelectorAll(".sec")];
  let cur = -1;
  function show(i, dir) {
    if (i === cur || i < 0 || i >= secs.length) return;
    cur = i;
    chips.querySelectorAll(".chip").forEach((c, k) => { c.classList.toggle("on", k === i); c.setAttribute("aria-selected", k === i); });
    chips.children[i].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    secs.forEach((sec, k) => {
      sec.hidden = k !== i;
      if (k === i) {
        sec.style.setProperty("--from", dir < 0 ? "-40px" : "40px");
        sec.classList.remove("enter"); void sec.offsetWidth; sec.classList.add("enter");
        sec.querySelectorAll(".item").forEach((it, n) => {
          it.classList.remove("in"); void it.offsetWidth;
          setTimeout(() => it.classList.add("in"), 120 + n * 70);
        });
      }
    });
    const cup = document.querySelector(".cup");
    cup.classList.remove("wiggle"); void cup.offsetWidth; cup.classList.add("wiggle");
    setTimeout(() => cup.classList.remove("wiggle"), 750);
  }
  chips.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    const i = M.sections.findIndex(s => s.id === b.dataset.t);
    show(i, i > cur ? 1 : -1);
  });
  // swipe left/right on the menu to change category (RTL: swipe left = next)
  let sx = null, sy = 0;
  const menuEl = document.getElementById("menu");
  menuEl.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  menuEl.addEventListener("touchend", e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) show(cur + (dx < 0 ? -1 : 1), dx < 0 ? -1 : 1);
  });
  show(0, 1);

  // add-on pill
  if (M.addon) {
    document.getElementById("addon").innerHTML = `<div class="addon">
      <svg viewBox="0 0 22 30" aria-hidden="true"><path d="M8 1h6v5l3 4v17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10l3-4z" fill="#FFF8EA" stroke="#43211A" stroke-width="2" stroke-linejoin="round"/><path d="M11 15c2 3 3 4.5 3 6a3 3 0 0 1-6 0c0-1.5 1-3 3-6z" fill="#43211A"/></svg>
      <span>${esc(M.addon.name)}</span>${M.addon.price ? `<span class="price">${esc(fa(M.addon.price))}</span>` : ""}</div>`;
  }

  // tap a dino → hop + speech bubble
  let last = -1;
  const quote = () => { let i; do { i = Math.floor(Math.random() * M.quotes.length); } while (i === last && M.quotes.length > 1); last = i; return M.quotes[i]; };
  document.querySelectorAll(".dino").forEach(d => d.addEventListener("click", () => {
    d.classList.remove("hop"); void d.offsetWidth; d.classList.add("hop");
    d.querySelector(".bubble")?.remove();
    const b = document.createElement("span"); b.className = "bubble"; b.textContent = quote();
    d.appendChild(b); setTimeout(() => b.remove(), 2300);
    navigator.vibrate?.(30);
  }));
  const cup = document.querySelector(".cup");
  cup.addEventListener("click", () => {
    cup.classList.remove("wiggle"); void cup.offsetWidth; cup.classList.add("wiggle");
    setTimeout(() => cup.classList.remove("wiggle"), 750);
  });
})();
