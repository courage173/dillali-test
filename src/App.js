import {useState} from 'react';
import './App.css';
import Header from './components/header';
import AppMode from './components/AppMode';
import AdminMode from './components/AdminMode';

function App() {
  const [mode, setMode] = useState('app')
  return (
    <div className="App" style={{
      background: mode === 'app' ? '#fff' : '#e5e5e5'
    }}>
      <Header action={setMode}/>
      <div className='layout-wrapper'> 
        {mode === 'app' ? <AppMode /> : <AdminMode />}
      </div>
    </div>
  );
}

export default App;
