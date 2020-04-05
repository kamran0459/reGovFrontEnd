import React from 'react';

class Row extends React.Component {

    render() {
        return (
            <div className="columns is-mobile" style={this.props.style || {}}>
                {this.props.children}
            </div >
        );
    }
}

export default Row;