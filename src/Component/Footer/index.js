import React from "react";
import "./index.css"
export default class FooterComponent extends React.Component{
    render(){
        return(
        <div className="footer">
        <footer className="text-center">
            <h3>Follow US:</h3>
            <i className="fa fa-facebook fa-3x" aria-hidden="true"></i> &nbsp; &nbsp; &nbsp;
            <i className="fa fa-google-plus fa-3x" aria-hidden="true"></i>
            <p >Copyright <i className="fa fa-copyright" aria-hidden="true"> 2017</i></p>
        </footer>
        </div>
        )
    }
}