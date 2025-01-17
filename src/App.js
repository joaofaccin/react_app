
import './App.css';
import Navbar from '././components/Navbar';
import Table from './components/Table';

function App() {
    return (
      <div>
        <Navbar />
        <h1>Bem-vindo ao Hotel Paraiso!</h1>
          <h3>Sinta-se em casa</h3>
        {/* O resto do conteúdo do seu aplicativo */}
        <Table />
      </div>
    );
}

export default App;
