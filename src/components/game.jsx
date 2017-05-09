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
            starsCount: Math.floor(Math.random() * 9) + 1,
            answerRight: null,
            sumOfNumbers: null
        }
    }

    // Function to select numbers
    selectNumber = (number) => {
        // Add new number only if new number is not already in array
        if (this.state.selectedNumbers.indexOf(number) < 0) {
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(number),
                answerRight: null,
            })
        }
    }

    // Function to unselect numbers
    unSelectNumber = (number) => {
        let index = this.state.selectedNumbers.indexOf(number);
        let newNumberArray = this.state.selectedNumbers;
        newNumberArray.splice(index, 1);
        this.setState({
            selectedNumbers: newNumberArray,
            answerRight: null,
        });
    }

    // function to check answer
    checkAnswer = () => {
        // Sum of all selected  number
        var sumOfNumbers = this.state.selectedNumbers.reduce(function(a, b){
            return a + b;
        }, 0);
        if(this.state.starsCount === sumOfNumbers) {
            this.setState({
                answerRight: true
            })
        } else {
            this.setState({
                answerRight: false
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='clearfix'>
                    <StarsTile starsCount={this.state.starsCount}/>
                    <ButtonTile selectedNumbers={this.state.selectedNumbers} checkAnswer={this.checkAnswer} answerRight={this.state.answerRight}/>
                    <AnswersTile selectedNumbers={this.state.selectedNumbers} unSelectNumber={this.unSelectNumber} />
                </div>
                <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} />
            </div>
        )
    }
}

export default Game;