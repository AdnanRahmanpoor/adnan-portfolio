import { useState } from 'react';

function CustomCursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div
      className='custom-cursor'
      style={{
        left: cursorX + 'px',
        top: cursorY + 'px',
      }}
    ></div>
  );
}
export default CustomCursor;
