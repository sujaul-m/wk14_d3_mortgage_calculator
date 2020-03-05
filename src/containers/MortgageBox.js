import React, {Component} from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageResult from '../components/MortgageResult';
import TitleBar from '../components/TitleBar';
import './MortgageBox.css';

class MortgageBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSalary: 0,
      partnerSalary: 0,
      mortgageAwarded: 0,
      deposit: 0,
      monthlySpend: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({userSalary, partnerSalary, deposit, monthlySpend}){
    this.setState({userSalary: userSalary, partnerSalary: partnerSalary, deposit: deposit});
    const result = ((userSalary + partnerSalary - (12 * monthlySpend)) * 3) + deposit;
    this.setState({mortgageAwarded: result});
  }

  render() {
    return (
      <div className="mortgage-box">
        <TitleBar titleBarText="Mortgage Calculator App"/>
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <MortgageResult mortgageAwarded={this.state.mortgageAwarded}/>
      </div>
    )
  }

}

export default MortgageBox;
