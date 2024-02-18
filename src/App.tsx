import  { useState, useEffect } from 'react';
import './App.css'; 

function ScrollComponent() {
  const [showRedDiv, setShowRedDiv] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 500) {
        setShowRedDiv(true);
      } else {
        setShowRedDiv(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="scroll-container">
      {showRedDiv && <div className="red-div"></div>}
      <div className="content">
        {/* Your other content goes here */}
      </div>
    </div>
  );
}

export default ScrollComponent;
