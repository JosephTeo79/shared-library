const hamburger = document.getElementById('hamburger');
const drawerMenu = document.getElementById('drawer-menu');

// Hamburger 点击开关 Drawer
hamburger.addEventListener('click', () => {
  drawerMenu.classList.toggle('open');
});

// Drawer 子菜单折叠
const parents = drawerMenu.querySelectorAll('.has-children');
parents.forEach(p => {
  p.addEventListener('click', (e) => {
    e.stopPropagation();
    p.classList.toggle('open');
  });
});
