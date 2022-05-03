import React, { useEffect, useState, useCallback } from 'react';

import cancion from '../../public/audios/cancion.mp3';
import Piso from '../../public/img/piso.jpg';
import Fondo from '../../public/img/fondo.jpg';
import pared from '../../public/img/pared.png';
import final from '../../public/img/luke.jpg';
import Jugador from './Jugador.jsx';

function Laberinto({ setGanar }) {
  const musica = new Audio(cancion);
  let finish = false;
  const [laberinto, setLaberinto] = useState([]);
  const [jugador, setJugador] = useState('quieto');
  const [alto, setAlto] = useState(5);
  const [ancho, setAncho] = useState(5);

  const loadLaberinto = async () => {
    const fet = `https://maze.juanelcaballo.club/?type=json&w=${alto}&h=${ancho}`;

    const response = await fetch(fet)
      .then((response) => response.json()).then((responseInJSON) => responseInJSON);
    setLaberinto([...response]);
  };

  const getAlto = () => {
    const valorA = document.getElementById('alto').value;
    const nuevaA = parseInt(valorA);
    setAlto(nuevaA);
  };

  const getAncho = () => {
    const valorAn = document.getElementById('ancho').value;
    const nuevaAn = parseInt(valorAn);
    setAncho(nuevaAn);
  };

  const getAmbos = () => {
    getAlto();
    getAncho();
  };

  const getlistener = useCallback((event) => {
    if (finish === false) {
      const llave = event.key;

      setLaberinto((oldState) => {
        let x = oldState.findIndex((row) => row.indexOf('p') > -1);
        let y = oldState[x].indexOf('p');

        const laberinto = [...oldState];

        switch (llave) {
          case 'a':
            setJugador('izquierda');
            if (laberinto[x][y - 1] === ' ') {
              laberinto[x][y] = ' ';
              laberinto[x][y - 1] = 'p';
              y -= 1;
              return laberinto;
            } if (laberinto[x][y - 1] === 'g') {
              laberinto[x][y] = ' ';
              laberinto[x][y - 1] = 'p';
              y -= 1;
              setJugador('ganar');
              finish = true;
              setTimeout(() => { setGanar(true); musica.pause(); }, 2000);
            }

            break;

          case 'd':
            setJugador('derecha');
            if (laberinto[x][y + 1] === ' ') {
              laberinto[x][y] = ' ';
              laberinto[x][y + 1] = 'p';
              y += 1;
              return laberinto;
            } if (laberinto[x][y + 1] === 'g') {
              laberinto[x][y] = ' ';
              laberinto[x][y + 1] = 'p';
              y += 1;
              setJugador('ganar');
              finish = true;
              setTimeout(() => { setGanar(true); musica.pause(); }, 2000);
            }
            break;

          case 'w':
            setJugador('arriba');
            if (laberinto[x - 1][y] === ' ') {
              laberinto[x][y] = ' ';
              laberinto[x - 1][y] = 'p';
              x -= 1;
              return laberinto;
            } if (laberinto[x - 1][y] === 'g') {
              laberinto[x][y] = ' ';
              laberinto[x - 1][y] = 'p';
              x -= 1;
              setJugador('ganar');
              finish = true;
              setTimeout(() => { setGanar(true); musica.pause(); }, 2000);
            }
            break;

          case 's':
            setJugador('abajo');
            if (laberinto[x + 1][y] === ' ') {
              laberinto[x][y] = ' ';
              laberinto[x + 1][y] = 'p';
              x += 1;
              return laberinto;
            } if (laberinto[x + 1][y] === 'g') {
              laberinto[x][y] = ' ';
              laberinto[x + 1][y] = 'p';
              x += 1;
              setJugador('ganar');
              finish = true;
              setTimeout(() => { setGanar(true); musica.pause(); }, 2000);
            }
            break;
          default:
            // do nothing
        }
        return laberinto;
      });
    }
  }, []);

  useEffect(() => {
    loadLaberinto();
    document.addEventListener('keydown', getlistener);

    musica.play();
    musica.loop = true;
    musica.volume = 0.4;
  }, []);

  return (
    <div css={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${Fondo})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'scroll',
      overflowX: 'hidden',
    }}
    >

      <div css={{
        color: 'white',
        textAlign: 'center',
        width: '100%',
      }}
      >

        <h1>Larga Vida Al Imperio</h1>
      </div>

      <div css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: '0px',
        paddingBottom: '15px',
        color: 'white',
      }}
      >

        <h4>Ancho:</h4>
        <input type="number" id="ancho" name="quantity" min="3" max="10" placeholder={ancho} />
        <div css={{ paddingLeft: '20px' }}>
          <h4>Alto:</h4>
        </div>

        <input type="number" id="alto" name="quantity" min="3" max="10" placeholder={alto} />
        <br />
        <br />
        <button onClick={getAmbos}>Guardar Valores</button>
        <button onClick={loadLaberinto}>Recargar laberinto</button>
      </div>

      <div css={{
        display: 'inline-block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80vw',
        height: '500px',
        padding: '20px',
      }}
      >

        {
                laberinto.map((row, rowIndex) => (
                  <div
                    llave={rowIndex}
                    css={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >

                    {
                            row.map((column, columnIndex) => {
                              if (column === '+' || column === '-' || column === '|') {
                                return (
                                  <div
                                    llave={columnIndex}
                                    css={{
                                      backgroundImage: `url(${pared})`,
                                      height: '45px',
                                      width: '45px',
                                      backgroundSize: 'contain',
                                    }}
                                  />
                                );
                              } if (column === ' ') {
                                return (
                                  <div
                                    llave={columnIndex}
                                    css={{
                                      backgroundImage: `url(${Piso})`,
                                      height: '45px',
                                      width: '45px',
                                      backgroundSize: 'contain',
                                    }}
                                  />
                                );
                              } if (column === 'p') {
                                return (
                                  <Jugador llave="player" state={jugador} />
                                );
                              } if (column === 'g') {
                                return (
                                  <div
                                    llave={columnIndex}
                                    css={{
                                      backgroundImage: `url(${final})`,
                                      height: '45px',
                                      width: '45px',
                                      backgroundSize: 'contain',
                                    }}
                                  />
                                );
                              }

                              return (
                                <div
                                  llave={columnIndex}
                                  css={{
                                    height: '45px',
                                    width: '45px',
                                    border: '10px',
                                  }}
                                />
                              );
                            })
                        }
                  </div>

                ))

            }

      </div>

    </div>
  );
}

export default Laberinto;
