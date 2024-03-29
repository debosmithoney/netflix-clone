import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests';
import Banner from './Banner';
import './Banner.css';
import Nav from './Nav';
import './Nav.css';
import Footer from "./Footer";
import './Footer.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

     <Footer />
    </div>
    
  );
}

export default App