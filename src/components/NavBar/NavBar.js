import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import NavBrand from '../NavBrand/NavBrand'
import { useHistory } from "react-router-dom";
import { useUser } from '../../hooks/useUser';
import {AiOutlineUser} from 'react-icons/ai'
import NavItemDropDown from '../NavItem/NavItemDropDown';
import DropDownItem from '../NavItem/DropDownItem';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../../store/user/actions/userActions';

import SearchBar from '../SearchBar/SearchBar';
import CreateGroupModal from '../CreateGroupModal/CreateGroupModal';
const Nav = styled.div`

position: absolute;
display: flex;
align-items: center;
width: 100%;
height:60px;
background: linear-gradient(269.78deg, #4798A3 25.65%, #38C3D6 87.28%, #156C78 112.04%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const Container = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height:100%;
`

const NavBar = ({children}) => {
    
    const {user} = useUser();
    let history = useHistory();
    const dispatch = useDispatch()
    React.useEffect(() => {
        
    }, [])
   
    return (
        <Nav>
            <>
            <NavBrand src="./images/Brand.png" onClick={()=>history.push('/')}/>
            {children}

            
            </>
            
            <Container>
                {user?(<>
               
            
               <SearchBar/>
               <CreateGroupModal/>

               <NavItemDropDown  text={<AiOutlineUser size={50}/>}>
                  <DropDownItem onClick={()=>history.push("/profile")}>Profile</DropDownItem>
                
                 
                  <DropDownItem onClick={()=>{dispatch({type:USER_LOGOUT}); history.push("/login");}}>LogOut</DropDownItem>
              </NavItemDropDown>
              </>
            ):<Button onClick={()=>history.push("/login")}>Login</Button>}
            
            </Container>
        </Nav>
    )
}

export default NavBar
