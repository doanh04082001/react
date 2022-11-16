import React from 'react'
import Todo from './Todo'
export default function TodoList({todoList,onCheckButtonClick}) {
    console.log(todoList);

  return (
    <>
    {/* nhận prop todoList */}
        {
                            // truyền giá trị todo sang Todo qua thuộc tính có tên todo của component Todo
            todoList.map((todo) => (
                // vì dùng vòng map lên thêm key để cho react xác định thành phần nào được thay đổi
                <Todo key={todo.id} todo={todo} onCheckButtonClick={onCheckButtonClick}/>
            ))
        }
    </>
  )
}
