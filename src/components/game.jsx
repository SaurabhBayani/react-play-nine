import React from 'react';

import Header from './header.jsx';
import StarsTile from './stars.jsx';
import AnswersTile from './answers.jsx';
import ButtonTile from './buttons.jsx';
import Numbers from './number.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            starsCount: Math.floor(Math.random() * 9) + 1
        }
    }

    clickNumber = (number) => {
        // Add new number only if new number is not already in array
        if (this.state.selectedNumbers.indexOf(number) < 0) {
            this.setState(
                { selectedNumbers: this.state.selectedNumbers.concat(number) }
            )
        }

    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='clearfix'>
                    <StarsTile starsCount={this.state.starsCount}/>
                    <ButtonTile />
                    <AnswersTile selectedNumbers={this.state.selectedNumbers} />
                </div>
                <Numbers selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber} />
            </div>
        )
    }
}

export default Game;