import React from "react";
import "./styles.css";
import Form from "../components/form/form"
import Header from "../components/header/header"
import Container from "../components/container/container"
import FadeIn from 'react-fade-in';

class Home extends React.Component {
    state = {
      number: "",
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
      this.setState({
        isHidden: false,
      });
    };

    render() {
        return (
          <div>
            <Header />
            <div className="Form-container">
              <Form onChange={number => this.onChange(number)} onSubmit={this.onSubmit}/>
              <br />
              {!this.state.isHidden && <FadeIn><Container /></FadeIn>}
            </div>
          </div>
        );
    }
  }

  export default Home;
