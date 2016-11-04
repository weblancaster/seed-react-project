require('normalize.css');
require('../index.scss');
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Seed React Project</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Main;
