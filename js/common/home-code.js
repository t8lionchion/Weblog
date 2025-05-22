const subtitles = document.querySelectorAll('.subtitle');

subtitles.forEach(subtitle => {
  const innerP = subtitle.querySelector('span p');

  // 點擊該卡片顯示內容
  subtitle.addEventListener('click', (e) => {
    innerP.style.display = 'block';
    e.stopPropagation(); // 防止冒泡觸發 document click
  });

  // 點擊其他區域就關閉該卡片內容
  document.addEventListener('click', (e) => {
    // 如果點到的不是該卡片本身，也不是它的子元素
    if (!subtitle.contains(e.target)) {
      innerP.style.display = '-webkit-box';
    }
  });
});
