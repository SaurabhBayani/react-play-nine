import React from 'react';

class AnswersTile extends React.Component {
    constructor(props){
        super(props);
        this.selectedNumbersDom = [];
    }
    render() {
        let me = this;
        this.selectedNumbersDom = this.props.selectedNumbers.map(function(number, i){
            return <span className='number-div' key={i} onClick={me.props.unSelectNumber.bind(null, number)}>{number}</span>
        });
        return (
            <div className='well answers-tile'>
                {this.selectedNumbersDom}
            </div>
        )
    }
}

export default AnswersTile;