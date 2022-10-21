import React from 'react'
import styled from 'styled-components'
import OutlineButton from '../Button/OutlineButton'
import OutlineInput from '../Input/OutlineInput'
const Form = styled.form`
    display: flex;
    flex-direction:row;

`
const SearchBar = () => {
    return (
        <Form>
            <OutlineInput placeholder={"Search for Group"}/>
            <OutlineButton style={{border:"1px solid black",color:"black",paddingRight:"20px",paddingLeft:"20px",marginLeft:"10px"}}>
            Search
        </OutlineButton>
        </Form>
        
            
        
    )
}

export default SearchBar
