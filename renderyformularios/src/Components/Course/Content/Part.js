import React, {Fragment,useState}from'react';

const part =(props)=>  {
  
    const [coursePar,setcoursePar]=useState(props.course.parts)
    return(
        <Fragment>
        <p>Part</p>
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
export default Part;