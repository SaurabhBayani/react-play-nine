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
            selectedNumbers: []
        }
    }

    clickNumber = (number) => {
        this.setState(
            { selectedNumbers: this.state.selectedNumbers.concat(number) }
        )
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='clearfix'>
                    <StarsTile />
                    <ButtonTile />
                    <AnswersTile selectedNumbers={this.state.selectedNumbers} />
                </div>
                <Numbers selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber} />
            </div>
        )
    }
}

export default Game;