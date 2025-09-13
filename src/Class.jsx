import { Component } from "react";

export default class BIO extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    
  }

  componentDidMount(){
    console.log("Mount");    
  }

  render() {
    console.log("render");
    
  }
}
