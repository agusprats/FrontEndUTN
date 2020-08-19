import React, {useState} from 'react';

function Registro(){
const [form, setForm]=useState({name:"",username:"",password:"",documento:"",mail:""})
const handleChange = (e)=> {
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
    e.preventDefault();
}
const handleSubmit =(e)=>{
    console.log(form)
    fetch("http://localhost:3007/users/registro",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
})
        .then(res=>res.json())
        .then(
        (result) =>{
        console.log(result) 
    
        },
        (error) => {
        console.log("error")
        }
    )
    e.preventDefault();
}
return(
    <div className="App">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}></input>
            </div>
            <div>
                <label>Usuario</label>
                <input type="text" name="username" value={form.username} onChange={handleChange}></input>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <div>
                <label>Documento</label>
                <input type="text" name="documento" value={form.documento} onChange={handleChange}></input>
            </div>
            <div>
                <label>E-Mail</label>
                <input type="text" name="mail" value={form.mail} onChange={handleChange}></input>
            </div>

            <input type="submit" value="Registrarse" ></input>

            </form>
            </div>
);
}


export default Registro;
