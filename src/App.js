import Welcome from "./Component/Profile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from './Component/logo.svg'


function App() {
  const styleApp={color:'red',
  display:'flex',
   justifyContent:'center'}
  const handelname = (name) => { alert(`the name of the product is ${name}`)}
  return (
    <>
      <div style={styleApp}>
      <Welcome
        img={img}
        fullName="ReactJS"
        bio="Bioreactor systems are a vital component in the process of 3D tissue engineering and the formation of tissue constructs. Bioreactors are used to provide a tissue-specific physiological in vitro environment during tissue maturation. Based on the bioreactor technology, various tissue systems can be incubated in vitro."
        profession="Un développeur React.js freelance expérimenté devra comprendre et pouvoir expliquer en détail le cycle de vie des composants React. D’ailleurs, c’est l’un des gros atouts de cette technologie. Voici un excellent articlepour approfondir la question !"
        handelname={handelname}></Welcome>
        </div>
    </>
  );
}

export default App;
