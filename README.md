
# 🧾 Candidate Autofill Extension

Automatically fills repetitive candidate details like **name, mobile number, and education** across forms. Save time and streamline your recruitment workflow!

---

## ✨ Features

* Store candidate details once via a **popup interface**.
* Autofills forms with fields like:

  * Name / Username
  * Mobile / Phone
  * Education / Qualification
* Works on **any webpage** with common form field names.
* Lightweight, fast, and easy to use.

---

## 🎬 Demo

> Click the extension icon → enter candidate details → open a form → fields are auto-filled.

---

## 🛠 Installation

1. Clone or download this repository:

```bash
git clone https://github.com/YOUR_USERNAME/candidate-autofill-extension.git
```

2. Open **Chrome** and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select your extension folder.
5. The extension will appear in the toolbar.

---

## 🚀 Usage

1. Click the **extension icon** in Chrome.
2. Enter candidate details (Name, Mobile, Education) in the popup.
3. Open any webpage with a form. Fields matching the keywords will be automatically filled.

> Supported keywords: `name`, `username`, `full_name`, `mobile`, `phone`, `education`, `qualification`.

---

## 🎨 Icon

The extension uses a **modern gradient-style icon** showing a **form sheet with a magic wand**, representing autofill automation.

---

## ⚡ Technologies Used

* **HTML / CSS / JavaScript** — Frontend popup and content script
* **Chrome Extensions API** — `storage`, `scripting`, `activeTab`

---

## 💡 Future Improvements

* Add more fields like **email, address, LinkedIn, date of birth**.
* Support **multiple candidate profiles**.
* **Site-specific autofill rules**.
* One-click autofill button directly on the webpage.

---

## 📂 Folder Structure

```
candidate-autofill-extension/
│── manifest.json
│── popup.html
│── popup.js
│── content.js
│── style.css
│── icon.png
│── README.md
```

---

## 📌 License

MIT License — free to use and modify.


