import React, { useState } from 'react';

function Footer({ setPage }) { // Destructure setPage from props
  const [col, setCol] = useState("1");
  // console.log(col);

  return (
    <footer className='bg-gray-100 text-xl p-8 flex flex-col items-center md:flex-row'>
  <div className="items-center justify-between w-full md:w-auto md:order-1" id="navbar-language">
    <ul className="flex flex-wrap font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg cursor-pointer bg-gray-50 md:space-x-8 rtl:space-x-reverse">
      {[1, 2, 3, 4, 5].map(number => (
        <li key={number}>
          <div
            className={`flex justify-center items-center md:p-0 text-black hover:text-blue-700 cursor-pointer h-10 w-10 rounded-xl ${
              col === number.toString()? "bg-gray-400" : "bg-white"
            }`}
            onClick={() => { 
              setPage(number.toString()); 
              setCol(number.toString()); 
            }}
          >
            <h4>{number}</h4>
          </div>
        </li>
      ))}
    </ul>
  </div>
</footer>
  );
}

export default Footer;
