
import './App.css';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

function App() {
  const handelname = (name) => { alert(`the name of the product is ${name}`)}
  const tabproduits=[
    {
      img:'https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg',
      nom:'pc1',
      prix:'1254dt',
      qte:3
    },
    {
      img:'https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg',
      nom:'pc2',
      prix:'1254dt',
      qte:3
    },
    {
      img:'https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg',
      nom:'pc3',
      prix:'1254dt',
      qte:3
    },
    {
      img:'https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg',
      nom:'pc4',
      prix:'1254dt',
      qte:3
    },
  ]
  return (
    <div className="App">
  
     <ProductList products={tabproduits} handelname={handelname}/>
<Footer text='txt' >
  <h1>hello</h1>
  <img src="https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg" alt="" />
</Footer>
    </div>
  );
}

export default App;
