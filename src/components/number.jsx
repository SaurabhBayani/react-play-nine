import React from 'react';

class Numbers extends React.Component {
    render() {
        var classToApply,
            numbers = 9,
            numbersDom = [];
        for (let j = 1; j <= numbers; j++) {
            if (this.props.selectedNumbers.indexOf(j) >= 0) {
                classToApply = 'number-div number-selected';
            } else {
                classToApply = 'number-div';
            }
            // Grrenify Used numbers
            if(this.props.usedNumbers.indexOf(j) >= 0){
                classToApply += ' used-number';
            }
            numbersDom.push(
                <div className={classToApply} key={j} onClick={this.props.selectNumber.bind(null, j)}>{j}</div>
            )
        }
        return (
            <div className='well numbers-tile'>
                {numbersDom}
            </div>
        )
    }
}

export default Numbers;