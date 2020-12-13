import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
   super(props);
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
     , result: []
   }
 }

 searchFunction(e) {
    let searchString = e.target.value;

    console.log(searchString)

    if (searchString !== "") {
      console.log("test", this.state.things)
      this.setState({result: (this.state.things.filter(res => 
        res.includes(searchString)
      ))})
    } else {
      this.setState({result: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']});
    }
 }

 render() {
   return (
     <div>
       <Input type="text" placeholder='Search Here' onChange={(e) => this.searchFunction(e)} />
       <h3>Results:</h3>
       <ul>
         {this.state.result.map(thing => (
           <li>{thing}</li>
         ))}
       </ul>
     </div>
   )
 }
}
 