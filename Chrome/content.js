function rewriteFandomLinks() {
  const links = document.querySelectorAll('a[href*="highspell.fandom.com"]');

  links.forEach(link => {
    const url = new URL(link.href);
    const pageTitle = url.pathname.split('/').pop();

    // Rewrite to highspell.wiki search
    const newUrl = `https://highspell.wiki/w/index.php?search=${encodeURIComponent(pageTitle)}`;
    link.href = newUrl;
  });
}

// Google uses dynamic content loading – observe changes too
const observer = new MutationObserver(rewriteFandomLinks);
observer.observe(document.body, { childList: true, subtree: true });

// Run initially
rewriteFandomLinks();