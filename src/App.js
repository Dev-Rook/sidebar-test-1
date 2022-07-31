import React, {useState} from 'react';
import './App.css';

import NavBar from './Componets/Nav Bar/NavBar';
import SideBar from './Componets/Side Bar/SideBar';

function App() {
  const {sideBar, setSideBar} = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState)
  }

  return (
    <div className="App">
      <NavBar openSideBar={toggleSideBar}/>
      <SideBar sideBar={sideBar} />
    </div>
  );
}

export default App;
