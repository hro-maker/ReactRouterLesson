import { Fragment, useState } from "react";
import {  Person,  Person2 } from './pagess/Person'
import {Bar} from './pages/Bar'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
import Home from "./pagess/home";
import About from "./pagess/about";
import All from "./pagess/All";
import Post from "./pagess/post";
import NotFound from "./pagess/NotFound";
import LoadingProvider from './LoadingContext'
import { Provider } from 'react-redux'
import { store } from "./redux";
import './App.css';
import ActionButtons from './pagess/ActionButtons'
export function App(props) {
  const [value,setValue]=useState("")
  // const {children} = props;

  const setClassName = ({ isActive }) => isActive ? 'active' : 'disabled'

  return (
    <>
   <LoadingProvider>
    <Provider store={store}>
      <ActionButtons/>
      <Router>
      <NavLink className={setClassName} to="/" style={{margin:"20px"}}>home</NavLink>
      <NavLink className={setClassName} to="/about" style={{margin:"20px"}}>About</NavLink>
      <NavLink className={setClassName} to="/all" style={{margin:"20px"}}>all</NavLink>
         <Routes>
         <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/all" element={<All/>} />
       <Route path="/post/:id" element={<Post/>} />
       <Route path="*" element={<NotFound/>} />
         </Routes>
      </Router>
      </Provider>
      </LoadingProvider>
    </>
  );
}

