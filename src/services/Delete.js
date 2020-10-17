import axios from 'axios';
import {onlinePath, rootPath} from './Config'; 

const Delete = (path, root, idPost) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? onlinePath: rootPath}/${path}/${idPost}`)
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })

    return promise;
}

export default Delete;