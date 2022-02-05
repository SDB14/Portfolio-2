import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Parallax} from 'react-parallax';
import coverImage from '../assets/Background.jpeg';
import './pages.css'

function About() {
  return (
    <>

        {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
        <Parallax bgImage={coverImage} strength={500}>
        <Header></Header>
            <div style={{height:650}}>
    <section className="my-5 textcenter">
      <h1 id="about">Sarita Thomas</h1>
     
      <div className="my-2">
        <p>
        Insightful project manager, experienced in analytics, strategic planning, process improvement, risk assessment and mitigation, policy and procedure development and implementation experience to increase the growth and productivity of the organization and recommend solutions that enable the organization to achieve its goals; working with internal and external customers to ensure the integrity of operations to further the success of the organization.

        </p>
      </div>
    </section>
    </div>
    <Footer></Footer>
    </Parallax>

    </>
  );
}

export default About;
