(() => {
  "use strict";

  /*
   * 说明：
   * 这类前端混淆只能提高门槛，不能保证绝对安全。
   * 真正的防抓取应该走服务端渲染、API返回、签名校验或权限控制。
   */

  const KEY = 0x5A;

  // 把真正的 HTML 先做成加密文本，部署时仅保留这个 JS 文件。
  // 注意：这里使用 base64 + XOR 混淆，避免页面源码一眼看到完整 HTML。
  const PAYLOAD = "QY4CWzGwdtTqV8B5hTnQTSXf4uWvVbM7Kx3W4M0NQ8QbL1d7GvYhP97HqJ2b4R5nH0a7Gd0B0mVv7uQF5mVr3mOabZzPd3bHq9Xn4NQnpeX7d6c6gZ1rZQ9Y2KcU1mR0U+K0FDmL1jKsh1m3gDgXsi7aP2omH9q95S9yS6tG2I4z9zbvLulJ2+8emZI7SiMWk1i2W16FoI4aH0jI8nXyP2M3TB0GmV+2fI9oK2rO2BjyBfDNLW72V0g3I0pX0i8w+jJj3cD7rC1qBAr4H20u2iKD08V0W0aN0UQd+8npNcDpVvE+5N9B0WjlILaMs2Xb0svxgKc9m6ud7s0V3d5JpqvkmVHx4lMgm4r3JkXX5dW4i2aF1B7fsM7j6rQ5nQSmxwI03g6rXJecFJHP8f5iJbtsC8yTpK0Q9cZxK9Oh7g2mKQJ9zDhH1mvhO2gW7KXrppKIwIk7dQF3M0d6WQmkkf+QFR3Q==";

  function decodeBase64(str) {
    try {
      return atob(str);
    } catch (e) {
      return str;
    }
  }

  function xorDecode(str, key) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
      out += String.fromCharCode(str.charCodeAt(i) ^ (key + (i % 9)));
    }
    return out;
  }

  function buildDom() {
    try {
      const decodedBase64 = decodeBase64(PAYLOAD);
      const html = xorDecode(decodedBase64, KEY);
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.innerHTML = "";
      document.body.appendChild(container);
    } catch (error) {
      console.error("Obfuscator render failed:", error);
    }
  }

  function blockDevTools() {
    const handler = (event) => {
      const key = event.key.toLowerCase();
      const modifiers = event.ctrlKey || event.metaKey || event.altKey;
      if (modifiers && (key === "u" || key === "s" || key === "shift" || key === "i")) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handler);
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      blockDevTools();
      buildDom();
    }, { once: true });
  } else {
    blockDevTools();
    buildDom();
  }
})();
