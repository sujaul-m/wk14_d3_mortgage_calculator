import React, {Component} from 'react';
import './MortgageForm.css'

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSalary: 0,
      partnerSalary: 0,
      deposit: 0,
      monthlySpend: 0
    };
    this.handleUserSalaryChange = this.handleUserSalaryChange.bind(this);
    this.handlePartnerSalaryChange = this.handlePartnerSalaryChange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleMonthlySpendChange = this.handleMonthlySpendChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserSalaryChange(event) {
      this.setState({userSalary: parseInt(event.target.value)});
  }

  handlePartnerSalaryChange(event) {
    this.setState({partnerSalary: parseInt(event.target.value)});
  }

  handleDepositChange(event) {
    this.setState({deposit: parseInt(event.target.value)});
  }

  handleMonthlySpendChange(event) {
    this.setState({monthlySpend: parseInt(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    const userSalary = this.state.userSalary;
    if(!userSalary) {
      return
    }

    this.props.onFormSubmit(this.state);

  }

  render() {
    return (
      <div className="mortgage-form">
        <form className="mortgage-form" onSubmit={this.handleSubmit}>
          <label htmlFor="user-salary">Your Salary: £ </label>
          <input
            id="user-salary"
            min="0"
            type="number"
            placeholder="Your Salary"
            value={this.state.userSalary}
            onChange={this.handleUserSalaryChange}>
          </input>
          <br/>
          <label htmlFor="partner-salary">Your Partner's Salary: £ </label>
          <input
            id="partner-salary"
            min="0"
            type="number"
            placeholder="Partners Salary"
            value={this.state.partnerSalary}
            onChange={this.handlePartnerSalaryChange}></input>
          <br/>
          <label htmlFor="deposit">Enter Deposit Amount: £ </label>
          <input
            id="deposit"
            min="0"
            type="number"
            placeholder="Deposit..."
            value={this.state.deposit}
            onChange={this.handleDepositChange}></input>
          <br/>
          <label htmlFor="monthly-spend">Enter Monthly Outgoing Amount: £ </label>
          <input
            id="monthly-spend"
            min="0"
            type="number"
            placeholder="Monthly Spend"
            value={this.state.monthlySpend}
            onChange={this.handleMonthlySpendChange}></input>
          <br/>
          <input type="submit" value="Calculate Mortgage"></input>
        </form>
      </div>
    )
  }

}

export default MortgageForm;
