import axios from 'axios';
import {onlinePath, rootPath} from './Config'; 

const Put = (path, root, idBlogPost, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? onlinePath: rootPath}/${path}/${idBlogPost}`, data)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })

    return promise;
}

export default Put;