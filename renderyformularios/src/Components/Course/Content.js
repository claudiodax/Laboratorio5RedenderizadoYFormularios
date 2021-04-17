
import React, {Fragment,useState}from'react';

const Content =(props)=>  {
  
    const [coursePar,setcoursePar]=useState(props.course.parts)
    return(
        <Fragment>
        <p>Content</p>
        </Fragment>
    );
    }
const estilos = {
        Texto:{
          fontSize:'20px',
          color:'green',
          textAlign: 'left',
          marginLeft:'45%',
        },
      }
export default Content;