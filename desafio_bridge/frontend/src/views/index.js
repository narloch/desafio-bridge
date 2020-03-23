import React from "react";
import "./styles.css";
import Form from "../components/form/form"
import Header from "../components/header/header"
import Container from "../components/container/container"
import FadeIn from 'react-fade-in';
import axios from "axios";

class Home extends React.Component {
    state = {
      number: "",
      output_number: "",
      prime: "",
      divisors: "",
      isHidden: true
    };

    onChange = updatedValue => {
      this.setState({
        number: {
          ...this.state.number,
          ...updatedValue,
        },
        isHidden: true,
      });
    };

    onSubmit = changeVisibility => {
        this.getAnswer()    
      this.setState({
        isHidden: false,
      });
    };

    async getAnswer() {
      const url = "http://localhost:8000";
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const promise = await axios.post(url, this.state.number, config);
      const data = promise.data; 

      this.setState({
          output_number:data.number,
          divisors:data.divisors,
          prime:data.prime
      });
    }
  
    render() {
        return (
          <div>
            <div className="Form-container">
              <Form onChange={number => this.onChange(number)} onSubmit={this.onSubmit}/>
              <br />
              {!this.state.isHidden && <FadeIn><Container 
                                                  divisors={(this.state.divisors).toString()}
                                                  prime={this.state.prime}
                                                  number={this.state.output_number}
                                                  /></FadeIn>}
            </div>
          </div>
        );
    }
  }

  export default Home;
