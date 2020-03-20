import "./styles.css"
import Button from "../button/button"
import InputBox from "../inputbox/inputbox"
import React from "react";

function Form(props) {    
    return (
    <div>
    <form>
        <InputBox />
        <br/>
        <br/>
        <Button />
    </form>
    </div>
    );
}

export default Form
