import { useEffect, useState } from 'react'
import TodoBoard from './component/TodoBoard';
import './App.css' 

function App() {
  const [inputvalue,setInputvalue] = useState('');
  const [todoList, setTodoList] = useState([]);

  // 맵이 로드될 때 로컬 스토리지에서 할 일 목록을 가져와 설정

  useEffect(()=> {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (savedTodoList) {
      setTodoList(savedTodoList);
    }
  }, []);

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장 
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);




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