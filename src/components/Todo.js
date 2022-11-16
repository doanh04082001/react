import React from 'react'
import Button from '@atlaskit/button'
import styled,{ css } from 'styled-components'
import CheckIcon from "@atlaskit/icon/glyph/check"
const ButtonStyle = styled(Button)`
                        margin-top: 5px ; 
                        text-align: left;
                        &,
                        &:hover{
                            ${(p) => p.isCompleted && css`
                                text-decoration: line-through
                            `}
                        }
                        
                        &:hover{
                            .check-icon{
                                display: inline-block
                            }
                        }
                        .check-icon {
                            display:none; 
                            &:hover:{
                                background-color : #e2e2e2;
                                border-radius:3px;
                            }
                        } `
                    // lấy giá trị truyền vào từ TodoList (todo)
export default function Todo({todo, onCheckButtonClick}) {
  return (
//  thuộc tính shouldFitContainer của atlaskit sẽ đưa button chiếm hết không gian container
// <Button shouldFitContainer>
    // Item 1
// </Button>
// thay vì sử dụng thẻ button thì sẽ tạo biến và gán style cũng như tên thẻ cho nó
    <ButtonStyle shouldFitContainer 
                 isCompleted = {todo.isCompleted}
                 iconAfter={ !todo.isCompleted &&  (
                        <span className='check-icon' onClick={()=> onCheckButtonClick(todo.id)}>
                                    <CheckIcon primaryColor='green'/>
                        </span> 
                    )
                 }>
        {todo.name}
    </ButtonStyle>
  )
}
