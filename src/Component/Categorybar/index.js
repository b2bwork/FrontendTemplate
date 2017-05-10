import React from "react";
import{Button,ButtonToolbar} from"react-bootstrap";
import "./index.css"

export default class CategoryComponent extends React.Component{
    render(){
        return(
         <div className="text-center">
        <button className="btn btn-default marginRight">All</button>
        <button className="btn btn-default marginRight">CategoryOne</button>
        <button className="btn btn-default marginRight">CategoryTwo</button>
        <button className="btn btn-default marginRight">CategoryThree</button>
        <button className="btn btn-default marginRight">CategoryFour</button>
        </div>
        )
    }
}