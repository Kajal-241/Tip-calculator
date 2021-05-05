
import React from 'react'

class Service extends React.Component {


    sendService = (event) => {
        this.props.serviceFun(event);
    }

    sendCustName = (event) => {
        this.props.serviceCustName(event);
    }

    addCustomer = (event) => {
        this.props.chutiyaPradhan(event)
    }

    render() {

        return (

            <>
                <small>How was the Service</small>
					&nbsp;&nbsp;&nbsp;
                <select onChange={this.sendService}>
                    <option value="PleaseSelect" >Choose...</option>
                    <option value="Excellent"> Excellent </option>
                    <option value="Moderate"> Moderate </option>
                    <option value="Bad"> Bad </option>
                </select>

					&nbsp;&nbsp;&nbsp;

                <input type="text" placeholder="Enter Customer Name" onChange={this.sendCustName} />

					&nbsp;&nbsp;&nbsp;

                <button onClick={this.addCustomer} >Add Customer</button>
            </>
        )
    }
}

export default Service
