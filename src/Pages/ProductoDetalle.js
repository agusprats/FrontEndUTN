import React, {useState, useEffect} from 'react';
import Producto from '../Components/Producto'

function ProductoDetalle(props){
    const [producto, setProducto] = useState([]);
    const [loading,setLoading] = useState(true)

useEffect(
        ()=>{
        console.log("componentDidMount - hook equivalente");
        fetch("http://localhost:3007/products/"+props.match.params.id)
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                setProducto(result)
                setLoading(false);
                
            },
            (error) => {
                console.log("Error")
            }
        )
    }
, []); 

return(
    <div className="App">
       
        {
        loading &&
        <div>Loading</div>
        }
        {
        !loading &&
        <div>
        <Producto key={producto._id} data={producto}/>
        </div>
        }
        </div>
);
}


export default ProductoDetalle;
