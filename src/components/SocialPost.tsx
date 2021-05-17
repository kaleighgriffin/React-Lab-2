import './SocialPost.css'
import Post from '../model/Post';
import { useState } from 'react';
import PostForm from './PostForm';
import PostInList from './PostInList';

function SocialPost() {

    const [ display, setDisplay ] = useState(false);
    const [ post, setPost ] = useState<Post[]>([
        { title: "Monday", thought: "I'm soooo tired."},
        { title: "Tuesday", thought: "Let's take the dog to the park today."},
        { title: "Wednesday", thought: "I wonder what's for dinner..."},
        { title: "Thursday", thought: "It's such a nice day outside!"},
        { title: "Friday", thought: "The weekend is finally here!"}
    ]);

    function showForm() {
        setDisplay(true);
    }

    function handleAddPost(post: Post): void {
        setPost(prevPost => [ ...prevPost, post ]);
        setDisplay(false);
    }

    function hideForm() {
        setDisplay(false)
    }

    return (
        <div className="SocialPost">
            <h1>My Thoughts</h1>
            <div className="ThoughtButton">
                <button className="NewThought" onClick={showForm}>New Thought</button>
            </div>
            <section className="PostListContainer">
                {post.map((post, i) => 
                    <PostInList key={i} post={post} />
                )}
            </section>
            {display && <PostForm onSubmit={handleAddPost} onClose={hideForm} /> }
        </div>
    )

}

export default SocialPost;