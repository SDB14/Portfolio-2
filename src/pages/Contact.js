import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Parallax} from 'react-parallax';
import coverImage from '../assets/Background.jpeg';
import './pages.css'

function Contact() {
  return (

    <div>
     <Parallax bgImage={coverImage} strength={500}>
        <Header></Header>
            <div style={{height:650}}>

    <section className="my-5 textcenter">
      <h1 id="about">Contact</h1>
     
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
    </div>
    <Footer></Footer>
    </Parallax>

    </div>
  );
}

export default Contact;