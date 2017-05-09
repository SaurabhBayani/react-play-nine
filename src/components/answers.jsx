import React from 'react';

class AnswersTile extends React.Component {
    constructor(props){
        super(props);
        this.selectedNumbersDom = [];
    }
    render() {
        this.selectedNumbersDom = this.props.selectedNumbers.map(function(number, i){
            return <span className='number-div' key={i}>{number}</span>
        });
        return (
            <div className='well answers-tile'>
                {this.selectedNumbersDom}
            </div>
        )
    }
}

export default AnswersTile;