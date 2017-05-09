import React from 'react';

class ButtonTile extends React.Component {
    render() {
        let disabled = (this.props.selectedNumbers.length === 0),
            buttonDOM;
        switch(this.props.answerRight){
            case true:
                buttonDOM = <div className='btn btn-success btn-lg' onClick={this.props.checkAnswer}>
                    <span className='glyphicon glyphicon-ok'></span>
                    </div>
                break
            case false:
                buttonDOM = <div className='btn btn-danger btn-lg' disabled={disabled} onClick={this.props.checkAnswer}>
                    <span className='glyphicon glyphicon-remove'></span>
                </div>
                break;
            default:
                buttonDOM = <div className='btn btn-primary btn-lg' disabled={disabled} onClick={this.props.checkAnswer}>=</div>
        }
        return (
            <div className='button-tile'>
                {buttonDOM}
            </div>
        )
    }
}

export default ButtonTile;