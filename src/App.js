import './App.scss';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { appRoutes } from './AppRoutes';

library.add(faFileLines, faGlobe);

function App() {
  return (
    <>
      <Header />
      <div
        id='content-wrapper'
        className='align-items-center d-flex flex-fill justify-content-center'
      >
        <RouterProvider router={appRoutes} />
      </div>
      <Footer />
    </>
  );
}

export default App;
