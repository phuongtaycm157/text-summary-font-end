import React, { Component } from 'react';

import './ContentComponent.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.textRaw = React.createRef();
    this.textSummary = React.createRef();

    this.postData = ()=> {
      let rawText = this.textRaw.current.value;
      
      let requestBody = {
        "rawText":rawText,
        "brif":0.3
      };

      console.log(requestBody);
      
      fetch('http://127.0.0.1:8000/resummer', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      }).then(resData => {
        console.log(resData);
        this.textSummary.current.value = resData
      }).catch(err => {
        console.log(err);
      })
    }
  }


  render() {
    return(
      <div className='main-content'>
        <div className='input-content'>
          <div className='input-content-header'>
            <span>Go to the main ideas in your texts, summarize them in 1 Click</span>
            <button onClick={() => this.postData()}>Summary</button>
          </div>
          <textarea ref={this.textRaw} placeholder='Copy and paste here your acticel text'></textarea>
        </div>
        <div className='output-content'>
          <div className='output-content-header'>
            <span>This is result</span>
            <button>Save</button>
          </div>
          <textarea ref={this.textSummary} placeholder='The result will be appear here'></textarea>
        </div>
      </div>
    );
  }
}

export default Content;