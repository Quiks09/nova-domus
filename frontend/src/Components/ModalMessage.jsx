import './Css/ModalMessage.css'
import Alert from '@mui/material/Alert';

function ModalMessage({ message, onClose }){
  
    if (!message){
      return; 
    }

    onClose ||= () => {};

    return (
      <div className="modal background">
        <div className="modal-container">
          <Alert variant="filled" severity="error">{ message }</Alert>
          <div className="modal-opts"><button onClick={onClose}>Cerrar</button></div>
        </div>
      </div>
  )
  }

  export default ModalMessage;