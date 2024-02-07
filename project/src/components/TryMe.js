import React from 'react'
import {useParams,Navigate,useNavigate} from 'react-router-dom'

const TryMe = (props) =>{

  
    return <Navigate to={"/manager"} state={"from Task"}/>
   
    return(
        <>Task </>
    )
}

export default TryMe