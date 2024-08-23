import './Css/ModalMessage.css'
import Alert from '@mui/material/Alert';

function ModalYesNo({ message, show, onYes, onNo }){
  
    if (!show){
      return; 
    }

    onYes ||= () => {};
    onNo ||= () => {};

    return (
      <div className="modal background">
        <div className="modal-container">
          <Alert variant="filled" severity="error">{ message }</Alert>
          <div className="modal-opts">
            <button onClick={onYes}>Si</button>
            <button onClick={onNo}>No</button>
          </div>
        </div>
      </div>
  )
  }

  export default ModalYesNo;