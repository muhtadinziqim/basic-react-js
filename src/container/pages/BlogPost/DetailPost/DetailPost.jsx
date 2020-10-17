import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './DetailPost.css';

class DetailPost extends Component {

    state = {
        BlogPost: {
            id: 1,
            title: '',
            userId: 1,
            body: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
            .then((res) => {
                console.log("Result :", res);
                this.setState({
                    BlogPost: {
                        id: res.data.id,
                        title: res.data.title,
                        body: res.data.body,
                        userId: res.data.userId
                    }

                })
            })
    }
    render() {
        return (
            <Fragment>
                <h3>{this.state.BlogPost.title}</h3>
                <hr />
                <p>{this.state.BlogPost.body}</p>
            </Fragment>

        )
    }
}

export default DetailPost;