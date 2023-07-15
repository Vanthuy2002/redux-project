import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import EditPage from './components/Edit/EditPage';

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <main className='main'>
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : (
        <Header setEdit={setIsEdit} />
      )}
    </main>
  );
}

export default App;
