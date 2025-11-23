# 🚀 Candidate Autofill Chrome Extension

A lightweight Chrome extension that **automatically fills job application forms** with your saved personal details, education, experience, and resume — on *any* website.

Stop typing the same information again and again.
Save once → Autofill everywhere.

---

## ✨ Features

* ⚡ **One-click autofill** on any job portal
* 🧑‍💼 Autofills name, email, phone, address
* 🎓 Fills education (degree, university, dates)
* 💼 Fills work experience (company, role, timeline)
* 🌍 Supports dropdown fields (Select2, country, state, etc.)
* 📎 Auto-uploads resume stored inside the extension
* 💾 Saves your profile using Chrome storage
* 🌐 Works across all websites with supported fields

---

## 🎥 Demo Video

> Add your demo video link here
> Example:

```
https://github.com/rajesh2150/FillUp/blob/master/20251123152032.mp4
```

*(Upload your video to GitHub → copy link → paste here.)*

---

## 📦 Installation

1. Clone or download the repository:

```bash
git clone https://github.com/rajesh2150/FillUp.git
```

2. Go to Chrome:

```
chrome://extensions/
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extension folder

The extension icon now appears in your toolbar.

---

## 🛠 Usage

1. Click the extension icon
2. Enter your profile details:

   * Personal info
   * Education
   * Work experience
   * Resume file name
3. Open any job application form
4. Fields fill **automatically** within seconds

No more repetitive typing.

---

## 📁 Folder Structure

```
candidate-autofill-extension/
│── manifest.json
│── popup.html
│── popup.js
│── content.js
│── style.css
│── icon.png
│── resume/
│     └── YourResume.pdf
│── README.md
```

---

## 🔧 How It Works

* Uses `chrome.storage.sync` to save user details
* Injects a content script into any webpage
* Detects matching fields using ID, name, placeholder, and custom mappings
* Simulates real typing and triggers input events
* Supports advanced inputs like:

  * Select boxes
  * Select2 dropdowns
  * Date pickers
  * File uploads (resume)

---

## 💡 Future Enhancements

* Support full autofill across:

  * LinkedIn
  * Indeed
  * Naukri
  * Career portals
* Multiple candidate profiles
* One-click “Autofill this page” button
* AI-based field matching

---


## © Copyright

© 2025 Rajesh Korlapati. All Rights Reserved.

This project is proprietary and confidential.  
No part of this project may be reproduced, distributed, modified, or used  
in any form without express written permission from the copyright owner.

You may view and use the extension for personal, non-commercial purposes only.


---


