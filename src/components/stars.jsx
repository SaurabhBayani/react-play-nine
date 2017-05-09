import React from 'react';

class StarsTile extends React.Component {
    render() {
        let starsDom = [];
        for(let i=0; i<this.props.starsCount; i++) {
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