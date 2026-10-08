(() => {
  const USERS_KEY = "codex_users";
  const SESSION_KEY = "codex_session";

  function readUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setSession(user) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ email: user.email, name: user.name, grade: user.grade })
    );
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function normalizeEmail(email) {
    return String(email || "")
      .trim()
      .toLowerCase();
  }

  function showMessage(el, text, type) {
    if (!el) return;
    el.hidden = false;
    el.textContent = text;
    el.dataset.type = type;
  }

  function updateNavAuth() {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const session = getSession();
    const existing = nav.querySelector("[data-auth-slot]");
    if (existing) existing.remove();

    const authLink = nav.querySelector("[data-auth-link]");
    const cta = nav.querySelector(".nav-cta");

    if (session) {
      if (authLink) authLink.hidden = true;

      const slot = document.createElement("div");
      slot.className = "auth-nav";
      slot.dataset.authSlot = "";
      slot.innerHTML = `
        <span class="auth-user" title="${session.email}">${session.name}</span>
        <button class="auth-logout" type="button">Đăng xuất</button>
      `;
      slot.querySelector(".auth-logout").addEventListener("click", () => {
        clearSession();
        window.location.href = "index.html";
      });

      if (cta) nav.insertBefore(slot, cta);
      else nav.append(slot);
    } else if (authLink) {
      authLink.hidden = false;
    }
  }

  function bindLoginForm() {
    const form = document.getElementById("login-form");
    if (!form) return;

    const message = document.getElementById("auth-message");
    const session = getSession();
    if (session) {
      showMessage(message, `Bạn đã đăng nhập với tên ${session.name}.`, "ok");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = normalizeEmail(data.get("email"));
      const password = String(data.get("password") || "");

      if (!email || !password) {
        showMessage(message, "Vui lòng nhập đầy đủ email và mật khẩu.", "error");
        return;
      }

      const user = readUsers().find((item) => item.email === email);
      if (!user || user.password !== password) {
        showMessage(message, "Email hoặc mật khẩu không đúng.", "error");
        return;
      }

      setSession(user);
      showMessage(message, "Đăng nhập thành công. Đang chuyển trang…", "ok");
      window.setTimeout(() => {
        window.location.href = "index.html";
      }, 700);
    });
  }

  function bindRegisterForm() {
    const form = document.getElementById("register-form");
    if (!form) return;

    const message = document.getElementById("auth-message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const grade = String(data.get("grade") || "");
      const email = normalizeEmail(data.get("email"));
      const password = String(data.get("password") || "");
      const confirm = String(data.get("confirm") || "");

      if (!name || !grade || !email || !password || !confirm) {
        showMessage(message, "Vui lòng điền đầy đủ thông tin.", "error");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage(message, "Email không hợp lệ.", "error");
        return;
      }

      if (password.length < 6) {
        showMessage(message, "Mật khẩu cần ít nhất 6 ký tự.", "error");
        return;
      }

      if (password !== confirm) {
        showMessage(message, "Mật khẩu nhập lại không khớp.", "error");
        return;
      }

      const users = readUsers();
      if (users.some((item) => item.email === email)) {
        showMessage(message, "Email này đã được đăng ký.", "error");
        return;
      }

      const user = { name, grade, email, password, createdAt: Date.now() };
      users.push(user);
      writeUsers(users);
      setSession(user);
      showMessage(message, "Đăng ký thành công. Đang chuyển trang…", "ok");
      window.setTimeout(() => {
        window.location.href = "tham-gia.html";
      }, 700);
    });
  }

  updateNavAuth();
  bindLoginForm();
  bindRegisterForm();
})();
