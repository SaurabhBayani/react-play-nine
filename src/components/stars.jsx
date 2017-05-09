import React from 'react';

class StarsTile extends React.Component {
    constructor(props) {
        super(props);
        this.starsCount = Math.floor(Math.random() * 9) + 1;
    }

    render() {
        let starsDom = [];
        for(let i=0; i<this.starsCount; i++) {
            let key = 'star-' + i;
            starsDom.push(
                <span className='glyphicon glyphicon-star star' key={key}></span>
            )
        }
        return (
            <div className='well stars-tile'>
                {starsDom}
            </div>
        )
    }
}

export default StarsTile;