// Simple password protection
(function() {
  const CORRECT_PASSWORD = "123123";
  const STORAGE_KEY = "bowen_blog_auth";

  // Check if already authenticated
  if (localStorage.getItem(STORAGE_KEY) === CORRECT_PASSWORD) {
    return;
  }

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "password-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  `;

  overlay.innerHTML = `
    <div style="text-align: center; color: #fff;">
      <h2 style="margin-bottom: 20px; font-weight: 300; letter-spacing: 2px;">RESTRICTED ACCESS</h2>
      <input type="password" id="password-input"
        style="padding: 12px 20px; font-size: 16px; border: 1px solid #333;
               background: #1a1a1a; color: #fff; border-radius: 4px;
               outline: none; width: 200px; text-align: center;"
        placeholder="Enter password" autofocus>
      <p id="password-error" style="color: #ff5555; margin-top: 10px; font-size: 14px; display: none;">Incorrect password</p>
    </div>
  `;

  document.body.appendChild(overlay);

  // Handle input
  const input = document.getElementById("password-input");
  const errorMsg = document.getElementById("password-error");

  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      if (this.value === CORRECT_PASSWORD) {
        localStorage.setItem(STORAGE_KEY, CORRECT_PASSWORD);
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.3s";
        setTimeout(() => overlay.remove(), 300);
      } else {
        errorMsg.style.display = "block";
        this.value = "";
      }
    }
  });
})();
