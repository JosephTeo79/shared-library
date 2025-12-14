// js/shortcut.js
const openedTabs = {};

function openShortcut(url, name) {
    if (openedTabs[name] && !openedTabs[name].closed) {
        // 已有 → 聚焦，不刷新
        openedTabs[name].focus();
    } else {
        // 新开一个浏览器 tab
        openedTabs[name] = window.open(url, name);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.shortcut-link').forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const url = this.getAttribute('data-url');
            const name = this.getAttribute('data-tab-name');
            openShortcut(url, name);
        });
    });
});
