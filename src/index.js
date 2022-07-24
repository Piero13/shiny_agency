import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/Header';
import Error from './components/Error/Error'
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './utils/context/Context';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 0;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle/>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/survey/:questionNumber" element={<Survey/>} />

            <Route path="/results" element={<Results/>}/>

            <Route path="/freelances" element={<Freelances/>}/>

            <Route path="*" element={ <Error/> }/>
          </Routes>
          <Footer/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)