import quieto from '../../public/img/vaderQ.jpg'
import abajo from '../../public/img/vaderAb.jpg'
import arriba from '../../public/img/vaderAr.jpg'
import derecha from '../../public/img/vaderD.jpg'
import izquierda from '../../public/img/vaderI.jpg'
import ganar from '../../public/img/ganar.jpg'



import React,{useState, useEffect} from 'react'

const Jugador = ({state}) => {

    const [img, setImg] = useState(null)

    //logica para determinar la animacion del personaje
    useEffect(()=> {
        switch(state){
            case 'quieto':
                setImg(quieto)
                break;
            case 'abajo':
                setImg(abajo)
                break;
            case 'arriba':
                setImg(arriba)
                break;
            case 'derecha':
                setImg(derecha)
                break;
            case 'izquierda':
                setImg(izquierda)
                break;
            case 'ganar':
                setImg(ganar)
                break;
            
        }
    },[state])


    return (
        <div css = {
            {backgroundImage: `url(${img})`,
            height: '45px',
            width: '45px',
            backgroundSize: 'cover',
         }}/>
    )

}



export default Jugador