import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import {Parallax} from 'react-parallax';
import coverImage from '../assets/background.jpeg';
import './pages.css'

function Portfolio() {
  return (

    <div>
    <Parallax bgImage={coverImage} strength={500}>
        <Header></Header>
            <div style={{height:650}}>

    <section className="my-5 textcenter">
      <h1 id="about">Potfolio</h1>
     <Project></Project>
      <div className="my-2">
        <p>
          NoteTaker: https://shrouded-shore-50123.herokuapp.com/
          WorkDay Scheduler: https://sdb14.github.io/WorkDayScheduler/
          Password Generator: https://sdb14.github.io/Password-Generator/
          Regex: https://gist.github.com/SDB14/c21f0d2ba6582483f05e4ffea0663d69.js
          SafeTravels:  https://sdb14.github.io/safe-travels/
          BudgetBuddy: https://infinite-sea-98511.herokuapp.com/
          HomeBucket: 
        </p>
      </div>
    </section>
    </div>
    <Footer></Footer>
    </Parallax>

    </div>
  );
}

export default Portfolio;