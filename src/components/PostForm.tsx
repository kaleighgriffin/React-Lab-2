import './PostForm.css';
import Post from '../model/Post';
import { useState, FormEvent } from 'react';

interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void
}

function PostForm({ onSubmit, onClose }: Props) {

    // const [ display, setDisplay] = useState(true);
    const [ title, setTitle ] = useState("");
    const [ thought, setThought ] = useState("");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        const post: Post = {
            title: title,
            thought: thought
        };

        onSubmit(post);
    }

    // function closeForm() {
    //     setDisplay(false);
        
    //     // onClose();

    // }

    return (
        <div className="PostForm">
            <form onSubmit={handleSubmit}>
                <i className="fas fa-times-circle" onClick={onClose}></i>
                <p>
                    <label>Title<br></br>
                        <input className="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>Thought<br></br>
                        <textarea className="thought" value={thought} onChange={e => setThought(e.target.value)} />
                    </label>
                </p>
                <p>
                    <button type="submit">Add Post</button>
                </p>
            </form>
        </div>
    )

}

export default PostForm;