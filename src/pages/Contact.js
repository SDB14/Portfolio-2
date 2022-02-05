import React from 'react';
import Header from '../components/Header';
import { Parallax } from 'react-parallax';
import coverImage from '../assets/background.jpeg';
import './pages.css'

function Contact() {
  return (

    <div>
      <Parallax bgImage={coverImage} strength={500}>
        <Header></Header>
       
          <div className="row contact-row">
            <div className="formDiv" id="contact">
              <h3 className="viewTitle" id="contactTitle">
                GET IN TOUCH
              </h3>
              <div className="row">
                <div className="row">
                  <div className="col-sm-12 text-center fluid">
                    <h5 className="email">thomassarita2008@hotmail.com</h5>
                  </div>

                  <div className="row">
                    <div className="col-sm" />
                    <div className="col-sm text-center">
                      <a href="https://www.github.com/SDB14" target="_blank"><i class="fab fa-github-square fa-3x" /></a>
                      <a href="https://www.linkedin.com/in/sarita-thomas-85628730?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8YTta2vmTiSSFOCpp%2Fn%2BRg%3D%3D" target="_blank"><i class="fab fa-linkedin fa-3x" /></a>
                    </div>
                    <div className="col-sm" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      
        </Parallax>
        
    </div>
  );
}

export default Contact;

