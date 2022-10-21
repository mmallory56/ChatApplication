import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
margin-right:.5rem;
color: lightgrey;
`
const Link = styled.a`

`
const NavItem = (props) => {
    return (
        <Item {...props} >
            <Link >{props.children}</Link>
        </Item>
    )
}

export default NavItem
