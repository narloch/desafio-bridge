import React from "react";
import "./styles.css";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { number: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <div className="container">
        <form>
            <br/>
            <input type="number" min = '0' id="inputbox" placeholder="Insira o número"/>
            <br/>
            <br/>
            <button type="submit" className="button">Enviar</button>
        </form>
        </div>
      );
    }
  }

  export default Form;
