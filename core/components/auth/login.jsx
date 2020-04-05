import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constant from '../../constants/Communication';
import * as actions from '../../actions/generalAction';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: '',
            email: '',
            password: ''
        }
        if (sessionStorage.getItem('token')) {
            this.props.history.push('/news')
        }
    }

    static getDerivedStateFromProps(storeProps, state) {

        if(storeProps.loginResponse && storeProps.loginResponse.message && storeProps.loginResponse.message.status === 'OK') {
            sessionStorage.setItem('token', storeProps.loginResponse.user.token);
            sessionStorage.setItem('user', JSON.stringify(storeProps.loginResponse.user));
            storeProps.history.push('/news');
            return {
                isLoading: `is-loading`
            }
        } else {
            return {
                isLoading: ``
            }
        }
    }

    auth = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: `is-loading`
        });
        this.props.actions.generalProcess(constant.login, "POST", JSON.stringify({
                email: this.state.email,
                password: this.state.password

        }));
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div id="login" style={{ backgroundImage: 'url("/img/dash-bg-03.jpg")' }}>
                <div className="login-card" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid white' }}>

                    <div className="card-title">
                        <h1>Please Sign In</h1>
                    </div>

                    <div className="content">
                        <form method="POST" action="#">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-times"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        required
                                        onChange={this.handleChange}
                                        />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>


                            <div className="level options">
                                <div className="checkbox level-left">
                                    <input type="checkbox" id="checkbox" className="regular-checkbox" />
                                    <label htmlFor="checkbox"></label>
                                    <span>Remember me</span>
                                </div>
                                <Link className="btn btn-link level-right" style={{ color: "white"}} to={'/register'}>Sign Up</Link>
                            </div>
                            <div className={`control ${this.state.isLoading}`}>
                                <button type="submit" className="btn btn-primary" onClick={this.auth}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loginResponse: state.app.loginResponse.data
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
