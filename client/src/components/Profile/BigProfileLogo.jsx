import React from 'react'

const BigProfileLogo = ({ img, alt, size }) => {
    return (
      <div className={`w-${size} h-${size} rounded-full overflow-hidden bg-black`}>
        <img src={img} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
}

export default BigProfileLogo