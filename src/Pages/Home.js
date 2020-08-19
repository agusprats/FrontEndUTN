import React,{useState, useEffect} from 'react';
import Producto from '../Components/Producto'

function Home() {
    const [productos, setProductos] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=>{
        console.log("componentDidMount - hook equivalente");
        fetch("http://localhost:3007/products/", {
          headers:{
            "x-access-token":localStorage.getItem("token")
          }
        })
        .then(res=>res.json())
        .then(
        (result) =>{
          console.log(result)
          if(!result.error){
          setProductos(result);
          setLoading(false);
        }
      },
        (error) => {
        console.log("error")
        }
    )
    }
    ,[]);
    return (
      <div className="App">
        {
        loading &&
        <div>Loading</div>
        }
        {
        !loading &&
        <div>
        {productos.map((producto,index)=><Producto key={producto._id} data={producto}/>)}   
        </div>
        }

        </div>
    );
  }

export default Home;