import React, { Component } from 'react';
import '../App.css';

class home extends Component {

    AdvanceSearch
    shandleButtonClicked() {
        window.location.href = "/search";
    }
    
    render() {
        return (
            <div className="home">
                <div className="navbar">
                    <ul className="navlist">
                        <li className="navbtn"><a href="/">Home</a></li>
                        <li className="navbtn"><a href="/search">Browse Articles</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h1 className="title">Home</h1>
                    <h2 className="header">SEEDS</h2>
                    <h3 className="subheader">CISE - Team 21</h3>
                    <div className="buttons">
                        <button className="btn" onClick={this.shandleButtonClicked.bind(this)}>
                        Basic Search
                        </button>
                    </div>
                </div>
                <div className="footer">
                    <p className="footertext">Developed by</p>
                    <p className="footertext">Victor Feng | Aaron Gilbert | Gerard Gomez</p>
                </div>
            </div>
        );
    }
  }
export default home;
