import React from 'react';

class Numbers extends React.Component {
    render() {
        var classToApply,
            numbers = 9,
            clickNumber = this.props.clickNumber,
            numbersDom = [];
        for (let j = 1; j <= numbers; j++) {
            if (this.props.selectedNumbers.indexOf(j) >= 0) {
                classToApply = 'number-div number-selected';
            } else {
                classToApply = 'number-div';
            }
            numbersDom.push(
                <div className={classToApply} key={j} onClick={clickNumber.bind(null, j)}>{j}</div>
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