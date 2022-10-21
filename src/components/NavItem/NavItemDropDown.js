import React, {useRef,useState,useEffect} from 'react'
import styled from 'styled-components'

const Item = styled.div`
margin-right:.5rem;
color: lightgrey;
&:hover{
   
  }
  transition: all .3s ease-in-out;

`
const DropDownMenu = styled.div`
position: absolute;
display: flex;
flex-direction: column;
height: ${({opened})=>opened?"auto":"0px"};
visibility:${({opened})=>opened?"visible":"hidden"} ;
 opacity: ${({opened})=>opened?"100":"0"};
width:200px;
border-radius: .5rem;
background-color:grey;
transform: translateX(-90%);
transition:all .4s ease;

`;

const NavItemDropDown = ({children,text}) => {
    const [opened,setOpened]= useState(false);

    const closeDropDown =(e)=>{
        e.preventDefault(); 
        setOpened(false);
        
    }
    useEffect(() => {
        if(opened){
        window.addEventListener("click",closeDropDown)}
        else{
         window.removeEventListener("click",closeDropDown)   
        }
        
        return ()=>{
            window.removeEventListener("click",closeDropDown);
            
        }
    }, [opened])
    const handleDropDown=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        setOpened(!opened)
       
    }
    return (
        <Item onClick={e=>handleDropDown(e)}  >
            {text}
            <DropDownMenu opened={opened} onClick={(e)=>{e.stopPropagation(); e.preventDefault();}}>
            {children}
            </DropDownMenu>
        </Item>
    )
}

export default NavItemDropDown
