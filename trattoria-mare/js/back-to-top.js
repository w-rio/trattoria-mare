// 一番上に戻るボタンを作成
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'back-to-top';
backToTopBtn.setAttribute('aria-label', 'ページの先頭に戻る');
backToTopBtn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
`;

Object.assign(backToTopBtn.style, {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  width: '48px',
  height: '48px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  border: '1px solid #ccc',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  zIndex: '999',
  backdropFilter: 'blur(4px)',
  transition: 'opacity 0.3s ease',
  opacity: '0',
  pointerEvents: 'none'
});

document.body.appendChild(backToTopBtn);

// スクロールで表示・非表示
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.pointerEvents = 'none';
  }
});

// スクロール動作
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
