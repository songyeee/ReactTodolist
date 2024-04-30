import { useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo] = useState('');
  const onChange = (e) => {
    setTodo(e.target.value)
    console.log(todo)
  }
  return (
    <div>
      <h1>to do list</h1>
      <form>
        <input type='text' placeholder='할 일 입력하기' onChange={onChange}/>
        <button>등록</button>
      </form>
    </div>
    
  
  );
}

export default App;
