import React from 'react';

function ImageHeader() {
  return (
    <div className="flex items-center mb-8">
      <img 
        className="w-28 h-28 object-contain"
        src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png" 
        alt="TypeScript Logo"
      />
      <span className="mx-4">+</span>
      <img 
        className="w-28 h-28 object-contain"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" 
        alt="React Logo"
      />
    </div>
  );
}

export default ImageHeader;
