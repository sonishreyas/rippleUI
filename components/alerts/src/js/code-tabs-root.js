// Code Tabs  Root Function JS
const handleCodeTab = (rui_code_tabs_btn_path, rui_code_tabs_content_path) => {
  const rui_code_tabs_btn = document.querySelectorAll(rui_code_tabs_btn_path);
  const rui_code_tabs_content = document.querySelectorAll(
    rui_code_tabs_content_path
  );
  const clearAlltabs = () => {
    rui_code_tabs_btn.forEach((item) => {
      if (item.classList.contains("rui-code-tabs--btn-active")) {
        item.classList.remove("rui-code-tabs--btn-active");
      }
    });
    rui_code_tabs_content.forEach((item) => {
      item.style.display = "none";
    });
  };
  const setActiveTab = (itemIndex) => {
    clearAlltabs();
    rui_code_tabs_btn[itemIndex].classList.add("rui-code-tabs--btn-active");
    rui_code_tabs_content[itemIndex].style.display = "block";
  };

  for (let i = 0; i < rui_code_tabs_btn.length; i++) {
    rui_code_tabs_btn[i].addEventListener("click", () => {
      setActiveTab(i);
    });
  }
  // By default the first tab will be active
  setActiveTab(0);
};

export { handleCodeTab };
