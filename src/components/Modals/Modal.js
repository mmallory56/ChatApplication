import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

const Modal = styled.div`


  background-color: white;
  position: fixed;
  width:50%;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(30% );
  display: flex;
  flex-direction: column;
  
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
padding: 10px;
 background-color:grey;
  height: auto;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 10px;
 
  text-align: center;
  width: 200px;
  cursor: pointer;
  
  background-color: grey;
`;
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: lightgrey;
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;
export const MainButton = styled.button`
`;
export function ModalContainer({ setOpen,children }) {

 
  function close() {
    setOpen(false);
  }
  function submit() {
    
    close();
  }
  
  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Create New Group</ModalBanner>
        <ModalContent>
        {children}
         
        </ModalContent>
        <ModalFooter>
          <Button onClick={submit}> Submit </Button>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}
export function ModalExample(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ clicks: 0 });
  return (
    <div>
      <div>Clicks: {data.clicks}</div>
      <MainButton
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </MainButton>
      {open && (
        <ModalContainer
          {...props}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}
