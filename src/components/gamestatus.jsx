import React from 'react';

class GameStatus extends React.Component{
    render() {
        return (
            <div className='well'>
                <h3> Game over ! {this.props.gameStatus}. Please refresh the page</h3>
            </div>
        )
    }
}

export default GameStatus;