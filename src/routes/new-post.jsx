import { Link, Form } from 'react-router-dom';
import Modal from '../components/modal';
import classes from './new-post.module.css';

function NewPost() {

    
    return (
        <Modal>
            <Form method='post' className={classes.form} > 
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}  />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="author" required />
                </p>
                <p className={classes.actions} >
                    <Link to=".." type='button'>Cancel</Link>
                    <button  >Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
    console.log(postData);
    return null;
   /* fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      */
}