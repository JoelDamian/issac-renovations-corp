"use client";

import React from 'react';

const SmoothScrollLink = ({ href, children }) => {

  const handleClick = (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className='hover:text-cinnabar-900'>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
