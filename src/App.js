import React from 'react';
import { contactData,soLink } from './data';
import Form from './Form';
import './style/app.scss';

function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact">
          <h2>Contact Info</h2>
          <div className="info">
          {contactData.map((data) => (
            
              <div className="info-items" key={data.id}>
                <i className="icon"> {data.titleIcon} </i>
                <span className="title">{data.title}</span>
              </div>
            
          ))}
          </div>
          <div className="social-item">
          {soLink.map((data) => (
            
              <a key={data.id} href={data.link}><i className="social-icon">{data.icon}</i></a>
            
          ))}
          </div>
        </div>
        <div className="message">
          <Form/>
        </div>
      </div>
    </section>
  );
}

export default App;
