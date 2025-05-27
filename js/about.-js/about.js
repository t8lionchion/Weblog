
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll('.progress-bar');

  const progresses = Array.from(bars).map(bar => {
    return {
      el: bar,
      target: parseInt(bar.getAttribute("aria-valuenow")),
      current: 0
    };
  });

  const interval = setInterval(() => {
    let allDone = true;

    progresses.forEach(p => {
      if (p.current < p.target) {
        p.current++;
        p.el.style.width = `${p.current}%`;
        p.el.textContent = `${p.current}%`;
        p.el.setAttribute("aria-valuenow", p.current);
        allDone = false;
      }
    });

    if (allDone) clearInterval(interval);
  }, 30); // 控制速度，可調整成 10-30 毫秒
});

