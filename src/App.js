import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: '',
                  name: '',
                  password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
 
  }

  handleChange(event) {

    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   async handleSubmit(event){    
    event.preventDefault();
    let user={email: this.state.email, name: this.state.name, password:this.state.password};
    const resp = await axios.post(`http://localhost:4000/api/users`,user);
    console.log(resp);            
  };

  render() {
  return  (
    <form onSubmit={this.handleSubmit}>
      <div>
       <label>Email</label>
       <input type='text' name='email' value={this.state.email} onChange={this.handleChange} ></input>
      </div>
      <div>
       <label>Name</label>
       <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
      </div>
      <div>
       <label>Password</label>
       <input type='text' name='password' value={this.state.password} onChange={this.handleChange}></input>
      </div>
      <div>
       <label>Retype Password</label>
       <input type='text'></input>
      </div>
      <div>       
       <button>Save</button>
      </div>
    </form>
  );
}
}

export default App;
