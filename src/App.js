import logo from './logo.svg';
import './App.css';
import img_formacion from './img/Capture2.PNG'
import img_fotoperfil from './img/fotoperfil.jpg'

function Header(props){
  return(
    <header>
      <div id="div-titulo">
        <h1>{props.titulo}</h1>
        <h2>{props.nombre}</h2>
        <h3>{props.direccion}</h3>
        <h4>{props.telefono}</h4>
        <h5>{props.sitioweb}</h5>
      </div>
    </header>
  )
}


function Formacion(props){
  return(
    <section>
      <div id="div-formacion">
        <p align="justify">{resumen}</p>
        <hr />
        <img src={img_formacion} />
      </div>
    </section>
  )
}




function Habilidades(props){
  return(
    <section>
      <div id="div-habilidades">
        <h3><u>Habilidades</u></h3>
        <table align="center">
          <tr>
            <td>
            <ul style={{textAlign: "left"}}>
              {props.parametros_habilidades.map((habilidad) => (<li>{habilidad}</li>))}  
            </ul>
            </td>
            <td>
            <ul>
              {props.param_hab_valores.map((valor) => (<li>{valor}</li>))}  
            </ul>
            </td> 
          </tr>
          <tr>
          <td align="center" colspan="2">
              <img src={props.imagen} width="150" />  
            </td>
          </tr>
        </table>
        
      </div>
    </section>
  )
}


function Competencias(props){
  return(
    <section>
      <div id="div_competencias">
        <hr/>
        <p align="justify">{props.competencias}</p>
      </div>
    </section>
  )
}


function Footer(props){
  return(
    <footer>
      <p align="center">
        <img src={ruta_logo_unilibre} width="25"/>
        &nbsp;&nbsp;
        <b>Todos los derechos reservados - {props.anno}</b>
      </p>
    </footer>
  )
}

const parametros_Header = [
  "Hoja de Vida",
  "Carlos Munoz A.",
  "Pereira, Risaralda, Colombia",
  "Cel: 318 675 0265",
  "https://github.com/cmunoza"
];

const ruta_imagen = "https://frspros.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg";
const ruta_imagen_lenguajes = "https://tutorialesenlinea.es/uploads/posts/2019-08/1566406833_lenguaje-de-programacion_tutoriales_en_linea.webp";
const ruta_logo_unilibre = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/1200px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png";

const param_habilidades = [
  "HTML5","CSS3","PHP","JS","C++","Java","C#"
];

const param_hab_valores = [
  "*****","**","***","*","**","***","****"
];

const competencias ="Experiencia en desarrollo web en C# .Net con Entity Framework, WebForms,MVC, WebServices WCF tipo Soap y App Móviles con Xamarin para Android– iOS. Administración de servidores Linux Apache. XAMPP y Windows Server, IIS, servidores de bases de datos.";
const resumen = "Profesional en Ingenieria de Sistemas, con cinco años de experiencia en desarrollo de software, principalmente en ambientes web y escritorio, con manejo de lenguajes como C, C++, Java, PHP,JavaScript y conocimientos de Node y Python. Manejo de SQL con motores MySQL, SQL Server y PostgreSQL, dominio de tecnologías como: HTML, CSS, frameworks, CMS, entre otros. Además de administración de servidores Linux y Windows. Conocimientos intermedios de networking. Con capacidad de análisis, disciplina, trabajo en equipo y logro de metas.";

function App() {
  return (
    <div className="App">
      <table width="800" align="center" border="0">
        
      <tr>
          <td align="center" colspan="2">
            <br/>
          <footer><br/></footer>
          </td>  
        </tr> 

        <tr>
          <td align="center" width="50%">
            <Header 
              titulo={parametros_Header[0]} 
              nombre={parametros_Header[1]}
              direccion={parametros_Header[2]}
              telefono={parametros_Header[3]}
              sitioweb={parametros_Header[4]}  
            />
          </td>
          <td align="center" width="50%">
            <img src={img_fotoperfil} width="200" />  
          </td>
        </tr>
        <tr>

          <td align="center">
            <Formacion />
          </td>
          <td align="center">
            <tr>
              <td>
                <Habilidades 
                parametros_habilidades={param_habilidades} 
                param_hab_valores = {param_hab_valores}
                imagen= {ruta_imagen_lenguajes}
                />
              </td>
            </tr> 
            
            <tr>
            <td align="center">
              <Competencias competencias={competencias} />
            </td>
            </tr>
          </td>  
        </tr>
        <tr>
          <td align="center" colspan="2">
          <Footer anno={ new Date().getFullYear()} />
          </td>  
        </tr>  
      </table>

    </div>
    
  );
}

export default App;
