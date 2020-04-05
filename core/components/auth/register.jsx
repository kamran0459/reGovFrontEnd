import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import constant from '../../constants/Communication';
import * as actions from '../../actions/generalAction';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: '',
            file: [],
            email: '',
            password: '',
            fullname: '',
            username: '',
            preview: false
        }
        if (sessionStorage.getItem('token')) {
            this.props.history.push('/news')
        }
    }

    static getDerivedStateFromProps(storeProps, state) {

        if(storeProps.signUpResponse && storeProps.signUpResponse.message && storeProps.signUpResponse.message.status === 'OK' ) {

            storeProps.history.push('/login')
        }

    }

    register = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: `is-loading`
        });


        var formData = new FormData();

        formData.append('fullName', this.state.fullname);
        formData.append('userName', this.state.username);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('file', this.state.file);

        this.props.actions.generalProcess(constant.register, "POST", formData );
        this.state = {
            isLoading: '',
            file: [],
            email: '',
            password: '',
            fullname: '',
            username: '',
            preview: false
        };

    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    previewChange = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({preview: !this.state.preview});
    }

    _onChange = () => {
        // Assuming only image
        var file = this.refs.fileinput.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        this.state.file = file;
        reader.onloadend = function (e) {
            this.setState({
                imgSrc: [reader.result]
        })
        }.bind(this);
        console.log(url) // Would see a path?
        // TODO: concat files
    }

    render() {
        return (
            <div id="login" style={{backgroundImage: 'url("/img/dash-bg-03.jpg")'}}>
                <div className="login-card" style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid white',
                    display: !this.state.preview ? 'block' : 'none'
                }}>

                    <div className="card-title">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="content" style={{background: "white"}}>
                        <form method="POST" action="#">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input"
                                           name="fullname"
                                           type="text"
                                           placeholder="Full Name"
                                           required
                                           value={this.state.fullname}
                                           onChange={this.handleChange}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"/>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input"
                                           name="username"
                                           type="text"
                                           placeholder="User Name"
                                           required
                                           value={this.state.username}
                                           onChange={this.handleChange}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-address-card"/>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input"
                                           name="email"
                                           type="email"
                                           placeholder="Email"
                                           required
                                           value={this.state.email}
                                           onChange={this.handleChange}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"/>
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
                                        <i className="fas fa-lock"/>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        ref="fileinput"
                                        type="file"
                                        name="user[image]"
                                        multiple={true}
                                        onChange={this._onChange}/>
                                    <img src={this.state.imgSrc} />
                                </p>
                            </div>



                            <div className="level options">
                                <Link className="btn btn-link level-right" style={{color: "black"}} to={'/login'}>Already
                                    have Account? Login</Link>
                            </div>
                            <div className={`control ${this.state.isLoading}`}>
                                <button type="submit" className="btn btn-primary" onClick={this.register}>Sign Up
                                </button>
                            </div>
                            <div className={`control ${this.state.isLoading}`} style={{margin: "50px"}}>
                                <button type="submit" className="btn btn-primary" onClick={this.previewChange}>Preview
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="login-card" style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid white',
                    display: this.state.preview ? 'block' : 'none'
                }}>

                    <div className="card-title">
                        <h1>Preview</h1>
                    </div>

                    <div className="content" style={{background: "white"}}>
                        <b>Full Name:</b> {this.state.fullname} <br/>
                        <b>User Name:</b> {this.state.username} <br/>
                        <b>Email:</b> {this.state.email} <br/>
                        <b>Password:</b> {this.state.password} <br/>
                        <b>ID photo:</b>
                        <img src={this.state.imgSrc} />
                        <div className={`control ${this.state.isLoading}`} style={{margin: "50px"}}>
                            <button type="submit" className="btn btn-primary" onClick={this.previewChange}>Close
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        signUpResponse: state.app.responseMessage.data
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
