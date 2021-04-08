import logo from './logo.svg';
import Image from './component/profile/ProfilPhoto';
import Name from './component/profile/FullName';
import Adress from './component/profile/Adress';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



const rootElement = document.getElementById("root");
ReactDOM.render(
<>
<Name />
<Image />
<Adress/>
</>
,rootElement);
  

export default rootElement;
