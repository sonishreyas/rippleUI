/**
 * rootCodeLocation: Where we need to import code for code tabs.
 * elementCodeFilePath: The File Path for the component html file we need to import.
 * elementCodeLocation: The location where we need to import the code for the component.
 * handleCodeTabBtnClass: The classPath for the code tabs to call the handleCodeTab function which allows us to use the tabs.
 * handleCodeTabCodeContentClass: Here we add content classpath
 * elementCodeClassPath: This is the location where we store the HTML code.
 * elementCodeInnerText: Here we add HTML code
 * elementJSCodeClassPath: Here we add the classpath for JS code.
 * elementJSCodeInnerText: Here we add the JS code.
 * sandboxURLClass: Here we add the classPath for sandboxURL.
 * sandboxURL: Here we add  the sandbox URL
 */

const elements = [
  {
    name: "Simple Avatar",
    rootCodeLocation: ".simple-avatar .rui-import-html",
    elementCodeFilePath: "../src/html/simple-avatar.html",
    elementCodeLocation:
      ".simple-avatar .rui-import-html .rui-code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".simple-avatar .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
    handleCodeTabCodeContentClass:
      ".simple-avatar .rui-import-html .rui-code-tabs--content",
    elementCodeClassPath:
      ".simple-avatar .rui-import-html .rui-code-tabs--container .rui-code",
    elementCodeInnerText: `<article></article>`,
    elementJSCodeClassPath:
      ".simple-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
    elementJSCodeInnerText: `const drawer_menu_icon = document.querySelector(
      ".simple-avatar .drawer-menu-icon"
    );
    const rdc_drawer = document.querySelector(".simple-avatar .rui-drawer");
    const rdc_drawer_content_list = document.querySelector(
      ".simple-avatar .rui-drawer .rui-drawer-content--list"
    );
    drawer_menu_icon.addEventListener("click", () => {
      if (
        rdc_drawer_content_list.classList.contains("drawer-menu-icon-inactive") &&
        rdc_drawer.classList.contains("rui-drawer-inactive")
      ) {
        rdc_drawer_content_list.classList.remove("drawer-menu-icon-inactive");
        rdc_drawer.classList.remove("rui-drawer-inactive");
        rdc_drawer.classList.add("rui-drawer-active");
      } else {
        rdc_drawer_content_list.classList.add("drawer-menu-icon-inactive");
        rdc_drawer.classList.remove("rui-drawer-active");
        rdc_drawer.classList.add("rui-drawer-inactive");
      }
    });`,
    sandboxURLClass: ".simple-avatar .rui-code-tabs-sandbox--link",
    sandboxURL: "https://codesandbox.io/s/drawers-uq55y?file=/src/index.js"
  }
];

export { elements };
