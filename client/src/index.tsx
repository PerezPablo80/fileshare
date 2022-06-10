import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import FormLoad from './FormLoad';
import Routing from './Routing';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import './bootstrap.min.css';// Extra i had to copy the file on folder
import FilesList from './FilesList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routing/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/list' element={<FilesList/>}/>
	    <Route path='/load' element={<FormLoad/>}/>
      <Route path='/*' element={<FormLoad/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);