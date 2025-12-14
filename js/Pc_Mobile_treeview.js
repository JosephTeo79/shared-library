document.addEventListener("DOMContentLoaded", function () {
  // 找到所有的 caret 元素
  const togglers = document.getElementsByClassName("caret");

  for (let i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener("click", function () {
      // 找到它下面的 nested 子菜单
      const nested = this.parentElement.querySelector(".nested");
      if (nested) {
        nested.classList.toggle("active");
      }

      // 切换箭头方向
      this.classList.toggle("caret-down");
    });
  }

// --- 拖拽分隔条 ---
  const divider = document.getElementById("divider");
  const leftPane = document.getElementById("left-pane");
  const rightPane = document.getElementById("right-pane");

  if (!divider || !leftPane) {
    console.error("缺少 #divider 或 #left-pane");
    return;
  }

  let isDragging = false;

  divider.addEventListener("mousedown", function (e) {
    isDragging = true;
    document.body.style.cursor = "col-resize";

    // 避免拖拽时 iframe 抢焦点
    if (rightPane) {
      rightPane.style.pointerEvents = "none";
    }

    e.preventDefault();
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    const newWidth = e.clientX;
    if (newWidth > 100 && newWidth < window.innerWidth - 100) {
      leftPane.style.width = newWidth + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = "default";

      if (rightPane) {
        rightPane.style.pointerEvents = "auto";
      }
    }
  });
});
