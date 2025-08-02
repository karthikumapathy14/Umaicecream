import React, { useState } from 'react';
import './Home.css';
import homeimage from '../Components/imagess/hd-12.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './imagess/Brown_Cute_Simple_Ice_Cream_Logo_20250624_200254_0000__1_-removebg-preview.png'
import img1 from './imagess/img1.png'
import pista from './imagess/pista.png'
import oreo from './imagess/oreo.jpeg'
import blackcurrant from './imagess/Blackcurrent.jpeg'
import mango from './imagess/mango.jpeg'
import orange from './imagess/Orange.png'
import vanilla from './imagess/vanilla.jpeg'
import butterscotch from './imagess/butter.jpg'
import rose from './imagess/rose.jpeg'
import chocolate from './imagess/choco.jpeg'
import strawberry from './imagess/stabwerry.jpg'
import casattacake from './imagess/Casattacake.jpeg'
import kulfi from './imagess/kulfi.jpeg'
import single from './imagess/SingleFlavor.jpg'
import Double from './imagess/DoubleFlavor.jpg'
import matka  from './imagess/matkakulfi.jpeg'
import stickice from './imagess/stickIce.jpg'
import Freshorange from './imagess/FreshOrange.png'
import Casatta from './imagess/Casatta.jpeg'
import abukatta from './imagess/abukattaRoll.jpg'
import familypack from './imagess/familypack.jpg'


// Import your ice cream images or use placeholder URLs
const iceCreamImages = {
  vanilla: 'https://source.unsplash.com/random/300x300/?vanilla-ice-cream',
  chocolate: 'https://source.unsplash.com/random/300x300/?chocolate-ice-cream',
  strawberry: 'https://source.unsplash.com/random/300x300/?strawberry-ice-cream',
  pista: 'https://source.unsplash.com/random/300x300/?pistachio-ice-cream',
  mango: 'https://source.unsplash.com/random/300x300/?mango-ice-cream',
  blackcurrant: 'https://source.unsplash.com/random/300x300/?blackcurrant-ice-cream',
  rose: 'https://source.unsplash.com/random/300x300/?rose-ice-cream',
  butterscotch: 'https://source.unsplash.com/random/300x300/?butterscotch-ice-cream',
  coconut: 'https://source.unsplash.com/random/300x300/?coconut-ice-cream',
  kesar: 'https://source.unsplash.com/random/300x300/?kesar-pista-ice-cream',
  coffee: 'https://source.unsplash.com/random/300x300/?coffee-ice-cream',
  anjeer: 'https://source.unsplash.com/random/300x300/?fig-ice-cream',
  cassata: 'https://source.unsplash.com/random/300x300/?cassata-ice-cream',
  kulfi: 'https://source.unsplash.com/random/300x300/?kulfi',
  fruitRoll: 'https://source.unsplash.com/random/300x300/?fruit-ice-cream-roll',
  sandwich: 'https://source.unsplash.com/random/300x300/?ice-cream-sandwich',
  stick: 'https://source.unsplash.com/random/300x300/?ice-cream-stick',
  familyPack: 'https://source.unsplash.com/random/300x300/?family-ice-cream'
};


