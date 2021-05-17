import './PostInList.css';
import Post from '../model/Post';

interface Props {
    post: Post;
    // onDelete?: () => void
}

function PostInList({post}: Props) {

    return (
        <div className="PostInList">
            <div className="Posts">
                <h2>{post.title}</h2>
                <h3>{post.thought}</h3>
            </div>
        </div>
    )

}

export default PostInList;