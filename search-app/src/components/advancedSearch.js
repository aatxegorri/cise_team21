import React, { Component } from 'react';
import '../App.css';



class advancedSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        };
    }

    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
      }
    render() {
        return (

            <div className="home">
                <div className="navbar">
                    <ul className="navlist">
                        <li className="navbtn"><a href="/">Home</a></li>
                        <li className="navbtn"><a href="/search">Browse Articles</a></li>
                        <li className="navbtn"><a href="/advancedSearch">Advanced Search</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Articles</h2>
                    <h2 className="header">Basic Search</h2>                         
                    <input className="textbox" onChange={this.handleInputChanged.bind(this)} value={this.state.searchQuery}/>
                    <p>{this.state.searchQuery}</p>
                </div>
                <div className="footer">
                    <p className="footertext">Developed by</p>
                    <p className="footertext">Victor Feng | Aaron Gilbert | Gerard Gomez</p>
                </div>
            </div>
    );
  }
}
export default advancedSearch;
