import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import semaforoR from './assets/semaforoRojo.png'
import semaforoA from './assets/semaforoAma.png'
import semaforoV from './assets/semaforoVerde.png'

function App() {
  const semaforos = [semaforoR, semaforoA, semaforoV]
  const [semaforoVerde, setSemaforoVerde] = useState(1)
  const [semaforoAmarillo, setSemaforoAmarillo] = useState(0)
  const tiempoAmarillo = useRef(0)
  const tiempoVerde = useRef(1)
  const temporizadorAmarillo = useRef(3)
  const temporizadorVerde = useRef(6)
  const [semaforo1, setSemaforo1] = useState(semaforoV)
  const [semaforo2, setSemaforo2] = useState(semaforoR)
  const [semaforo3, setSemaforo3] = useState(semaforoR)
  const [semaforo4, setSemaforo4] = useState(semaforoR)

  useEffect(() =>{
    const tiempo = setInterval (() => {
      tiempoAmarillo.current = tiempoAmarillo.current + 1;
      if (tiempoAmarillo.current >= 3) {
        tiempoAmarillo.current = 0;
        setSemaforoAmarillo((prev) => {
          switch(prev){
            case 1:
              setSemaforo1(semaforos[0]);
              break;
            case 2:
              setSemaforo2(semaforos[0]);
              break;
            case 3:
              setSemaforo3(semaforos[0]);
              break;
            default:
              setSemaforo4(semaforos[0]);
              break;
          }
          return 0
        })
      }

    }, 1000);
    return () => clearInterval(tiempo);
  }, [semaforoVerde]);

  useEffect(() =>{
    const temporizador = setInterval(() =>{
      tiempoVerde.current = tiempoVerde.current +1
      if (tiempoVerde.current >= 6) {
        tiempoVerde.current = 0;
          switch(semaforoVerde){
            case 1:
              setSemaforo1(semaforos[1]);
              break;
            case 2:
              setSemaforo2(semaforos[1]);
              break;
            case 3:
              setSemaforo3(semaforos[1]);
              break;
            default:
              setSemaforo4(semaforos[1]);
              break;
          }
        setSemaforoAmarillo(semaforoVerde)

        if (semaforoVerde >= 4) setSemaforoVerde((prev) => {
          setSemaforo1(semaforos[2])
          return 1
        })
        else setSemaforoVerde((prev) => {
          switch(prev){
            case 1:
              setSemaforo2(semaforos[2]);
              break;
            case 2:
              setSemaforo3(semaforos[2]);
              break;
            default:
              setSemaforo4(semaforos[2]);
              break;
          }
          return prev + 1
        })
      }
    }, 1000)
    return () => clearInterval(temporizador);
  }, [semaforoVerde]);

  return (
    <>
      <div className='fondo-calle'>
        <img src={semaforo1}
          alt="semaforo"
          style={{
            position:'absolute',
            width: '50px',
            height: '50px',
            left: '48%',
            top: '60%',
            bottom: '50%',
            objectFit: 'contain'
          }}
        />
        <img src={semaforo2}
          alt="semaforo"
          style={{
            position:'absolute',
            width: '50px',
            height: '50px',
            left: '53%',
            top: '45%',
            bottom: '50%',
            objectFit: 'contain',
            transform: 'rotate(270deg)'
          }}
        />
        <img src={semaforo3}
          alt="semaforo"
          style={{
            position:'absolute',
            width: '50px',
            height: '50px',
            left: '48%',
            top: '30%',
            bottom: '50%',
            objectFit: 'contain',
            transform: 'rotate(180deg)'
          }}
        />
        <img src={semaforo4}
          alt="semaforo"
          style={{
            position:'absolute',
            width: '50px',
            height: '50px',
            left: '42%',
            top: '45%',
            bottom: '50%',
            objectFit: 'contain',
            transform: 'rotate(90deg)'
          }}
        />
      </div>
    </>
  )
}

export default App
