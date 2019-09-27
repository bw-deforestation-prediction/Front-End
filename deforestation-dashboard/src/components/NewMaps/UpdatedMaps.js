import React, {Component} from 'react';
import Page from './map.html';

var htmlDoc = {_html: Page};

export default class MapOne extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div dangerouslySetInnerHTML={htmlDoc} />
        )
        }
}