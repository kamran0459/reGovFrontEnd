import React from 'react';

class Col extends React.Component {

    render() {
        return (
                <div className={`column`} style={this.props.style || {}}>
                    {this.props.children}
                </div>
        );
    }
}

export default Col;