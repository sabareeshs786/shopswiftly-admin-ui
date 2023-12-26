import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { ItemContextProvider } from './ItemContextProvider';
import UploadForm from './UploadForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ItemContextProvider>
          <Home />
        </ItemContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
