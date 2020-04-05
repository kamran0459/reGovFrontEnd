import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/generalAction';

class Logout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }
    static getDerivedStateFromProps(storePropes, state){
        localStorage.clear();
        sessionStorage.clear();
        storePropes.history.push('/login');
        window.location.reload();
        return null;
    }
    render() {
        return (
            <div id="login">
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
    
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }

}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
