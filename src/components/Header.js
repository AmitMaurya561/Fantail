import React from 'react';

const Header = () => {
 

  return (
    <>
      <div className="flex justify-end mt-2 mr-4" style={{ fontFamily: 'Georgia pro', fontWeight:200}}>
        <select >
        <option value="option1">+91 Ind</option>
          <option value="option2">+1 USA</option>
          <option value="option3">+12 NED</option>
        </select>
      </div>
      <div className="border-b border-gray-300 w-full mt-1"></div>
    </>
  );
};

export default Header;
