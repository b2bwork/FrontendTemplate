import React from "react";
import{Button,ButtonToolbar} from"react-bootstrap";
import "./index.css"
export default class CategoryComponent extends React.Component{
    render(){
        return(
            <div className="centered">
        <ButtonToolbar>
        <Button bsStyle="default">All</Button> 
        <Button bsStyle="default">CategortOne</Button>        
        <Button bsStyle="default">CategortTwo</Button>
        <Button bsStyle="default">CategoryThree</Button>
        <Button bsStyle="default">CategortFive</Button>
        </ButtonToolbar>
        </div>
        )
    }
}