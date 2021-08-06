import React, { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  // Take the root is updated
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Each Route could detect the URL has changed 
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange, { capture: true });

    return () => {
      window.removeEventListener("popstate", onLocationChange, { capture: true });
    };
  }, []);

  return currentPath === path ? <div>{children}</div> : null;
};

export default Route;
