import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import FriendsList from './FriendsList';

export default function(props){
 
 const {component: Component} = props
  return (
  <Route exact path="/" props={props} render={() =>{
   const token = localStorage.getItem('token')
    console.log(Component)
   return token
          ? <Component /> 
          : <Redirect to="/login" />
  }} />
 
  )
}

