import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  box-shadow:inset 0px 1px 0px 0px #caefab;
	background:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
	background-color:#006400;
	border-radius:6px;
	border:1px solid #268a16;
	display:inline-block;
	cursor:pointer;
	color:#006500;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #aade7c;
    text-align: center;
    &:hover{
      background:linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
	    background-color:#5cb811;
    }
    &:active{
      position:relative;
	    top:1px;
    }
  `;
  const Div = styled.div`
    color:#FFFFFF;
    text-align: left;
    background-color: #808080;
    width: fit-content;
    padding: 6px;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-gap: 1.5rem;
    width: 100%;
    
  `;
export default class FilesList extends React.Component{
  state={
    lst:[],
    disable:true,
    user:"",
    psd:""
  }
  
  componentDidMount(){
    let url=process.env.REACT_APP_URL||'http://localhost:3002';//hardcoded a url for saving a problem
    axios.get(url).then((data)=>{
      let str=data.data;  
        this.setState({lst:str});
      }).catch((e)=>{
        console.log("error:",e);
    });
  }
  async allowAccess(){
    let dat={user:this.state.user,password:this.state.psd};
    let res= await axios.post((process.env.REACT_APP_URL||'http://localhost:3002')+'/validate',dat);
    return res.data;
    
  }
  handleName=(event: { target: { value: any; }; }) =>{
    this.setState({user:event.target.value});
  }
  handlePassword=(event: { target: { value: any; }; }) =>{
    this.setState({psd:event.target.value});
  }
  
async accessFromButton(file:string){
  let access= await this.allowAccess();
  if(access.res){
    window.open((process.env.REACT_APP_URL||'localhost:3000')+'/file/'+file);
  }else{
    //showAlert('msg');
  }
}
getForm(){
return (<Div>
  <label className='form-label'>Usuario:</label>
  <br/><input type="text" name='user' onChange={this.handleName}/>
  <br/>
  <label className='form-label'>Clave :</label>
  <br/><input type="password" name='user' onChange={this.handlePassword}/>
  <p><br/>Para descargar, debe tener<br/> usuario y clave</p>
</Div>);
}

  render(){
    return(
      <div className='container-fluid' >
        {this.getForm()}
      <br/>        
      <Grid>
        {this.state.lst.map((file=>
          <Button key={file} onClick={()=>this.accessFromButton(file)}>{file}</Button>))}
      </Grid>
     
      </div>
    );
  }
}


