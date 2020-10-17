// Library
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Hooks from "../pages/Hooks/Hooks";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

// Style
import "./Home.css";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 3000);
    }

    render() {
        return (
            // <div>
            //     <h3>Youtube Component</h3>
            //     <hr />
            //     <YouTubeComp
            //         title="Judul 1"
            //         description="Desc 1" />
            //     <YouTubeComp 
            //         title="Judul 2" 
            //         description="Desc 2" />
            //     <YouTubeComp 
            //         title="Judul 3" 
            //         description="Desc 3" />
            //     <YouTubeComp 
            //         title="Judul 4" 
            //         description="Desc 4" />
            //     <YouTubeComp />

            //     <hr/>
            //     <h3>Counter</h3>
            //     <hr/>
            //     <Product/>

            //     <h3>LifeCycle Component</h3>
            //     <hr/>
            //     {
            //         this.state.showComponent ?
            //         <LifeCycleComp/>
            //         :
            //         null
            //     }

            //     <h3>Blog Post</h3>
            //     <hr/>
            //     <BlogPost/>
            // </div> 
            
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Life Cycle</Link>
                        <Link to="/youtube-component">Youtube Component</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}/>
                    <Route path="/detail-post/:id" component={DetailPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube-component" component={YoutubeCompPage}/>
                    <Route path="/hooks" component={Hooks}/>
                </Fragment>
            </Router>
        );
    }
}

export default Home;
