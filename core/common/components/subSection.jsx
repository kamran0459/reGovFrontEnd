import React from 'react';
import { withRouter } from 'react-router-dom';

class SubSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrow: 'fa-chevron-down',
            hidden: false,
            accordinId: 'subAccordin' + props.title
        }
    }

    hideContent = () => {
        let accordin = document.getElementById(this.state.accordinId);
        if (!this.state.hidden) {
            accordin.style.height = '0px';
            accordin.style.overflow = 'hidden';
            accordin.style.transition = ' height 5000ms ease 1s';
            this.setState({
                hidden: !this.state.hidden,
                arrow: 'fa-chevron-left'
            })
        } else {
            accordin.style.height = 'auto';
            accordin.style.overflow = 'visible';
            accordin.style.transition = ' height 5000ms ease 1s';
            this.setState({
                hidden: !this.state.hidden,
                arrow: 'fa-chevron-down'
            })
        }
    }


    render() {
        return (
            <section className="section" style={{ marginTop: "-3rem" }}>
                <div className="container-fluid" style={{ border: "1px solid lightgray", paddingBottom: '2rem', borderRadius: '20px', boxShadow: '5px 5px 10px 8px #888888' }}>
                    <h5 className="title is-5" style={{ borderBottom: "1px solid lightgray", paddingBottom: '1rem', paddingTop: '1rem' }}>
                        <div className="columns is-mobile">
                            <div className="column ">
                                <span style={{ paddingLeft: "2rem" }}>{this.props.title}</span>
                            </div>
                            <div className="column is-narrow">
                                <i className={"fa " + this.state.arrow} style={{ paddingRight: "2rem" }} onClick={this.hideContent}></i>
                            </div>
                        </div>
                    </h5>
                    <div className="container-fluid" id={this.state.accordinId} style={{ padding: '0 1rem', height: 'auto', maxHeight: 'fit-content' }}>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(SubSection);
