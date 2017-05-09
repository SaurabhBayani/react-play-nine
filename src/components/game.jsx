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

    // Function to select numbers
    selectNumber = (number) => {
        // Add new number only if new number is not already in array
        if (this.state.selectedNumbers.indexOf(number) < 0) {
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(number)
            })
        }
    }

    // Function to unselect numbers
    unSelectNumber = (number) => {
        let index = this.state.selectedNumbers.indexOf(number);
        let newNumberArray = this.state.selectedNumbers;
        newNumberArray.splice(index, 1);
        this.setState({
            selectedNumbers: newNumberArray
        });
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='clearfix'>
                    <StarsTile starsCount={this.state.starsCount}/>
                    <ButtonTile />
                    <AnswersTile selectedNumbers={this.state.selectedNumbers} unSelectNumber={this.unSelectNumber} />
                </div>
                <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} />
            </div>
        )
    }
}

export default Game;