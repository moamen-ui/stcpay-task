import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Verify from './pages/Verify/Verify';
import Confirmation from './pages/Confirmation/Confirmation';

export const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Verify />}></Route>
      <Route path='/confirmation' element={<Confirmation />}></Route>
    </>
  )
);
