import React from 'react'
import styled from 'styled-components'
import InputComponent from './InputComponent'
const Outline = styled.input`
height:100%;
width:100%;
padding:10px;
font-size:16px;
border:1px solid black;
background-color:transparent;
outline:none;
filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.79));
&::-webkit-input-placeholder {
color: #C5C5C5!important;
}
 
&:-moz-placeholder { /* Firefox 18- */
color: #C5C5C5 !important;  
}
 
&::-moz-placeholder {  /* Firefox 19+ */
color: #C5C5C5 !important;  
}
 
&:-ms-input-placeholder {  
color: #C5C5C5 !important;  
}

border-radius: 5px;
`;
const OutlineInput= ({label,placeholder,value,setValue}) => {
    return (
        <Outline label={label} placeholder={placeholder} value={value} setValue={setValue}>
            
        </Outline>
    )
}

export default OutlineInput
