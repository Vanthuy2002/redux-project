import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import EditPage from './components/Edit/EditPage';
import BlogPost from './components/Blog';
import Post from './components/Blog/Post';

function App() {
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <main className='main'>
      {edit ? <EditPage setIsEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {!edit && !show && <Post />}
      {!edit && <BlogPost show={show} setShow={setShow} />}
    </main>
  );
}

export default App;
