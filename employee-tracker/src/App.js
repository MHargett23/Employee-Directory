import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './utils/api';
import BodyTable from './Components/tableBody'
class App extends React.component {
  state = {
    employees: []
  };

componentDidMount() {
  api.getMany(100)
  .then(res => this .setState({ employees: res.data }))
  .catch(err => console.log(err));
}

render () {
  return(
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
   

      <BodyTable users={this.state.employees}/>
    
  </tbody>
</table>)
}}

export default App;
