import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const GetNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const GetComment = () => Get('comments', true);

// POST
const PostNewsBlog = (data) => Post('posts', false, data)

// PUT
const updateNewsBlog = (idBlogPost, data) => Put('posts', false, idBlogPost, data)

// DELETE
const deleteNewsBlog = (idPost) => Delete('posts', false, idPost);

const API = {
    GetNewsBlog,
    GetComment,
    PostNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;