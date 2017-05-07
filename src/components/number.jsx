import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = 9;
        this.numbersDom = [];
    }
    render() {
        for (let i = 1; i <= this.numbers; i++) {
            this.numbersDom.push(
                <div className='number-div' key={i}>{i}</div>
            )
        }
        return (
            <div className='well numbers-tile'>
                {this.numbersDom}
            </div>
        )
    }
}

export default Numbers;