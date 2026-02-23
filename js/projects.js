
// open link based on ID set
function openLinkNewTab(linkId) {
    const link = document.getElementById(linkId);
    if (link) {
        window.open(link.href, '_blank'); // Opens in a new tab
    }
}