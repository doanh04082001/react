import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from '@atlaskit/button'
import { useState } from "react";
import { v4 } from 'uuid';
function App() {
    // cú pháp giống destructuring es6
    const [todoList, setTodoList] = useState([]);
// Biến state textInput , hàm cập nhập state textInput  =  giá trị khởi tạo của state textInput
    const [textInput,setTextInput] = useState("");
    const onTextInputChange = (e) => {
        setTextInput(e.target.value);
    }

    const onAddBtnClick = (e) => {
        //thêm text input vào danh sach todoList ở trên
        // cú pháp ... k nhớ thì search lại
        setTodoList([...todoList,{id:v4(), name:textInput, isCompleted : false},])
    }
    return (
        <>
            <h3>Những việc cần làm</h3>
            <Textfield name="add-todo" 
                    placeholder="Những việc cần làm" 
                    elemAfterInput={
                        <Button isDisabled={!textInput} 
                                appearance='primary' 
                                onClick={onAddBtnClick}>
                            Thêm
                        </Button>
                        }
                    css={{padding: "2px 4px 2px"}}
                    value={textInput}
                    onChange={onTextInputChange}
                    >
            </Textfield>
            <TodoList/>
        </>
    );
}
export default App;
