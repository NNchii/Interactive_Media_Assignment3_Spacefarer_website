import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (index) => {
    setActiveMarker(activeMarker === index ? null : index);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
      };
      stars.push(<div key={i} className="star" style={style}></div>);
    }
    return stars;
  };

  const imageCollageData = [
    { title: 'Space Launch', description: 'Launching into the unknown', className: 'collage-item-1' },
    { title: 'Mars Colony', description: 'Building a new home on Mars', className: 'collage-item-2' },
    { title: 'Space Window', description: 'A view from the spaceship', className: 'collage-item-3' },
    { title: 'Earthlike Colony', description: 'Discovering new Earthlike planets', className: 'collage-item-4' },
    { title: 'Spaceship Travel', description: 'Journey through the stars', className: 'collage-item-5' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const timelineSection = document.getElementById('mission-timeline');
      const collageSection = document.getElementById('photos');

      const triggerAnimation = (section, animationClass) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add(animationClass);
        } else {
          section.classList.remove(animationClass);
        }
      };

      if (aboutSection) triggerAnimation(aboutSection, 'slide-in-from-left');
      if (timelineSection) triggerAnimation(timelineSection, 'fade-in-from-bottom');
      if (collageSection) triggerAnimation(collageSection, 'slide-in-from-left');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <div className="astronaut-container"></div>
      <h1 className="title">Starfarer</h1>
      <p className="motto">To infinity and beyond</p>

      <div className="subsections">
        <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About Us</a>
        <a href="#mission-timeline" onClick={(e) => { e.preventDefault(); handleScroll('mission-timeline'); }}>Mission Timeline</a>
        <a href="#photos" onClick={(e) => { e.preventDefault(); handleScroll('photos'); }}>Photos</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact Us</a>
      </div>

      <div className="about-section" id="about">
        <div className="small-note">
          <span>About Us</span> <span className="arrow">→</span>
        </div>
        <div className="large-text">Our Mission</div>
        <h2 className="about-title">Exploring the Final Frontier</h2>
        <p className="about-description">
          Our mission is to extend the reaches of mankind and to further our frontier to the distant stars. We are dedicated to pushing the boundaries of space exploration, seeking out new worlds and new opportunities for humanity. Join us as we embark on this incredible journey to the stars.
        </p>
      </div>

      <div className="solar-system-container">
        <div className="solar-system">
          <div className="sun"></div>
          <div className="orbit" style={{ width: '300px', height: '300px', animationDuration: '150s' }}>
            <div className="planet mercury"></div>
          </div>
          <div className="orbit" style={{ width: '400px', height: '400px', animationDuration: '350s' }}>
            <div className="planet venus"></div>
          </div>
          <div className="orbit" style={{ width: '500px', height: '500px', animationDuration: '500s' }}>
            <div className="planet earth"></div>
          </div>
          <div className="orbit" style={{ width: '600px', height: '600px', animationDuration: '700s' }}>
            <div className="planet mars"></div>
          </div>
          <div className="orbit" style={{ width: '800px', height: '800px', animationDuration: '1200s' }}>
            <div className="planet jupiter"></div>
          </div>
          <div className="orbit" style={{ width: '1000px', height: '1000px', animationDuration: '2900s' }}>
            <div className="planet saturn"></div>
          </div>
          <div className="orbit" style={{ width: '1200px', height: '1200px', animationDuration: '4500s' }}>
            <div className="planet uranus"></div>
          </div>
          <div className="orbit" style={{ width: '1400px', height: '1400px', animationDuration: '9000s' }}>
            <div className="planet neptune"></div>
          </div>
        </div>
      </div>

      <div className="mission-timeline-section" id="mission-timeline">
        <div className="small-note-timeline">
          <span>Operation Timeline</span> <span className="arrow">→</span>
        </div>
        <div className="timeline-background">
          <div className="timeline-left">
            <div className="timeline-year">2024</div>
            <div className="timeline-progress">
              {[
                { year: 2024, label: "Initial Mission" },
                { year: 2025, label: "First Milestone" },
                { year: 2026, label: "Deep Space Travel" },
                { year: 2028, label: "Interstellar Discovery" },
                { year: 2030, label: "Distant Star Travel" },
                { year: 2032, label: "New Colony Established" },
                { year: 2033, label: "First Alien Contact" },
                { year: 2035, label: "Galactic Travel" },
              ].map((marker, index) => (
                <div key={index} className={`timeline-marker ${activeMarker === index ? 'active' : ''}`} onClick={() => handleMarkerClick(index)}>
                  {marker.year} - {marker.label}
                  <div className={`arrow ${activeMarker === index ? 'up' : 'down'}`}></div>
                  {activeMarker === index && (
                    <div className="marker-details">
                      <p>Details about {marker.label}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="timeline-year">2035</div>
          </div>
          <div className="timeline-right">
            <div className="info-circle zigzag" style={{ borderColor: '#062c43', boxShadow: '0 0 80px rgba(6, 44, 67, 0.8)' }}>
              <div className="info-content">
                <div className="info-number">8</div>
                <div className="info-label">Billion</div>
                <div className="info-text">Miles travelled</div>
              </div>
            </div>
            <div className="info-circle zigzag" style={{ borderColor: '#054569', boxShadow: '0 0 80px rgba(5, 69, 105, 0.8)' }}>
              <div className="info-content">
                <div className="info-number">716</div>
                <div className="info-label">Days</div>
                <div className="info-text">Earth days away</div>
              </div>
            </div>
            <div className="info-circle zigzag" style={{ borderColor: '#5591a9', boxShadow: '0 0 80px rgba(85, 145, 169, 0.8)' }}>
              <div className="info-content">
                <div className="info-number">29</div>
                <div className="info-label">Stars</div>
                <div className="info-text">Stars systems discovered</div>
              </div>
            </div>
            <div className="info-circle zigzag" style={{ borderColor: '#9ccddc', boxShadow: '0 0 80px rgba(156, 205, 220, 0.8)' }}>
              <div className="info-content">
                <div className="info-number">97</div>
                <div className="info-label">Crew</div>
                <div className="info-text">Crew sent on missions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-collage-section" id="photos">
        {imageCollageData.map((image, index) => (
          <div key={index} className={`collage-item ${image.className}`}>
            <div className="collage-info">
              <div className="collage-title">{image.title}</div>
              <div className="collage-description">{image.description}</div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer" id="contact">
        <div className="footer-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
        <div className="footer-info">
          <p>Founder: Lucien Zhang</p>
        </div>
        <div className="footer-contact">
          <p>Phone: +123 456 7890</p>
          <p>Email: lucien@example.com</p>
        </div>
      </footer>

      {generateStars(100)}
    </div>
  );
};

export default Homepage;