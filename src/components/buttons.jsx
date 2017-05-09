import React from 'react';

class ButtonTile extends React.Component {
    render() {
        let disabled = (this.props.selectedNumbers.length === 0),
            buttonDOM;
        switch(this.props.answerRight){
            case true:
                buttonDOM = <button className='btn btn-success btn-lg' onClick={this.props.acceptAnswer}>
                    <span className='glyphicon glyphicon-ok'></span>
                    </button>
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
                <br />
                <br />
                <button className='btn btn-warning btn-xs' onClick={this.props.redrawStars} disabled={!this.props.redrawAttemps}>
                    <span className='glyphicon glyphicon-refresh'></span>
                    &nbsp;
                    {this.props.redrawAttemps}
                </button>
            </div>
        )
    }
}

export default ButtonTile;