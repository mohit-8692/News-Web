import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in'); // Default country code is 'in'
  const [countryName, setCountryName] = useState('India'); // Default country name is 'India'
  const [page, setPage] = useState("1"); // Add page state

  return (
    <>
      <ErrorBoundary>
        <Navbar setCountry={setCountry} setCountryName={setCountryName} setCategory={setCategory} />
        <Dashboard country={country} countryName={countryName} category={category} page={page} />
        <Footer setPage={setPage} /> {/* Pass setPage as a prop */}
      </ErrorBoundary>
    </>
  );
}

export default App;
