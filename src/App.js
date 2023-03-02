import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { appRoutes } from './AppRoutes';
import { I18nPropvider, LOCALES } from './i18nProvider';
import './App.scss';

library.add(faFileLines, faGlobe);

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const handelSelectLanguage = (newLanguage) => {
    setLocale(newLanguage);
  };
  return (
    <I18nPropvider locale={locale}>
      <Header onSelectLanguage={handelSelectLanguage} />
      <div
        id='content-wrapper'
        className='align-items-center d-flex flex-fill justify-content-center'
      >
        <RouterProvider router={appRoutes} />
      </div>
      <Footer />
    </I18nPropvider>
  );
}

export default App;
