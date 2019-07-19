import React, { Component } from 'react';

class Friend extends Component {
 
 
 render() {
  return (
  <div style={styles}>
    <p style={nameStyle}>Name : {this.props.friend.name}</p>
    <div >
     <p>Age : {this.props.friend.age}</p>
    </div>
    <div style={sep}>
    <p>Email : {this.props.friend.email}</p>
    </div>
   </div>
  );
 }
}

export default Friend;
const styles = {
 display:'flex',
 width:'60%',
 justifyContent: 'space-evenly',
 margin: '10px auto',
 textAlign:'left',
 boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)',
 
}
const sep = {
textAlign:'left',
width:'30%',
}
const nameStyle = {
 width:'20%',
}