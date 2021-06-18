import React, {Component} from "react";
import axios from "axios";

class App extends Component {

  componentDidMount(){
    const config = {
      method: "POST",
      url: "https://psiteapi.azure-api.net/api/demo/ReactTest",
      headers: {"Ocp-Apim-Subscription-Key":"9fc0d4d53a3a41e89ca863de5b2f4668"}
    }
    axios(config).then(response => {console.log(response);});
  }

  render() {
    return (<p>Display This</p>)
  }}

export default App;
