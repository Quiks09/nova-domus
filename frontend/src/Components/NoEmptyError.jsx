import Alert from '@mui/material/Alert';

function NoEmptyError({ msg }){
    if (!msg){
      return; 
    }
    return (
      <Alert variant="filled" severity="error">{ msg }</Alert>
  )
  }

  export default NoEmptyError;