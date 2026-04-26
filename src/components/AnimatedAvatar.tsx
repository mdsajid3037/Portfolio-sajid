
import { useState, useEffect } from 'react';

const AnimatedAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-32 h-32 mx-auto mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      
      {/* Inner circle */}
      <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center overflow-hidden">
        {/* Avatar content */}
        <img 
  src="/Sajid_photo.jpg" // <-- Replace with your actual image path or URL
  alt="Avatar"
  className={`w-full h-full rounded-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
/>
      </div>
      
     
    </div>
  );
};

export default AnimatedAvatar;
