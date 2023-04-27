import { Dialog } from 'primereact/dialog';
import React from "react";
import './dialog.css';

const MyDialog = (props,turnos) => {
  return (
    <Dialog visible={props.isOpen} onHide={() => props.setIsOpen(false)}>
    
        <h3>¡Felicitaciones!</h3>
        
       <h3>Has ganando en {props.turnos} turnos</h3>

        <button className='buttonDiag' onClick={() => props.setIsOpen(false)}>OK</button>
    </Dialog>
  );
};
export default MyDialog;
