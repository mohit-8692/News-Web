import React, { useState } from 'react';

function Navbar({ setCountry, setCountryName, setCategory }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
    setCountry(selectedValue);
    
    //Implemet switch case to get the contry name so we can display it to the main screen
    switch (selectedValue) {
      case 'in':
        setCountryName('India');
        break;
      case 'pk':
        setCountryName('Pakistan');
        break;
      case 'au':
        setCountryName('Australia');
        break;
      case 'us':
        setCountryName('United States');
        break;
      case 'br':
        setCountryName('Brazil');
        break;
      // Add more cases for other countries as needed
      default:
        setCountryName('');
        break;
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">NewsWeb</span>
    </div>

    <div className="hidden md:block">
      <label htmlFor="country" className="text-md font-bold text-white">Select Country:  </label>
      <select
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="rounded-md border focus:ring-blue-500 focus:border-blue-500 px-3 py-2 text-sm leading-tight"
      >
        {/* <option value="">Select Country</option> */}
        <option value="in">India</option>
        {/* <option value="pk">Pakistan</option> */}
        <option value="br">Brazil</option>
        <option value="us">United States</option>
        <option value="au">Australia</option>
      </select>
    </div>

    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-language">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg cursor-pointer bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("science")}>Science</div>
        </li>
        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("business")}>Business</div>
        </li>
        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div
            className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("sports")}>Sports</div>
        </li>

        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("health")}>Health</div>
        </li>

        <li className="md:w-1/6 lg:w-1/7 xl:w-1/8">
          <div className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 cursor-pointer" onClick={() => setCategory("technology")}>Technology</div>
        </li>
      </ul>
    </div>

    <div className="md:hidden flex justify-between w-full">
      <label htmlFor="country" className="text-md font-bold text-white">Select Country:  </label>
      <select
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="rounded-md border focus:ring-blue-500 focus:border-blue-500 px-3 py-2 text-sm leading-tight"
      >
        {/* <option value="">Select Country</option> */}
        <option value="in">India</option>
        {/* <option value="pk">Pakistan</option> */}
        <option value="br">Brazil</option>
        <option value="us">United States</option>
        <option value="au">Australia</option>
      </select>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
