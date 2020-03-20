import React from "react";
import "./styles.css";
import Form from "../components/form/form"
import Header from "../components/header/header"
import Container from "../components/container/container"
import FadeIn from 'react-fade-in';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showAnswer: false };
    }

    render() {
      return (
        <div>
        <Header />
        <div className="Form-container">
          <Form />
          <FadeIn><Container /></FadeIn>
        </div>
        </div>
      );
    }
  }

  export default Home;
