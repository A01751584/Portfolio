import './App.css';
import Header from './Components/Header';
import Imagen from './Components/Imagen'

function App() {
  return (
    <div className="App">
      <Header 
        user = "ITESM"
        title = "Portafolio"
        score = "ITC"/>

      <div className='info'>
        <h1>Christian Parrish Gutiérrez Arrieta</h1>
      </div>

      <div className = "resumen">
        <div className='yo'>
          <p>Estudiante de Ingeniería en Tecnologías Computacionales con
            habilidades y gusto por la programación y gestión en tecnologías de la
            información, con ganas de estar en constante aprendizaje y dispuesto a
            aplicar mis conocimientos en tecnologías computacionales y sentido
            humano en la resolución de retos.</p>
        </div>
        <div className='aptitudes'>
          <li>Solución de problemas</li>
          <li>Liderazgo</li>
          <li>Comunicación asertiva</li>
          <li>Trabajo en equipo</li>
          <li>Autodidacta</li>
        </div>
        <div className='habilidades'>
          <li>Programación avanzada en Python</li>
          <li>Programación intermedia con C++, C#, TS, HTML y CSS</li>
          <li>Administración avanzada de Base de Datos SQL</li>
          <li>Administración intermedia de Bases de Datos NoSQL</li>
        </div>
      </div>

      <div className='extras'>
        <div className='afiliaciones'>
          <li>Campeón nacional de fútbol
            representando al Estado de México
            categoría sub-15,del sector amateurde
            la FMF en 2016.</li>
          <li>Servicio Social en Instituto Mexiquense de la Juventud</li>
          <li>Servicio Social en Clínica Mexicana de Autismo y Alteraciones del Desarrollo de Irapuato A.C (CLIMA)</li>
          <li>Servicio Social para el municipio de Atizapán desarrollando una aplicación móvil y aplicación web.</li>
        </div>
        <div className='idiomas'>
          <li>Español: Nativo</li>
          <li>Ingles Avanzado: C1</li>
          <li>Japonés básico: N1</li>
        </div>
      </div>
      
    </div>
  );
}

export default App;