function Home() {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="uma-ice-container">
      {/* Mobile Navigation Toggle */}
      <div className="mobile-nav-toggle">
        <span className="ice-icon"><img src={logo} style={{ height: "50px", width: "60px" }} /></span>
        <h3 style={{textAlign:"center"}}>UMA ICE CANTEEN</h3>
        <button className="menu-btn">☰</button>
      </div>

      {/* Navigation Bar */}
      <nav className="uma-navbar">
        <div className="navbar-brand">
          <span className="ice-icon"><img src={logo} style={{ height: "50px", width: "60px" }} /></span>
          <h1 >UMA ICE CANTEEN</h1>
          <p className="since-text">Since 1985</p>
        </div>
        <ul className="nav-links">
          {['home', 'flavors', 'specialties', 'reviews', 'contact'].map((item) => (
            <li
              key={item}
              className={activeNav === item ? 'active' : ''}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section with Bootstrap */}
      <section
        id="home"
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), url(${homeimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '85vh'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="hero-title display-3 fw-bold mb-3 animate-pop text-white">
                Experience the Taste of Tradition
              </h2>
              <p className='subtitle'>Perfect for marriage events, family functions, and all your celebrations — our ice creams bring smiles, memories, and a touch of sweetness to every gathering.</p>
              <p className="hero-subtitle fs-4 mb-4 animate-slide-up text-warning">
                50+ flavors crafted with love since 1985
              </p>
              <div className="cta-buttons animate-bounce">

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flavors Section */}
      <section id="flavors" className="flavors-section">
        <h2 className="section-title animate-pop">Our Signature Flavors</h2>

        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={4}      // You can change this number as per screen size
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
        >
          {[
            { name: 'Vanilla', image: vanilla },
            { name: 'Chocolate', image: chocolate },
             { name: 'Orange', image: orange },
            { name: 'Strawberry', image: strawberry },
            { name: 'Oreo', image: oreo },
            
            { name: 'Blackcurrent', image: blackcurrant },
            { name: 'Mango', image: mango },
             { name: 'Rose Gulkand', image: rose },
            { name: 'Butterscotch', image: butterscotch },
           
            { name: 'Kesar Pista', image: pista },


          ].map((flavor, index) => (
            <div key={index} className="flavor-card text-center px-2">
              <div
                className="flavor-image"
                style={{
                  backgroundImage: `url(${flavor.image})`,
                  height: '300px',
                  backgroundSize: 'cover',
                  borderRadius: '20px',
                  marginBottom: '10px'
                }}
              ></div>
              <h3>{flavor.name}</h3>
            </div>
          ))}
        </Slider>
      </section>


      {/* Specialties Section */}
      <section id="specialties" className="specialties-section">
        <h2 className="section-title animate-pop">Our Special Creations</h2>
        <div className="specialties-container">
          {
           [
  { name: 'Cassata Cake Ice Cream', image: casattacake, desc: 'A rich layered ice cream dessert with cake, nuts, and fruits' },
  { name: 'Matka Kulfi', image: matka, desc: 'Authentic Indian kulfi served in a traditional clay pot' },
  { name: 'Fresh Orange Ice Cream', image: Freshorange, desc: 'Zesty and refreshing ice cream made with real orange pulp' },
  { name: 'Abukatta Roll', image: abukatta, desc: 'Unique rolled ice cream sandwiched between crunchy wafers' },
  { name: 'Stick Ice', image: stickice, desc: 'Colorful and fruity ice pops perfect for beating the heat' },
  { name: 'Family Pack', image: familypack, desc: 'Generous 1-liter tub ideal for family gatherings and celebrations' },
  { name: 'Single Flavor Ice Ball', image: single, desc: 'Classic round ice cream with a single delicious flavor' },
  { name: 'Kulfi', image: kulfi, desc: 'Creamy and dense Indian-style frozen dessert with traditional flavors' },
  { name: 'Double Flavor Ice Ball', image: Double, desc: 'Delightful combination of two ice cream flavors in one ball' },
  { name: 'Cassata', image: Casatta, desc: 'Multi-layered ice cream dessert with fruits and nuts in every bite' }
]

          .map((item, index) => (
            <div
              key={index}
              className="specialty-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div         
                className="specialty-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="specialty-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="reviews" className="testimonial-section">
        <h2 className="section-title animate-pop">Review</h2>
        <div className="testimonial-row">
          {[
            {
              name: 'Priya K',
              message: 'The Family Pack 🍨 was perfect for sharing—generous quantity, multiple flavors, and smiles all around!',
               Rating:'⭐️⭐️⭐️⭐️ (4.5/5)'
            },
            {
              name: 'Karthik U',
              message: 'The Chocolate Overload was rich,🍦 creamy, and the best treat of the event!',
              Rating:'⭐️⭐️⭐️⭐️⭐️ (5/5)'
            },
            {
              name: 'Theivanai D',
              message: 'The Cassata was a perfect blend of fruity, nutty, and creamy layers—absolutely nostalgic and delightful!',
               Rating:'⭐️⭐️⭐️⭐️⭐️ (5/5)'
            }
          ].map((item, index) => (
            <div key={index} className="testimonial-card">
               <h3 className="testimonial-name">{item.name}</h3>
                 <h3 className="testimonial-name">{item.Rating}</h3>

              <p className="testimonial-msg">"{item.message}"</p>
             
            

            </div>
          ))}
        </div>
      </section>





      {/* Footer */}
      <footer className="uma-footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p><strong>Venkatesan:</strong> <a href="tel:9442673545">94426 73545</a></p>
            <p><strong>Pradeep:</strong> <a href="tel:8015353552">80153 53552</a></p>
            <p><strong>Address:</strong> Masilamani Nagar,Arcot</p>
            <p><strong>Hours:</strong> 10AM - 10PM (Daily)</p>
          </div>

          <div className="tamil-note">
            <h3>திருமணம் & சுப நிகழ்ச்சிகள்</h3>
            <p>குறைந்த விலையில் சிறப்பான சேவை</p>
          </div>
          <div className="tamil-note">
  <h3>Weddings & Special Events</h3>
  <p>Excellent service at an affordable price</p>
</div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" /></a>
          </div>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} UMA ICE CREAM COMPANY. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;