import React from 'react';
import Section from '../../common/components/section';
import { Link } from 'react-router-dom';

class Test extends React.Component {

    constructor(props) {
        super(props);
        const user = JSON.parse(sessionStorage.getItem('user')).user;
       this.state = {
            isLoading: '',
            srcUrl: user.photoUrl,
            email: user.email,
            password: '',
            fullname: user.fullName,
            username: user.userName,
            preview: false
        };
    }

    render() {
        return (
            <Section title="News">

                <b>Full Name:</b> {this.state.fullname} <br/>
                <b>User Name:</b> {this.state.username} <br/>
                <b>Email:</b> {this.state.email} <br/>
                <b>ID photo:</b>
                <img src={this.state.srcUrl} />

            </Section>
        );
    }
}

export default Test;
