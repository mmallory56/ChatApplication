import React from 'react'
import styled from 'styled-components'
const Item = styled.div`
width:94%;
display: flex;
flex-direction:row;
text-shadow: none;
padding-left: 10px;
padding-Top:10px;
padding-Bottom:10px;
 
border-bottom: 1px solid white;
&:nth-last-child(1){
    border-bottom: none;
}
`;
const DropDownItem = ({children,opened,onClick}) => {
    return (
        <Item onClick={onClick}>
            {children}
        </Item>
    )
}

export default DropDownItem
