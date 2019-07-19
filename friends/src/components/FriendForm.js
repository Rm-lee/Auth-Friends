import React, { Component } from 'react';

class FriendForm extends Component {
constructor(props) {
 super(props);
 this.state = {
  id: null,
  name: '',
  age: null,
  email: '',

 }
}
changeHandler = (e) => {
 e.preventDefault()
 this.setState({
  [e.target.name]: e.target.value
 })
}
 render() {
  return (
   <div>
   <form onSubmit={this.props.addNewItem} >
   <input style={styles}
       className="input"
       type="text"
       value={this.state.name}
       onChange={this.changeHandler}
       placeholder="Name"
       name="name"
   />
   <br/>
    <input style={styles}
       className="input"
       type="text"
       value={this.state.age}
       onChange={this.changeHandler}
       placeholder="Age"
       name="age"
   />
   <br/>
    <input style={styles}
       className="input"
       type="text"
       value={this.state.email}
       onChange={this.changeHandler}
       placeholder="Email"
       name="email"
   />
   <br/>
   <button style={stylesBtn} type="submit">Add Friend</button>
</form>
</div>
  );
 }
}

export default FriendForm;

const styles = {
 border: 'none',
 borderBottom: '1px solid black',
 textAlign: 'center',
 margin:'5px'
 
}
const stylesBtn = {
 backgroundColor: 'white',
 border: '1px solid black',
 padding: '5px 15px',
 margin: '10px'
}