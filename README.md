# Highspell Redirect Browser Extension

A lightweight browser extension for Firefox and Chrome that automatically redirects any visits to the old HighSpell Fandom wiki (`https://highspell.fandom.com`) to the new official site at [`https://HighSpell.wiki`](https://highspell.wiki).

---

## 🔄 What It Does

- Redirects all page loads from `highspell.fandom.com` to `highspell.wiki`.
- If the exact page doesn't exist or has a different name, it redirects to the search page on the new wiki using the original page title.
- On Google search result pages, it replaces Fandom links with `highspell.wiki` links.

---

## 🛠 Installation

### Firefox

Install via the [Firefox Add-ons site](#).  
(*Link will be updated once published.*)

### Chrome

Install via the [Chrome Web Store](#).  
(*Link will be updated once published.*)

---

## 🧪 Running Locally (Unpacked)

You can run the extension directly as an unpacked extension in your browser:

### Firefox
1. Go to `about:debugging`
2. Click **"This Firefox"**
3. Click **"Load Temporary Add-on"**
4. Select the `manifest.json` file in the extension folder

### Chrome
1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **"Load unpacked"**
4. Select the root folder of this extension

---

## 📁 File Overview

- `manifest.json` – Extension configuration and permissions
- `background.js` – Redirect logic
- `content.js` – Link replacement logic for search engines
- `icon-X.png` – Extension icon(s)

---

## 📝 License

This project is open source and available under the [MIT License](https://github.com/SpegalDev/HighSpell-Wiki-Redirector/blob/main/LICENSE).

---

## 💬 Questions / Feedback

Feel free to [open an issue](https://github.com/SpegalDev/HighSpell-Wiki-Redirector/issues) or contribute via pull requests.
