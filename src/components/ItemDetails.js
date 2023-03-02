import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

export const ItemDetails = ()=>{

const {id} = useParams()
    
return(
    <>
        {
        localStorage.getItem("token") 
        ?
        <h1>{id}</h1>
        :
        <Navigate to="/" />   
        }       
    </>
    )
}