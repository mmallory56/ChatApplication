import React from 'react'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'

const Container = styled.div`
height:auto;
width: 100vw;`
const ScreenWrapper = ({children}) => {
    return (
        <Container>
        <NavBar/>
        {children}  
        </Container>
    )
}

export default ScreenWrapper
