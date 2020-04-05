import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constant from '../../constants/Communication';
import * as actions from '../../actions/generalAction';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            balance: 0
        };
    }
    componentDidMount() {
        // this.props.actions.generalProcess(constant.walletDetail, {});
    }

    static getDerivedStateFromProps(storeProps, state) {
        if (storeProps.walletDetail.length) {
            return{
                balance: storeProps.walletDetail[0].balance || 0
            };
        }
        return null
    }
    render() {
        return (
            <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand" style={{ borderRight: '1px solid gray' }}>
                    <Link className="navbar-item" to="/">
                        {/* <img src="/img/logo.pn" alt="Zokeeper" width="150" height="40" /> */}
                        <h1 className="title is-1" style={{ color: 'wheat', padding: '5px' }}>Passport</h1>
                    </Link>
                    <Link role="button" className={"navbar-burger burger" + this.state.open} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                        onClick={() => {
                            let isActive;
                            this.state.open === "" ? isActive = "is-active" : isActive = "";
                            this.setState({
                                open: isActive
                            })
                        }} to="#">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className={"navbar-menu" + this.state.open}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to={'/news'}>
                            <h6 className="title is-6 menuColor">Home</h6>
                        </Link>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link" to="#">
                                <h6 className="title is-6 menuColor">{sessionStorage.getItem('userName')}</h6>
                            </Link>
                            <div className="navbar-dropdown is-boxed">
                                <Link to="/logout" className="navbar-item">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {
        walletDetail: state.app.walletDetail.searchResult
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
