import React from 'react'


function TodoItem(props) {
  return (
    <div className='todo-item'>
        {props.item}
        <button>수정</button>
        <button>삭제</button>
    </div>
  )
}

export default TodoItem