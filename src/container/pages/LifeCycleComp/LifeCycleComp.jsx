import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class LifeCycleComp extends Component {

    constructor(props) {
        console.log("constructor");
        super(props)
        this.state = {
            count: 1
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        console.log("nextState : ", nextState);
        if (nextState.count >= 4) {
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(prevProps, prevState, napshot) {
        console.log("getSnapshotBeforeUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeCount = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <Fragment>
                <h3>Life Cycle Comp</h3>
                <hr/>
                <button onClick={this.changeCount}>Button Component {this.state.count}</button>
                <hr/>
                <p>Total Order : {this.props.order}</p>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (LifeCycleComp);