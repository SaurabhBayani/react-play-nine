import React from 'react';

class ButtonTile extends React.Component {
    render() {
        let disabled = (this.props.selectedNumbers.length === 0)
        return (
            <div className='button-tile'>
                <div className='btn btn-primary btn-lg' disabled={disabled}>=</div>
            </div>
        )
    }
}

export default ButtonTile;