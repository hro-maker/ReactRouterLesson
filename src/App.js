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
import Posts from "./components/Posts";
import Todos from "./components/Todos";
export function App(props) {
  const [value,setValue]=useState("")
  // const {children} = props;

  const setClassName = ({ isActive }) => isActive ? 'active' : 'disabled'
  return (
    <>
      <Provider store={store}>
       <Todos/>
      </Provider>
    </>
  );
}

