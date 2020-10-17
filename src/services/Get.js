import axios from 'axios'
import {onlinePath, rootPath} from './Config'; 

const Get = (Path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? onlinePath :  rootPath}/${Path}`)
        .then((result) => {
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    })

    return promise;
}

export default Get;