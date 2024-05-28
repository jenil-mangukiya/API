
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Rickandmortyap from './Rickandmortyap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alldata from './Alldata';
import {Route,Routes} from 'react-router-dom'
import SingleData from './SingleData';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Alldata />} />
          <Route path="single-data/:id" element={<SingleData />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
