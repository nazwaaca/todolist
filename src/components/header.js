import "./header.css";
import React from "react";

class Header extends React.Component{
    render(){
        return(
        <div className="App-header">
            <div class="navbar-header">
                <a class="navbar-name" href="#">To Do List</a>
            </div>
        </div>
        );
    }
}

export default Header;