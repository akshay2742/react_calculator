import React, { Component } from 'react';
import '../components_css/calculator.css';

class CalculatorView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputValue: ``,
       a: ``,
       b: ``
    }
  }
  
  changeInput = (event) => {
    this.setState((prevState) => ({
      inputValue: `${prevState.inputValue} ${event.target.value}`
    }),() => {console.log(this.state.inputValue)})
    event.preventDefault();
  }

  changeToClear = (event) => {
    this.setState({
      inputValue: ``
    })
    event.preventDefault();
  }
  addNum = (event, prevState) => {
    if(event.target.value === `+`){
      this.setState((prevState) => ({ 
        a: parseInt(prevState.inputValue),
        b:  event.target.value,
        inputValue: ``
      }))
    }
    
  }

  equal = (event) => {
    var c = parseInt(this.state.inputValue)
      if(this.state.b === `+`){
        this.setState((prevState) => ({
          inputValue: this.state.a + c,
          a: ``,
          b: ``
      }),() => {console.log(this.state.inputValue)})
      }
      
  }
    render() {
    return (<>
    <div className='main_page'>  
        <div className='calculator'>
            <input type='text' className='calculator_input' placeholder='Enter the Operations' defaultValue={this.state.inputValue}/>
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
                    <button value='+' onClick={this.addNum}>+</button>
                    <button value='-' onClick={this.changeInput}>- </button>
                </div>
                <div className='button_mul_div'>
                    <button value='*' onClick={this.divNum}>*</button>
                    <button value='/' onClick={this.changeInput}>/</button>
                </div>
                <div className='button_mod_pow'>
                    <button value='%' onClick={this.changeInput}>%</button>
                    <button value='Pow' onClick={this.changeInput}>Pow</button>
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
