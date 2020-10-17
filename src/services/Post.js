import axios from 'axios'
import {onlinePath, rootPath} from './Config';

const Post = (Path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? onlinePath : rootPath}/${Path}`, data)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err)
        })
    }) 
    return promise;
}

export default Post;