import './Css/ModalMessage.css'
import Alert from '@mui/material/Alert';

function ModalMessage({ message, onClose }){
  
    if (!message){
      return; 
    }

    onClose ||= () => {};

    return (
      <div className="modal background">
        <Alert variant="filled" severity="error">{ message }</Alert>
        <button onClick={onClose}>Cerrar</button>
      </div>
  )
  }

  export default ModalMessage;