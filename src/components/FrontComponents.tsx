import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

type ButtonProps = {
    number: string,
    name: string,
    color:string,
}

type DexProps = {
    value: string,
    name: string,
}

export class DexOption extends React.Component<DexProps>{
    render(){
        return(
            <option value={this.props.value}>{this.props.name}</option>
        );
    }

}
export class Entry extends React.Component<ButtonProps> {
    render(){
        return(
            <Button variant={this.props.color}  block  >{this.props.number}: {this.props.name}</Button>
        );
    }
}