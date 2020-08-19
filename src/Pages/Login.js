import React, {useState} from 'react';

function Login(){
    const [form,setForm] = useState({username:'',password:''})
    const handleChange = (e)=>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
    e.preventDefault();
    }
    const handleSubmit = (e)=>{
    console.log(form)
    fetch("http://localhost:3007/users/login",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
    })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                localStorage.setItem("token",result.token)
            },
            (error) => {
            console.log("Error")
            }
        )
    e.preventDefault();
    }
    return (
    <div className="App">
        <form onSubmit={handleSubmit}>
        
        <div>
            <label>Usuario</label>
            <input type="text" name="username" value={form.username} onChange={handleChange}></input>
        </div>
        <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}></input>
        </div>
        <input type="submit" value="Registrarse"></input>
        </form>
    </div>
    );
}

export default Login;
