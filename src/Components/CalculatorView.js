import React, { Component } from 'react';
import '../components_css/calculator.css';

class CalculatorView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputValue: ``,
       operator_1: ``,
       operand: ``
    }
  }
  
  changeHandler = (event) => {
    this.setState((prevState) => ({
      inputValue: `${event.target.value}`
    }),() => {console.log(this.state.inputValue)})
    event.preventDefault()
  }

  changeInput = (event) => {
    this.setState((prevState) => ({
      inputValue: `${prevState.inputValue}${event.target.value}`
    }),() => {console.log(this.state.inputValue)})
    event.preventDefault();
  }

  changeToClear = (event) => {
    this.setState({
      inputValue: ``
    })
    event.preventDefault();
  }
  performOperation = (event) => {
      this.setState((prevState) => ({ 
        operator_1: parseInt(prevState.inputValue),
        operand:  event.target.value,
        inputValue: ``
      }))
      event.preventDefault();
  }

  equal = (event) => {
    let operator_2 = parseInt(this.state.inputValue)
      if(this.state.operand === `+`){
        this.setState((prevState) => ({
          
          inputValue: this.state.operator_1 + operator_2,
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      else if(this.state.operand === `-`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 - operator_2,
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      else if(this.state.operand === `*`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 * operator_2,
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      else if(this.state.operand === `/`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 / operator_2,
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      else if(this.state.operand === `%`){
        this.setState((prevState) => ({
          inputValue: this.state.operator_1 % operator_2,
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      else if(this.state.operand === `Pow`){
        this.setState((prevState) => ({
          inputValue: Math.pow(this.state.operator_1, operator_2),
          operator_1: ``,
          operand: ``
      }),() => {console.log(this.state.inputValue)})
      }
      event.preventDefault()
  }
    render() {
    return (<>
    <div className='main_page'>  
        <div className='calculator'>
            <input type='text' className='calculator_input' placeholder='Enter the Operators' defaultValue={this.state.inputValue} onChange={this.changeHandler}/>
            <div className='calculator_buttons'>
              <div className='number_buttons'>
                <div className='button7_9'>
                  <button id='button' value='7' onClick={this.changeInput}>7</button>
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

        </div>
    </div>
    </>);
  }
}

export default CalculatorView;
