import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    changeCounter
} from './feat1.actions.js';

class Feat1 extends Component {
    counterTrigger() {
        let { dispatch, counter } = this.props;
        dispatch(changeCounter(counter));
    }

    render() {
        let { counter } = this.props;

        return (
            <div>
                <p>the counter is: <strong>{counter}</strong></p>
                <button onClick={() => this.counterTrigger()}>trigger counter</button>
            </div>
        )
    }
}

Feat1.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
}

function mapStateToProps(state) {
    let { counter } = state.feat1;

    return {
        counter
    }
}

export default connect(mapStateToProps)(Feat1);
