// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
