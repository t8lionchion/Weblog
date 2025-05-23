
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("googleForm");
  const input = document.getElementById("query");

  // 檢查元素是否存在（避免在沒有 form 的頁面報錯）
  if (form && input) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = input.value.trim();
      if (query) {
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleUrl, "_blank");
      } else {
        alert("請輸入搜尋關鍵字！");
      }
    });
  }
});


