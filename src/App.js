import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { ItemContextProvider } from './ItemContextProvider';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={
          <ItemContextProvider>
            <Home />
          </ItemContextProvider>
        } />
        <Route path="brands" element={
          <ItemContextProvider>
            <Home />
          </ItemContextProvider>
        }
        />
        <Route path="products" element={
          <ItemContextProvider>
            <Home />
          </ItemContextProvider>
        }
        />
        <Route path="inventory" element={
          <ItemContextProvider>
            <Home />
          </ItemContextProvider>
        }
        />
      </Route>
    </Routes>
  );
}

export default App;
