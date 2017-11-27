import * as React from 'react';
import './batsman-score.css';
interface IProps{
    OnCountryChange: any;
    average: string;
}
interface IState{
    country: string;
}
class BatsmanScore extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {country: ''};
    }

    render() {
        const divStyle = {
            backgroundColor: 'blue',
            borderStyle: 'solid',
            borderColor: 'black',
            float: 'right',
            width: parseInt(this.props.average) * 2 + 'px'
        };
        return(
            <div className="batsman-container">
                <div>
                    The Country: <input type="text" onChange={evt => this.CountryChange(evt)}/>
                </div>
                <div> The Average: {this.props.average}</div>
                {isNaN(parseInt(this.props.average)) ? null : <div style={divStyle}/>}
            </div>
        );
    }
    CountryChange(evt: any) {
        this.state = evt.target.value;
        this.props.OnCountryChange(evt.target.value);
    }
    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        if (nextProps.average !== this.props.average) {
            return true;
        } else {
            return false;
        }
    }
}

export default BatsmanScore;