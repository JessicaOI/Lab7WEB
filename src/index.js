import React, {useState} from 'react'

//import ReactDOM from 'react-dom/client';
import Laberinto from './components/Laberinto.jsx'
import Fondo from '../public/img/fondo.jpg'
import Start from '../public/img/start.png'
import End from '../public/img/victoria.jpg'
import Again from '../public/img/again.png'

//import * as ReactDOM from "react-dom/client"
import {createRoot} from 'react-dom/client'


const App = () => {
    const [play, setPlay] = useState(false)
    const [ganar, setGanar] = useState(false)

    return (
        <div css = {{
            width: '100vw',
            height: '100vh',
        }}>
            {
                ganar ? 
                    <div css = {{
                    width: '100%',height: '100%',
                    backgroundImage: `url(${Fondo})`,
                    display: 'flex',flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                        <div 
                        css = {{backgroundImage: `url(${End})`,
                        height: '650px',
                        width: '700px',
                        backgroundSize: 'cover',
                        marginTop:'10px'}}>
                         <img src={Again} alt="Again" onClick={() => { setGanar(!ganar); setPlay(!play)}} ></img>
                        </div>
                    </div>
                :
                    play ?
                    <div css={{
                        height: '100vh',
                        width: '100vw'}}>

                        <Laberinto setGanar={setGanar} ganar={ganar}/>
                    </div>
                    :
                    <div css = {{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${Fondo})`,
                        display: 'flex',flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}>

                        <img src={Start} alt="Start" onClick={()=>{ setPlay(!play)}} ></img>
                    </div>
                
            }
            
            
        </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container)
root.render(<App tab="home" />)