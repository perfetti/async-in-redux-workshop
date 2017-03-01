import './index.css';
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from 'actions/counter-actions';

class Counter extends Component {
  componentDidMount() {
    this.props.changeImage();
  }

  render(){
    const {url, catCount} = this.props
    const cats = [];
    for (let i = 0; i < catCount; i++) {
      const key = i;
      cats.push(catImage(url, key))
    }
    return (
      <div className='counter-container'>
        <div className='buttons'>
          <button className='increment' onClick={this.props.incrementCatCount}>More Cats</button>
          <button className='decrement' onClick={this.props.decrementCatCount}>Fewer Cats</button>
          <br />
          <br />
          <button className='decrement' onClick={this.props.changeImage}>Change Image</button>
        </div>
        { cats }
      </div>
    );
  }
}

function catImage(src, key) {
  return <img width='200' src={src} key={key} />
}

// Runs on first load
function mapStateToProps({counterData}) {
  console.log('mapStateToProps: ', counterData);
  return {
    catCount: counterData.catCount,
    url: counterData.url
  };
}

export default connect(mapStateToProps, actions)(Counter);
