function redirectToWiki(details) {
  const url = new URL(details.url);
  const pageTitle = url.pathname.split('/').pop();
  
  // Build new wiki URL using search or direct link
  const targetUrl = `https://highspell.wiki/w/index.php?search=${encodeURIComponent(pageTitle)}`;
  
  return { redirectUrl: targetUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  redirectToWiki,
  { urls: ["*://highspell.fandom.com/*"], types: ["main_frame"] },
  ["blocking"]
);