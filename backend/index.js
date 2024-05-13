import express from 'express';

const app = express();

const port = 4000;

app.get('/',(req,res)=>{
    res.send('Hola Mundo!')
});

app.listen(
    port, 
    () => console.log(`El servidor esta aceptando conexiones en el puerto ${port}`));