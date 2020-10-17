import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <h3>Youtube Component</h3>
                <hr />
                <YouTubeComp
                    title="Judul 1"
                    description="Desc 1" />
                <YouTubeComp
                    title="Judul 2"
                    description="Desc 2" />
                <YouTubeComp
                    title="Judul 3"
                    description="Desc 3" />
                <YouTubeComp
                    title="Judul 4"
                    description="Desc 4" />
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;