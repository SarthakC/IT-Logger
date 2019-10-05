import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';

import './App.css';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.min';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </>
  );
};

export default App;
