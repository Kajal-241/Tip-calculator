import React from 'react'

class Service extends React.Component {


    sendService = (event) => {
        this.props.serviceFun(event);
    }

    sendCustName = (event) => {
        this.props.serviceCustName(event);
    }

    addCustomer = (event) => {
        this.props.cust(event)
    }

    render() {

        return (

            <>
                <small>How was the Service</small>
					<br></br>
                <select onChange={this.sendService}>
                    <option value="PleaseSelect" >Choose...</option>
                    <option value={0.2}> Excellent </option>
                    <option value={0.1}> Moderate </option>
                    <option value={0.05}> Bad </option>
                </select>

					<br></br>
                    <p></p>

                <input className="txt" type="text" placeholder="Enter Customer Name" onChange={this.sendCustName} />
                <br></br>
                <p></p>
                 <br></br>

                <br></br>
                <p></p>
                <br></br>
                <button  onClick={this.addCustomer} >Add Customer</button>
                
            </>
        )
    }
}

export default Service
