import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #006500;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
function InSpanish(){
return( 
<div className="App-body">
  <br/>
  <h3>Esta es una prueba de concepto donde se muestra cómo trabajar con:</h3>
  <br/><br/>
  
    <ul className='greenTextColor'>
      <li>Como tener un cliente con React y un servidor con Node.JS</li>
      <li>Variables de entorno para acceder al servidor desde el cliente</li>
      <li>Como guardar archivos en una carpeta</li>
      <li>Como obtener archivos de una carpeta con un mínimo de seguridad</li>
      <li>Uso de estilos con Bootstrap para el menú y la navegación y Styled para el resto del contenido CSS</li>
      </ul>        
  <br/>
  <p>
    No se prueba con archivos grandes, es probable que los mismos requieran un timeout superior
  </p>
</div>
);
}
function InEnglish(){
  return (
    <div className="App-body">
  <br/>
  <h3>This is a proof of concept where we show:</h3>
  <br/><br/>
    <ul className='greenTextColor2'>
      <li>How to have a React client and a Node.JS server</li>
      <li>Environmental variables in React for accessing the server from the client</li>
      <li>How to store files on a folder</li>
      <li>how to list files from a folder and download them with a little security check</li>
      <li>How to use CSS styles with Bootstrap and Styled-components</li>
      </ul>        
  <br/>
  <p>
    I did not tried uploading or downloading big files, probabbly you will have to adjust the timemout for it
    </p>
</div>
  );
}
 function DefLang(props: { type: any; }){
  if(props.type) return InSpanish();
  return InEnglish();
}
function App() {
  const [inSpanish,setInSpanish] = useState(true);
  const [idioma,setIdioma]= useState("Español");
  return (
    <div className="App">
        <header className="App-header">
          Bienvenidos al sistema de prueba de gestión de archivos<br/>
          Welcome to the proof of concept for file uploading and downloading
        </header>
       <div className='idioma'>
       <label> [ Español | English  ]</label>
        <CheckBoxWrapper>
          <CheckBox onChange={()=>{
            if(inSpanish){
              setIdioma("English");
              setInSpanish(false);
            }else{
              setIdioma("Español");
              setInSpanish(true);
            }
          }} id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
        </CheckBoxWrapper>
        {idioma}
       </div>
       <div><DefLang type={inSpanish}/></div>
    </div>
  );
}

export default App;
