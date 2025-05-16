chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    const pageTitle = url.pathname.split('/').pop();
    const targetUrl = `https://highspell.wiki/index.php?search=${encodeURIComponent(pageTitle)}`;

    return { redirectUrl: targetUrl };
  },
  { urls: ["*://highspell.fandom.com/*"], types: ["main_frame"] },
  ["blocking"]
);