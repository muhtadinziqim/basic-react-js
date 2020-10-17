import React, { Component, Fragment } from 'react'
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            title: '',
            body: '',
            id: 1
        },
        isUpdate: false,
        comment: []
    }

    getDataPost = () => {
        API.GetNewsBlog()
            .then((result) => {
                this.setState({
                    post: result
                })
            })
        API.GetComment()
            .then((result) => {
                this.setState({
                    comment: result
                })
            })
    }

    postDataToApi = () => {
        API.PostNewsBlog(this.state.formBlogPost)
            .then((result) => {
                this.getDataPost();
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        title: '',
                        body: '',
                        id: 1
                    },
                })
            })
    }

    putDataToApi = () => {
        API.updateNewsBlog(this.state.formBlogPost.id, this.state.formBlogPost)
            .then((result) => {
                // console.log("id blog" + this.state.formBlogPost.id);
                this.getDataPost();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        userId: 1,
                        title: '',
                        body: '',
                        id: 1
                    },
                })
            })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        if (this.state.isUpdate) {
            this.putDataToApi();
        } else {
            this.postDataToApi();
        }
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (data) => {
        console.log(data);
        API.deleteNewsBlog(data)
            .then((result) => {
                this.getDataPost();
            })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount() {
        // MENGGUNAKAN FETCH API
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // MENGGUNAKAN AXIOS
        this.getDataPost();
    }

    render() {
        return (
            <Fragment>
                <h3>Blog Post</h3>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="" cols="30" rows="10" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comment.map(comment => {
                        return (
                            <p>{comment.name} - {comment.email}</p>
                        )
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;