import React, { Component, useEffect, useState } from 'react';
import { useStore } from 'react-redux';

// class Hooks extends Component{
//     state = {
//         count : 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Change Count : ${this.state.count}`;
//     }

//     componentDidUpdate(){
//         document.title = `Change Count : ${this.state.count}`;
//     }

//     componentWillUnmount(){
//         document.title = `React Apps`;
//     }

//     render(){
//         return(
//             <div>
//                 <p>Nilai Saya Saat Ini  : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Title Change : ${count}`;
        return() => {
            document.title = `React Apps`;
        }
    })

    return (
        <div>
            <p>Nilai Saya Saat Ini  : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;