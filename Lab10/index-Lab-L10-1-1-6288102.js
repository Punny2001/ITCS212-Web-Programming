import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InfoForm extends React.Component
{
  constructor(props) {
    super(props);
    if (this.props.type === "special") {
      this.state = {
        firstname: "",
        lastname: "",
        age: "",
        nationality: "Thai",
        disability: "No"
      }
    } else {
      this.state = {
        firstname: "",
        lastname: "",
        age: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let name = e.target.name;
    let val = e.target.value;
    console.log(val);
    if (name === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({
      [name]: val
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.props.type === "normal")
      alert(`Hello, ${this.state.firstname} ${this.state.lastname}\nYour Age is ${this.state.age}`);
    else
      alert(`Hello, ${this.state.firstname} ${this.state.lastname}\nYour nationality is ${this.state.nationality}`)
  }
render() {
    if (this.props.type === "normal") {
      return(
      <form onSubmit={this.handleSubmit}>
      <label>First Name:</label>
      <input name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange}/>
      <br />
      <label>Last Name:</label>
      <input name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange}/>
      <br />
      <label>Age:</label>
      <input name="age" type="text" value={this.state.age} onChange={this.handleChange}/>
      <br />
      <input type="submit" value="Submit" />
      </form>
      );
    }else{
      return(
      <form onSubmit={this.handleSubmit}>
      <label>First Name:</label>
      <input name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange}/>
      <br />
      <label>Last Name:</label>
      <input name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange}/>
      <br />
      <label>Age:</label>
      <input name="age" type="text" value={this.state.age} onChange={this.handleChange}/>
      <br />
         <label>Pick your nationality:</label>
         <select value={this.state.natioality} name = "nationality" onChange={this.handleChange}>
           <option value="Thai">Thai</option>
           <option value="British">British</option>
           <option value="Chinese">Chinese</option>
         </select><br />
         <label>Disability:</label>
         <select value={this.state.disability} name = "disability" onChange={this.handleChange}>
           <option value="Yes" >Yes</option>
           <option value="No" >No</option>
         </select><br />
      <input type="submit" value="Submit" />
      </form>
      );
    }
    
  }
}

ReactDOM.render(<InfoForm type="normal" />, document.getElementById("root"));
// ReactDOM.render(<InfoForm type="special" />, document.getElementById("root"));
