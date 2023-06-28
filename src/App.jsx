import logo from './logo.svg';
import './App.css';
import './App2.css';
import miImagen from './hrex.PNG';
import giros from './img/giroscopio.PNG';
import term from './img/termistor.PNG';
import son from './img/sonido.png';


import logoinfo from './logoinfo.png';

function App() {
  return (

    <div>
        <header>
            <img src={logoinfo} alt="FIC" id='logoinfo' />

        </header>

        <div id='divisores-principales'>
                  <div className='blankfond'>
                    
                    <div>
                      <h1>Presentamos RO</h1>

                        <p className='textogrande'>Proyecto RO tiene como propósito concreto la exploración de espacios cerrados y de difícil
                          acceso, como serían barreras de escombros, lugares estrechos, tuberías medianas o bien,
                          conductos de ventilación.
                        </p>
                        </div>
                  </div>

                  <div className='blankfondimg'>
                      <img src={miImagen} alt="RO" id='imghrex' />

                </div>
        </div>
<hr></hr>
        <div id='divisores-principales'>

            <div className='blankfond'>
                <h2>Motivacion</h2>
                  <p> Los accidentes por derrumbes son un problema de escala mundial. Las construcciones
                      antisísmicas no son vistas en gran cantidad de países por no tener temblores o terremotos
                      ocasionalmente, a diferencia de Chile, país que se ha adecuado con sus construcciones ante
                      estas eventualidades. Proyecto RO se origina a partir de las consecuencias que genera este
                      desastre natural, ayudando en las labores de rescate con la exploración en escombros y
                      derrumbes, así como en la prevención de riesgos mayores al analizar zonas con peligro de
                      desplome.
                  </p>
            </div>

            
        </div>

        <hr></hr>

        
        <div >
              <h2>¿Como esta compuesto?</h2>
            
              <div className='desplegable'>

                  <div className='marco'>
                      <h3>Giroscopio ADXL345</h3> 
                    
                      <img src={giros} alt="Giro" className='limiteimg' />

                  </div>
          
                {/*------------------------------*/}

                  <div className='marco'>
                      <h3>Termistor</h3> 
                    
                      <img src={term} alt="term" className='limiteimg2' />

                  </div>

                 {/*------------------------------*/}

                 <div className='marco'>
                      <h3>Sensor de sonido</h3> 
                    
                      <img src={son} alt="son" className='limiteimg2' />

                  </div>


              
              </div>


          

                  <li>Sensor luminico</li>

                  

            </div>

        <div>

            <h2>Especificaciones técnicas</h2>

                  {/* Aportes de la universidad */}


                  <li>Arduino UNO x 3</li>
                  <li>Arduino NANO</li>

                          {/* AFEL */}

                  <li>Shield Motor L293D </li>
                  <li>Motorreductor N20 6v </li>
                  <li>Placa ESP32-CAM Wifi Bluetooth </li>
                  <li>Transceptor RF nRF24L01 2.4 Ghz con Antena SMA, LNA y PA </li>
                  <li>Porta Batería 18650 x 2</li>
                  <li>Kit 200 Botones Pulsadores</li>
                  <li>Soporte Pan-Tilt Servo SG90 - Cámara - Ultrasonico</li>
                  <li>Sensor Acelerómetro GY-291 ADXL345 </li>


                          {/* MECHATRONICSTORE */}

                  <li>Placa adaptadora para módulo transmisor inalámbrico NRF24L01 de 8 pines</li>
                  <li>Módulo joystick analógico de playstation KY-023 </li>
                  <li>Interruptor de palanca x 3</li>
                  <li>Potenciometro</li>
                  <li>Placa PCB un lado Perforada Punto a Punto 9x15cm </li>
                  <li>Resistencia Variable Lineal 10K Deslizante Estereo </li>

                          {/* MUNDO VAPER */}

                  <li>Batería Samsung 25R INR 18650</li>
                          
                          {/* GLOBALCHILE */}

                  <li>LORA SX1278</li>

            

        </div>

    <footer>
      <div style={{ paddingLeft: 80+"%" }}>
      <small>
      Contacto: 
      </small>
      <li><small>omar.marca@mail.udp.cl </small></li>
      <li><small>felipe.mora_m@mail.udp.cl </small></li>
      <li><small>luis.reyes_h@mail.udp.cl </small></li>
      <li><small>vicente.torresb@mail.udp.cl</small></li>
      </div>

    </footer>

  </div>

  );
}

export default App;
