import React from 'react';

class Input extends React.Component {

    render() {
        return (<div className="field">
            <label className="label">{this.props.label || ''}</label>
            <div className="control">
                <input className="input" type={this.props.type || 'text'} placeholder={this.props.placeholder || ''} />
            </div>
        </div>
        )
    }
}

export default Input;