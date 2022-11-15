import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'

const ButtonStyle = styled(Button)`margin-top : 5px ; text-align:left`
export default function Todo() {
  return (
//  thuộc tính shouldFitContainer của atlaskit sẽ đưa button chiếm hết không gian container
// <Button shouldFitContainer>
    // Item 1
// </Button>
// thay vì sử dụng thẻ button thì sẽ tạo biến và gán style cũng như tên thẻ cho nó
    <ButtonStyle shouldFitContainer>
        Item 1
    </ButtonStyle>

  )
}
