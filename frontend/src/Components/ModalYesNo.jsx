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
        <Alert variant="filled" severity="error">{ message }</Alert>
        <button onClick={onYes}>Si</button>
        <button onClick={onNo}>No</button>
      </div>
  )
  }

  export default ModalYesNo;