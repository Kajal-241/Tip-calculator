import React from 'react'

class Output extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {

        console.log(typeof (this.props.data));
        return (

            <>

            <div className="output">
               <h3>Customer List</h3>
               <ul>
                    {this.props.data.map((item, index) => (
                        <span className="spn"><li key={index}><strong>{item}</strong></li></span>  
                    ))}

                </ul>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th >Number of customers</th>
                              &nbsp;&nbsp;&nbsp;
                            <th>Total Tip</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr">
                            <td>{this.props.totalCust}</td>
                            &nbsp;&nbsp;&nbsp;
                            <td >{this.props.totalTip}</td>
                        </tr>
                    </tbody>
                </table>

            </>

        )
    }
}

export default Output;
