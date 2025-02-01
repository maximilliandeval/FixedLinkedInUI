// Function to check if we're on the messaging page
const isMessagingPage = () => {
    return window.location.pathname.startsWith("/messaging/thread/");
  };


const removeAsideElement = () => {
  // Function to remove unnecesary bottom padding on message form footer
  if (isMessagingPage()) {
    const messageFormFooter = document.querySelector('footer.msg-form__footer.flex-shrink-zero.pb7');
    if (messageFormFooter) {
      messageFormFooter.style.setProperty('padding-bottom','0', 'important');

      const timestamp = new Date().toLocaleTimeString();
      //console.log(`messageFormFooter padding shrunk successfully on the messaging page at ${timestamp}.`);
    }
  }

  // Function to make message preview column smaller
  if (isMessagingPage()) {
    const messageSelectionColumn = document.querySelector('div.scaffold-layout__list.msg__list');
    if (messageSelectionColumn) {
      messageSelectionColumn.style.setProperty('flex','1.5');

      const timestamp = new Date().toLocaleTimeString();
      //console.log(`messageSelectionColumn width decreased successfully on the messaging page at ${timestamp}.`);
    }
  }

  // Function to remove the sidebar only on the messaging page
  if (isMessagingPage()) {
    const asideElement = document.querySelector('aside.scaffold-layout__aside');
    if (asideElement) {
      asideElement.style.setProperty('display','none');

      const timestamp = new Date().toLocaleTimeString();
      console.log(`aside.scaffold-layout__aside removed successfully on the messaging page at ${timestamp}.`);
    }
  }
  if (isMessagingPage()) {
    const gridElement = document.querySelector('div.scaffold-layout__row.scaffold-layout__content.scaffold-layout__content--list-detail-aside.scaffold-layout__content--has-aside');
    if (gridElement) {
      gridElement.style.setProperty('grid-template-columns', '1fr');
      gridElement.style.setProperty('column-gap', '0px');

      const timestamp = new Date().toLocaleTimeString();
      console.log(`gridElement modified successfully on the messaging page at ${timestamp}.`);
    }
  }
  if (isMessagingPage()) {
    const mainColumn = document.querySelector('main#main.owQhjIxESroDAHODCBxSlmBwvpaDRfMnHg.scaffold-layout__list-detail.msg__list-detail');
    if (mainColumn) {
      mainColumn.style.setProperty('width', '100%');

      const timestamp = new Date().toLocaleTimeString();
      console.log(`mainColumn modified successfully on the messaging page at ${timestamp}.`);
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