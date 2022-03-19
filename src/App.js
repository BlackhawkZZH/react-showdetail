import React from 'react';
import './style.css';

// click name to show its detail

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIdx: -1,
      info: [
        { name: 'Lily', details: '1 huba  dew' },
        { name: 'Ben', details: 'Be yi ou' },
        { name: 'Vic', details: 'poll the qa' },
        { name: 'Chuck', details: 'Feel tier' },
        { name: 'Will', details: '5 Hi de Ne' },
      ],
    };
  }

  getDetails = (i) => {
    this.setState({
      activeIdx: i,
    });
  };

  render() {
    return this.state.info.map((elem, i) => {
      return (
        <li key={i} onClick={() => this.getDetails(i)}>
          {this.state.activeIdx === i ? elem.details : elem.name}
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
