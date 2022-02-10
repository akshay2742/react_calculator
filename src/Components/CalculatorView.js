import React, { Component } from 'react';
import '../components_css/calculator.css';
import '../components_css/output_screen.css';

class CalculatorView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputValue: ``,
       operator_1: ``,
       operand: ``,
       ListItem: ``
    }
  }
  
  //function for append the input value to the input field
  changeInput = (event) => {
    this.setState((prevState) => ({
      inputValue: `${prevState.inputValue}${event.target.value}`
    }),() => {console.log(this.state.inputValue)})
    event.preventDefault();
  }

  //function to clear the input field
  changeToClear = (event) => {
    this.setState({
      inputValue: ``
    })
    event.preventDefault();
  }

  //function to catch the operand
  performOperation = (event) => {
      this.setState((prevState) => ({ 
        operator_1: parseInt(prevState.inputValue),
        operand:  event.target.value,
        inputValue: ``
      }))
      event.preventDefault();
  }

  //function to perform all operations given in the calculator
  equal = (event) => {
    let operator_2 = parseInt(this.state.inputValue)
      //ADDITION
      if(this.state.operand === `+`){
        this.setState((prevState) => ({
          
          inputValue: this.state.operator_1 + operator_2,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${this.state.operator_1 + operator_2}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      else if(this.state.operand === `-`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 - operator_2,
          operator_1: ``,
          operand: ``,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${this.state.operator_1 - operator_2}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      else if(this.state.operand === `*`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 * operator_2,
          operator_1: ``,
          operand: ``,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${this.state.operator_1 * operator_2}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      else if(this.state.operand === `/`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 / operator_2,
          operator_1: ``,
          operand: ``,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${this.state.operator_1 / operator_2}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      else if(this.state.operand === `%`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 % operator_2,
          operator_1: ``,
          operand: ``,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${this.state.operator_1 % operator_2}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      else if(this.state.operand === `Pow`){
        this.setState((prevState) => ({
          inputValue: Math.pow(this.state.operator_1, operator_2),
          operator_1: ``,
          operand: ``,
          ListItem: `${this.state.operator_1} ${this.state.operand} ${operator_2} = ${Math.pow(this.state.operator_1, operator_2)}`
      }),() => {
        let ul = document.querySelector('.outputList');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.ListItem));
        ul.appendChild(li);
      })}
      event.preventDefault()
  }

    render() {
    return (<>
    <div className='main_page'>  
        <div className='calculator'>
            <input type='text' className='calculator_input' placeholder='Enter the Operators' defaultValue={this.state.inputValue} disabled/>
            <div className='calculator_buttons'>
              <div className='number_buttons'>
                <div className='button7_9'>
                  <button value='7' onClick={this.changeInput}>7</button>
                  <button value='8' onClick={this.changeInput}>8</button>
                  <button value='9' onClick={this.changeInput}>9</button>
                </div>
                <div className='button4_6'>
                  <button value='4' onClick={this.changeInput}>4</button>
                  <button value='5' onClick={this.changeInput}>5</button>
                  <button value='6' onClick={this.changeInput}>6</button>
                </div>
                <div className='button1_3'>
                  <button value='1' onClick={this.changeInput}>1</button>
                  <button value='2' onClick={this.changeInput}>2</button>
                  <button value='3' onClick={this.changeInput}>3</button>
                </div>
                <div className='buttondot_equal'>
                  <button value='.' onClick={this.changeInput}>.</button>
                  <button value='0' onClick={this.changeInput}>0</button>
                  <button onClick={this.equal}>=</button>
                </div>
              </div>
              <div className='operator_buttons'>
                <div className='button_clear'>
                    <button onClick={this.changeToClear}>Clear</button>
                </div>
                <div className='button_plus_minus'>
                    <button value='+' onClick={this.performOperation}>+</button>
                    <button value='-' onClick={this.performOperation}>- </button>
                </div>
                <div className='button_mul_div'>
                    <button value='*' onClick={this.performOperation}>*</button>
                    <button value='/' onClick={this.performOperation}>/</button>
                </div>
                <div className='button_mod_pow'>
                    <button value='%' onClick={this.performOperation}>%</button>
                    <button value='Pow' onClick={this.performOperation}>Pow</button>
                </div>
              </div>
            </div>
        </div>
        <div className='output'>
          <ul className='outputList'>

          </ul>
        </div>
    </div>
    </>);
  }
}

export default CalculatorView;
