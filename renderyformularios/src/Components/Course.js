import React, {Fragment,useState}from'react';

const Course =(props)=>  {

    const [coursePar,setcoursePar]=useState(props.course.parts[0])
    return(
        <Fragment>
          <center>
    <p style={estilos.Texto}>{props.course.name}</p>
    <p style={estilos.Texto}>{props.course.id}</p>
    <br/>
    <p style={estilos.Texto}>{coursePar.name}</p>
    <p style={estilos.Texto}>{coursePar.exercises}</p>
    <p style={estilos.Texto}>{coursePar.id}</p>
    <button onClick={()=>{
      setcoursePar({...coursePar,
        name:'-',
        exercises:'-',
        })}} style={estilos.boton}>Formatear </button>
    </center>
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
        boton:{
          borderRadius: '8px',
          backgroundColor: 'red',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          marginLeft:'5px',
          marginRight:'5px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          transitionDuration: '0.4s',
          fontSize:'25px',
        },
        textAd:{
          color:'red',
        }
      }
export default Course;