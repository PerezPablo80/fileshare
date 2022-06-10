import axios from 'axios';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css';


function FormLoad() {
  const [selectedFile,setSelectedFile]=React.useState<File|string>(" ");
  const [activateSpinner, setActivateSpinner] = useState(false);
  const [message, setMessage] = useState('');
  
  function spinner(){
    if(activateSpinner)
      return (<button type='submit'>Enviar <Spinner animation='border' aria-hidden="false" id='spinner'/> </button>);
    return (<button type='submit'>Enviar </button>);
        
  }
  function messagePop(){
    if(message.length>3){
      return (<div className='message'> {message}</div>);
    }
    return (<></>);
  }
  const changeHandler = (event:any) => {
		setSelectedFile(event.target.files[0]);
	};
  const refreshTimer=()=>{
    setInterval(()=>{
      {
        window.location.reload();
      }
    },1500);
  }
  const submitFile=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    let url=process.env.REACT_APP_URL||'http://localhost:3002';
    const formData = new FormData();
    formData.append('file', selectedFile);
    setActivateSpinner(true);
    axios.post(url,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }).then((resp)=>{
      // console.log(resp.data); // just to show the data received
      setMessage(resp.data.msg);
      setActivateSpinner(false);
      refreshTimer();
    }).catch((e)=>{
      // console.log("ERROR::",e); //show error
      setMessage(e);
    });

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container-fluid'>
        <div>{process.env.REACT_APP_URL_TXT}:{process.env.REACT_APP_URL}</div><br/>        
        <form onSubmit={submitFile} method='post' encType='multipart/form-data'>
          <input type="file" onChange={changeHandler} name='filetoupload'></input><br/>
          {messagePop()}<br/>
          {spinner()}
        </form>
        </div>
      </header>
    </div>
  );
}

export default FormLoad;
