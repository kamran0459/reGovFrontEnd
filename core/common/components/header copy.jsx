import React from 'react';
import { Link } from 'react-router-dom';
import Section from './section';

class Header extends React.Component {
    render() {
        return (
            <Section title="News">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-sm fixed-top">
                            <Link className="navbar-brand" to="/">
                                <img className="fas fa-3x fa-tachometer-alt tm-site-icon" src="/logo.jpg" style={{ width: "3rem" }} />
                                <h1 className="tm-site-title mb-0">Zokeeper</h1>
                            </Link>
                            <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/">News
                                <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cards">Cards
                                {/* <span className="sr-only">(current)</span> */}
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Reports
                            </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="#">Daily Report</Link>
                                        <Link className="dropdown-item" to="#">Weekly Report</Link>
                                        <Link className="dropdown-item" to="#">Yearly Report</Link>
                                    </div>
                                </li>
                                 */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/test">Orders</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="accounts.html">Tickets</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="accounts.html">Rules</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="accounts.html">F.A.Q</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Settings
                            </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="#">Profile</Link>
                                            <Link className="dropdown-item" to="#">Billing</Link>
                                            <Link className="dropdown-item" to="#">Customize</Link>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex" to="login.html">
                                            <i className="fas fa-shopping-cart mr-2 tm-logout-icon"></i>
                                            <span className="cartBadge">0</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex" to="login.html">
                                            <i className="far fa-user mr-2 tm-logout-icon"></i>
                                            <span>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Header;
