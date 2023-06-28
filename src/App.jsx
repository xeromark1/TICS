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

                        <p className='textogrande'>Proyecto RO tiene como prop�sito concreto la exploraci�n de espacios cerrados y de dif�cil
                          acceso, como ser�an barreras de escombros, lugares estrechos, tuber�as medianas o bien,
                          conductos de ventilaci�n.
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
                      antis�smicas no son vistas en gran cantidad de pa�ses por no tener temblores o terremotos
                      ocasionalmente, a diferencia de Chile, pa�s que se ha adecuado con sus construcciones ante
                      estas eventualidades. Proyecto RO se origina a partir de las consecuencias que genera este
                      desastre natural, ayudando en las labores de rescate con la exploraci�n en escombros y
                      derrumbes, as� como en la prevenci�n de riesgos mayores al analizar zonas con peligro de
                      desplome.
                  </p>
            </div>

            
        </div>

        <hr></hr>

        
        <div >
              <h2>�Como esta compuesto?</h2>
            
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

            <h2>Especificaciones t�cnicas</h2>

                  {/* Aportes de la universidad */}


                  <li>Arduino UNO x 3</li>
                  <li>Arduino NANO</li>

                          {/* AFEL */}

                  <li>Shield Motor L293D </li>
                  <li>Motorreductor N20 6v </li>
                  <li>Placa ESP32-CAM Wifi Bluetooth </li>
                  <li>Transceptor RF nRF24L01 2.4 Ghz con Antena SMA, LNA y PA </li>
                  <li>Porta Bater�a 18650 x 2</li>
                  <li>Kit 200 Botones Pulsadores</li>
                  <li>Soporte Pan-Tilt Servo SG90 - C�mara - Ultrasonico</li>
                  <li>Sensor Aceler�metro GY-291 ADXL345 </li>


                          {/* MECHATRONICSTORE */}

                  <li>Placa adaptadora para m�dulo transmisor inal�mbrico NRF24L01 de 8 pines</li>
                  <li>M�dulo joystick anal�gico de playstation KY-023 </li>
                  <li>Interruptor de palanca x 3</li>
                  <li>Potenciometro</li>
                  <li>Placa PCB un lado Perforada Punto a Punto 9x15cm </li>
                  <li>Resistencia Variable Lineal 10K Deslizante Estereo </li>

                          {/* MUNDO VAPER */}

                  <li>Bater�a Samsung 25R INR 18650</li>
                          
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
