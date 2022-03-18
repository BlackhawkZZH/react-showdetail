import React from 'react';
import './style.css';

// click name to show its detail

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { name: 'Lily', details: '1 huba  dew', detailDisplay: false },
        { name: 'Ben', details: 'Be yi ou', detailDisplay: false },
        { name: 'Vic', details: 'poll the qa', detailDisplay: false },
        { name: 'Chuck', details: 'Feel tier', detailDisplay: false },
        { name: 'Will', details: '5 Hi de Ne', detailDisplay: false },
      ],
    };
  }

  getDetails = (i) => {
    const temp = this.state.info.slice();
    temp[i].detailDisplay = true;
    this.setState({
      info: temp,
    });
    setTimeout(() => {
      const temp = this.state.info.slice();
      temp[i].detailDisplay = false;
      this.setState({
        info: temp,
      });
    }, 500);
  };

  render() {
    return this.state.info.map((elem, i) => {
      return (
        <li key={Math.random()} onClick={() => this.getDetails(i)}>
          {elem.detailDisplay ? elem.details : elem.name}
        </li>
      );
    });
  }
}

class ShowDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>{this.props.header}</h5>
        <Person />
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <ShowDetail header="ShowDetail" />
    </div>
  );
}
