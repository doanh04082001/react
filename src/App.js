import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from '@atlaskit/button'
import { useCallback, useEffect, useState } from "react";
import { stringify, v4 } from 'uuid';

const TODO_APP_STORAGE_KEY = 'TODO_APP';
function App() {
// cú pháp giống destructuring es6
    const [todoList, setTodoList] = useState([]);
// Biến state textInput , hàm cập nhập state textInput  =  giá trị khởi tạo của state textInput
    const [textInput,setTextInput] = useState("");
    
    const onTextInputChange = useCallback((e) => {
        setTextInput(e.target.value);
    },[]) 

    const onAddBtnClick = useCallback((e) => {
        //thêm text input vào danh sach todoList ở trên
        // cú pháp ... k nhớ thì search lại nhes
        setTodoList([{id:v4(), name:textInput, isCompleted : false},...todoList])
        //sau khi thêm thì xóa dữ liệu trong ô input đi
        setTextInput("");
    },[textInput,todoList]) 

    const onCheckButtonClick = useCallback((id)=>{
        setTodoList((prevState) => 
            prevState.map((todo) =>
                 todo.id === id ? {...todo,isCompleted:true} : todo 
            ))},[])

    useEffect(()=>{
        // lấy todoList trên storage
        const storagedTodoList = localStorage.getItem('TODO_APP_STORAGE_KEY')
        if(storagedTodoList){
            setTodoList(JSON.parse(storagedTodoList))
        }
    },[]);
    
// khi giá trị của todoList thay đổi thì sẽ thực hiện code bên trong hàm này
    useEffect(()=>{         
                             // key , value
                                                // JSON.stringify(todoList) để chuyển mảng todoList vè dạng json
        localStorage.setItem('TODO_APP',JSON.stringify(todoList))
    },[todoList])
    return (
        <>
            <h3>Những việc cần làm</h3>
            <Textfield name="add-todo" 
                    placeholder="Những việc cần làm" 
                    elemAfterInput={
                        <Button isDisabled={!textInput} 
                                appearance='primary' 
                                onClick={onAddBtnClick}
                                >
                            Thêm
                        </Button>
                        }
                    css={{padding: "2px 4px 2px"}}
                    value={textInput}
                    onChange={onTextInputChange}
                    >
            </Textfield>
                {/* truyền todoList sang component TodoList */}
            <TodoList todoList={todoList} onCheckButtonClick={onCheckButtonClick}/>
        </>
    );
}
export default App;
