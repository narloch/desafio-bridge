import React from "react";
import Header from "../../components/header/header"
import axios from "axios";
import "./styles.css";

class Repository extends React.Component {

    state = {
        postData: [],
    }

    componentWillMount() {
        this.loadTable();
    }

    async loadTable() {
        const promise = await axios.get("http://localhost:8000/repo");
        const status = promise.status;
            if(status===200) {
                const data = promise.data;
                this.setState({postData:JSON.parse(data)});
            }

        console.log(this.state.postData[0].fields.prime)
    }

    renderTable = () => {

        return(
            <table>
                <th id="num">Número</th>
                <th id="div">Divisores</th>
                <th id="pr">Primo</th>
            <tbody>{this.state.postData.map(function(item, key) {
                     return (
                        <tr key = {key}>
                            <td id="num">{item.fields.number}</td>
                            <td id="div">[{item.fields.divisors}]</td>
                            <td id="pr">{item.fields.prime.toString()}</td>
                        </tr>
                      )
                   
                   })}</tbody>
             </table>
        )
    }
    

      render() {
        return (
        <div className="Table-container">
            {this.renderTable()}
        </div>
        );
    }
}
  

export default Repository

