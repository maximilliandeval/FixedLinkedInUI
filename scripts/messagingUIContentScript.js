// Function to check if we're on the messaging page
const isMessagingPage = () => {
    return window.location.pathname.startsWith("/messaging/thread/");
  };
  
  // Function to remove the sidebar only on the messaging page
  const removeAsideElement = () => {
    if (isMessagingPage()) {
      const asideElement = document.querySelector('aside.scaffold-layout__aside');
      if (asideElement) {
        asideElement.remove();
        console.log('aside.scaffold-layout__aside removed successfully on the messaging page.');
      }
    }
  };
  
  // Run once in case the element is already there
  removeAsideElement();
  
  // MutationObserver to handle dynamically loaded content
  const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        removeAsideElement();
      }
    }
  });
  
  // Observe the document body for changes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Listen for LinkedIn's SPA navigation events
  window.addEventListener('popstate', removeAsideElement);
  window.addEventListener('pushstate', removeAsideElement);
  window.addEventListener('replaceState', removeAsideElement);  