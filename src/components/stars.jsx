import React from 'react';

class StarsTile extends React.Component {
    constructor(props) {
        super(props);
        this.starsCount = Math.floor(Math.random() * 9) + 1;
        this.starsDom = [];
    }

    render() {
        for(let i=0; i<this.starsCount; i++) {
            this.starsDom.push(
                <span className='glyphicon glyphicon-star star' key={i}></span>
            )
        }
        return (
            <div className='well stars-tile'>
                {this.starsDom}
            </div>
        )
    }
}

export default StarsTile