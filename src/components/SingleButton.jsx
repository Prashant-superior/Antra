import React from 'react';

export default function SingleButton({ color = '#cae9e5', correct, onClick }) {
  // Function to darken a hex color (for the shadow effect)
  const darkenColor = (hex, percent) => {
    // Remove the # if present
    hex = hex.replace(/^#/, '');
    
    // Convert to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Darken
    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));

    // Convert back to hex
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const buttonStyle = {
    '--swipe-color': color,
    '--shadow-color': darkenColor(color, 20),
  };

  return (
    <>   <button 
      onClick={() => onClick(correct)}
      className={`
        relative h-[25px] w-full overflow-hidden border bg-white px-3 
        shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 
        before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 
        hover:before:right-auto hover:before:left-0 hover:before:w-full 
      `}
      style={buttonStyle}
    >

    
    <style jsx="true">{`
      button {
        color: var(--swipe-color);
        border-color: var(--swipe-color);
      }
      button:before {
        background-color: var(--swipe-color);
      }
      button:hover {
        box-shadow: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);
      }
    `}</style>
  </button>
  </>
     
    
  );
}