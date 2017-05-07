import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = 9;
        this.numbersDom = [];
    }
    render() {
        var classToApply;
        for (let i = 1; i <= this.numbers; i++) {
            if(this.props.selectedNumbers.indexOf(i) >=0){
                classToApply = 'number-div number-selected';
            } else {
                classToApply = 'number-div';
            }
            this.numbersDom.push(
                <div className={classToApply} key={i}>{i}</div>
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