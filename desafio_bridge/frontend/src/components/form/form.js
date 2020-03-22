import "./styles.css"
import React from "react";

class Form extends React.Component { 
    state = {
        number: "",
    };

    change = e => {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onSubmit = e => {
        e.preventDefault();
        
        this.setState({
          number: "",
        });
        this.props.onChange({
          number: "",
        });
        this.props.onSubmit();
      };

    render() {
        return (
        <form>
            <input 
                type="number" 
                name="number"
                min='1' 
                id="inputbox" 
                placeholder= "Insira o número"
                value={this.state.number}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            <button className="button" onClick={e => this.onSubmit(e)}>Enviar</button>
        </form>
        );
    }
}

export default Form
