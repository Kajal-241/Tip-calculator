import React from 'react';

import './App.css';
import Service from './Service.js'
import Output from './Output.js'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      billAmount: 0,
      service: '',
      custName: '',
      totalTip: 0,
      totalCust: 0,
      custList: [],
      listArray: []
    }

  }


  getAmount = (event) => {
    this.setState({ billAmount: event.target.value });

  }

  getService = (event) => {
    this.setState({ service: event.target.value });
  }

  getCustName = (event) => {
    this.setState({ custName: event.target.value });
  }


  callback = () => {
    var tempArray = this.state.custList.map((item, index) => (`${item.name} offered a tip of ${item.perc} RS`))

    console.log(tempArray);

    this.setState({ listArray: tempArray })
    console.log(this.state.listArray);
  }

  addCustomer = (event) => {
    console.log(this.state.billAmount);
    console.log(this.state.service);
    console.log(this.state.custName);

    var result = this.state.billAmount * this.state.service;
    console.log(result);


    this.setState({ custList: [...this.state.custList, { name: this.state.custName, perc: result }] }, this.callback);




  
  }

  caluculateTip = () => {


    let tipTotal = 0
    this.state.custList.forEach((item, index) => {
      tipTotal += item.perc;
      console.log(tipTotal, "tipTotal");
      console.log(item.perc, "perc");
    })
    this.setState({ totalTip: tipTotal })

    this.setState({ totalCust: this.state.custList.length })
  }

  render() {

    console.log(this.state.custList);
    return (


      <div>
        <h1>Tip Calcualtor</h1>
        <h5>Build in React </h5>

        <p>Enter your Bill AMount</p>
        <input className="bm" type="number" placeholder="Enter bill " onChange={this.getAmount} required pattern="[0-9]"  />

        <br />

        <Service serviceFun={this.getService} serviceCustName={this.getCustName} cust={this.addCustomer} />

        <br />
        
        <Output data={this.state.listArray} totalTip={this.state.totalTip} totalCust={this.state.totalCust} />

        <button className="button" onClick={this.caluculateTip}>Calculate Tip and Customer</button>
        <hr></hr>
        <footer>@2020 Tip-Calculator </footer>
      </div>



    )
  }
}

export default App;
