import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import OutlineButton from '../Button/OutlineButton'
import { ModalContainer } from '../Modals/Modal'
import styled from 'styled-components'
import InputComponent from '../Input/InputComponent'
import Button from '../Button/Button'


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 100px;
width: 90%;
height: 100vh;
flex-direction: column;

background: linear-gradient(241.79deg, #000000 -23.63%, rgba(0, 0, 0, 0.564583) 47.42%, rgba(0, 0, 0, 0.86) 139.54%);
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
box-shadow: .1rem .1rem .2rem black;
width: 100px;
height:100px;
background-color: grey;
 `;

  const Component =()=>{
         const [admins,setAdmins]=React.useState([]);
    const [name,setName]=React.useState("");
    const [password,setPassword]= React.useState("");
    const [confirmPassword,setConfirmPassword]= React.useState("");
     const handleSubmit=(e)=>{
        e.preventDefault();

    }
        return (
        <Container>
        <h1 style={{color:"black"}}>Create Group:</h1>
      
            
            
            <Box>Select Group Pic</Box>
            <InputComponent label="Group Name" value={name} setValue={setName}/>
            {/* <InputComponent label="Admins" value={admins} setValue={setAdmins}/> */}
           
           <div style={{display:"flex",justifyContent:"left",alignItems:"start",width:"67%"}}>
  
           </div>
            
            
        
        </Container>
        )
    }
//Modal for creating Groups
const CreateGroupModal = ({children}) => {
    
    const [open,setOpen]= React.useState(false);
   const onClickHandler=()=>{
        setOpen(true)
    }
     
   
    return (
        <>
        <OutlineButton style={{textAlign:"center"}}onClick={onClickHandler}><div><AiOutlineUsergroupAdd size={30}/></div>Create Group</OutlineButton>
        {children}
          {open &&
          <ModalContainer
            setOpen={setOpen}
            component={Component}
         
          ><Component></Component></ModalContainer>}  
        </>
    )
}

export default CreateGroupModal
