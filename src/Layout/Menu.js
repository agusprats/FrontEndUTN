import React,{Component} from 'react';
import {Link} from "react-router-dom"

class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            login:true,
            opciones:[
            {
            path:"/",
            label:"Home"
            },
            {
            path:"/login",
            label:"Ingresar"
            },
            {
            path:"/registro",
            label:"Registrarse"
            }
            ]
        }
    }
    handleClick = (event)=>{
        this.setState({
        opciones:[
        {
        path:"/login",
        label:"Ingresar"
        },
        {
        path:"/registro",
        label:"Registrarse"
        }
        ]
        })
    }
    /*
    componentWillMount(){
        console.log("componentWillMount")
    }*/
    componentDidMount(){
        console.log("componentDidMount")
    }
    /*
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextState,nextProps)
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate",nextProps,nextState)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate",prevProps,prevState)
    }
*/
    render(){
        return(
        <div>
                
        {this.state.opciones.map((opcion, index)=><Link key={index} to={opcion.path}><div>{opcion.label}</div></Link>)}
        <button onClick={this.handleClick}>Logout</button>
        </div>
        )
    }
}

export default Menu