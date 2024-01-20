import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { ItemContextProvider } from './context/ItemContextProvider';
import LayoutAuth from './components/LayoutAuth';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/authentication/Unauthorized';
import Missing from './components/generic/Missing';
import PersistLogin from './components/authentication/PersistLogin';
import RequireAuth from './components/authentication/RequireAuth';

function App() {
  const ROLES = {
    "Admin": 51507865,
    "Editor": 1984078,
    "User": 2001345
  }
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
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
        </Route>
      </Route>

      {/* These are publicly accessible routes */}
      <Route path="/" element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
