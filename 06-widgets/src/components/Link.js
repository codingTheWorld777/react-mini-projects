import React from "react";

const Link = ({ className, href, children, index, onLinkClick }) => {
  const onClick = (event) => {
    // Handling command clicks
    if (event.metaKey || event.ctrlKey) {
      console.log(index);
      onLinkClick(index);
      return;
    }

    // default loading when clicking on a tag "a" is no longer active
    // so when we click on a tag "a" link, it is not load the page or change page's content
    // or change page's URL
    event.preventDefault();   
    
    // Change the URL but don't do a full page refresh
    window.history.pushState({}, "", href);

    // This is going to communicate over to those root component that the URL has just changed.
    // Each Route could detect the URL has changed (see in Route component)
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    // Just activate the item in header when user clicks on its 
    onLinkClick(index);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
