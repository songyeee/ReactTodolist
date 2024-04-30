import { useState } from 'react'
import TodoBoard from './component/TodoBoard';
import './App.css' 

function App() {
  const [inputvalue,setInputvalue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList,inputvalue])
  }

  return (
    <main>
      <input value = {inputvalue} 
             type='text'
             placeholder='할일 입력하기'
             onChange={(event)=>setInputvalue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
    
  )
}

export default App