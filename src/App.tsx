import * as React from 'react';
import './App.css';
import { Scores } from './models/scores';
import { GetScoresData } from './Services/dataService';
import BatsmanScore from './components/batsman-score';
// const logo = require('./logo.svg');
interface IAppState {
  isTestData: boolean;
  data: Scores[];
  firstCountry: string;
  secondCountry: string;
  firstAverage: string;
  secondAverage: string;
}
class App extends React.Component < {}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isTestData: true,
      data: [],
      firstCountry: '',
      secondCountry: '',
      firstAverage: 'a',
      secondAverage: 'a'
    };
    GetScoresData(true).then(result => {
      this.setState({
        data: result
      });
    });
  }
  render() {
    return (
      <div className="App">
        <div onChange={event => this.setDataSource(event)}>
        Source of data: 
        <input type="radio" value="test" defaultChecked={true} name="dataSource"/> Test Data
        <input type="radio" value="server" name="dataSource"/> Server Data
      </div>
      <BatsmanScore average={this.state.firstAverage} OnCountryChange={this.CountryChange.bind(this, 'first')}  />
      <BatsmanScore average={this.state.secondAverage} OnCountryChange={this.CountryChange.bind(this, 'second')}  />
      </div>
    );
  }
  CountryChange(type: string, input: any) {
    if (this.state.data.find(x => x.country.toLowerCase() === input.toLowerCase())) {
      const arr = this.state.data.filter(x => x.country.toLowerCase() === input.toLowerCase());
      const average: number = arr.map(x => x.score).reduce((prev: number, curr: number) => prev + curr) / arr.length;
      type === 'first' ? 
      this.setState({ firstAverage: average.toString()}) :
       this.setState({ secondAverage: average.toString()});
    } else {
      type === 'first' ? 
      this.setState({firstAverage: 'a'}) :
      this.setState({secondAverage: 'a'});
    }
  }

  setDataSource(evt: any) {
    GetScoresData(evt.target.value === 'test' ? true : false ).then(data => {
      this.setState({
        data
      });
    });
  }
}

export default App;
