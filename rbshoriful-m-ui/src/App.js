import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import News from './component/News/News';
import Grids from './component/Grid/Grids';

function App() {
  const [articles, setArticle] = useState([]);

  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-06-01&sortBy=publishedAt&apiKey=505b7cfd1d504d17b2a9134d40d83770')
    .then(res => res.json())
    .then(data => setArticle(data.articles))
  }, [])
  return (
    <div>
      <Grids></Grids>
      {
        articles.map(article => <News article={article}></News>)
      }
      
    </div>
  );
}

export default App;
