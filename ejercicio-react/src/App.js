
import './App.css';
import ContactoComponent from '../src/components/contacto' 
import { Contacto } from './models/contacto_class';

function App() {
  const contactoDefault = new Contacto ("Andres", "Ramirez", "aramirezaliste@gmail.com", true);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Contacto:</h1>
        <ContactoComponent info = { contactoDefault }/>
      </header>
    </div>
  );
}

export default App;
