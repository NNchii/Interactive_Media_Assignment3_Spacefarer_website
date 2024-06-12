import React, { useState } from 'react';
import useSmoothScroll from '../components/SmoothScroll'; 
import '../styles/Homepage.css';
import Footer from '../components/Footer';

const Homepage = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleScroll = useSmoothScroll(); // Hook to handle smooth scrolling to sections.

  const handleMarkerClick = (index) => { // This function marks the subsections on the homepage so that when the user clicks the subsection navlinks it scrolls down to that section directly.
    setActiveMarker(activeMarker === index ? null : index);
  };
  // Function to generate star elements for the background of the homepage.
  const generateStars = (numStars) => 
    { 
    const stars = []; // Initialising an empty array to hold the star elements.

    for (let i = 0; i < numStars; i++) // Looping to create the specified number of stars.
      {
      const style = {
        left: `${Math.random() * 100}%`, // Randomise the horizontal position within the container.
        top: `${Math.random() * 100}%`, // Randomise the vertical position within the container.
        animationDelay: `${Math.random() * 2}s`, // Random delay for any animations.
        width: `${Math.random() * 2 + 1}px`, // Randomise the width between 1px and 3px.
        height: `${Math.random() * 2 + 1}px`, // Randomise the height to match the width for a consistent shape.
      };

      // Create a star div with the calculated style and add it to the stars array.
      stars.push(<div key={i} className="star" style={style}></div>);
    }

    return stars; // Return the array of star divs to be rendered.
  };
  //The image collage data that handles the title, description and the class name for the image collage section of the homepage ensuring the correct image is placed at the correct location to match the description.
  const imageCollageData = 
  [
    { title: 'Space Launch', description: 'Launching into the unknown', className: 'collage-item-1' },
    { title: 'Mars Colony', description: 'Building a new home on Mars', className: 'collage-item-2' },
    { title: 'Space Window', description: 'A view from the spaceship', className: 'collage-item-3' },
    { title: 'Earthlike Colony', description: 'Discovering new Earthlike planets', className: 'collage-item-4' },
    { title: 'Spaceship Travel', description: 'Journey through the stars', className: 'collage-item-5' },
  ];

  return (
    <main className="homepage">
      <div className="astronaut-container"></div> {/*This is for the animated astronaut floating behind the main title and motto, I added this to have it paired with the animated solar system which further fleshed out the theme of my website.*/}
      <h1 className="title">Starfarer</h1> {/*Here is the title of my homepage.*/}
      <p className="motto">To infinity and beyond</p> {/*The motto that goes under the title text.*/}

        {/*The subsection navigation I've added to make navigating my homepage easier as the viewer can go directly to whichever section they'd like by clicking these nav links.*/}
        <nav className="subsections">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About Us</a>
            <a href="#mission-timeline" onClick={(e) => { e.preventDefault(); handleScroll('mission-timeline'); }}>Mission Timeline</a> 
            <a href="#photos" onClick={(e) => { e.preventDefault(); handleScroll('photos'); }}>Photos</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact Us</a>
        </nav>
      {/*The about section provides the viewer with an understanding to what this website is about, in this case a fictional space mission explained in this section under "Our Mission".*/}
      <section className="about-section" id="about">
        {/*I included a small note with an arrow to indicate the section of the page, I did this because the "Our Mission" message is the focus of this section, but I also wanted to clearly indicate which part of the page the viewer is looking at.*/}
        <article className="small-note">
          <span>About Us</span> <span className="arrow">→</span> {/*Small arrow I included to just provide a visual to the small note.*/}
        </article>
        {/*The main section of 'About Us', I've made the title blend into the background with the main text standing out against it to give the viewer a clear view of the mission message while still making it clear that this is our mission.*/}
        <section className="large-text">Our Mission</section>
        <h2 className="about-title">Exploring the Final Frontier</h2>
        <p className="about-description"> {/*Title and slogan I've made up to fit and flesh out the fictional theme of the website.*/}
          Our mission is to extend the reaches of mankind and to further our frontier to the distant stars. We are dedicated to pushing the boundaries of space exploration, seeking out new worlds and new opportunities for humanity. Join us as we embark on this incredible journey to the stars.
        </p>
      </section>
      {/*I've placed the solar system towards the bottom right section of the intial homepage screen as it gave a good view of the animated system, but left space for both the titles and the animated astronaut.*/}
      <section className="solar-system-container"> 
        {/*The solar system I've made for the upper section of my homepage background which contains a minimalist animated version of our solar system that would rotate in the background, I decided to make this as it fits the overall space theme of the website well and provide the viewer a nice animation to look at if they were to idle on the site.*/}
        <figure className="solar-system">
          <section className="sun"></section>
          {/*Each planet can be adjusted whether size or the animation speed.*/}
          <div className="orbit" style={{ width: '300px', height: '300px', animationDuration: '150s' }}> {/*Mercury Orbit.*/}
            <div className="planet mercury"></div>
          </div>
          <section className="orbit" style={{ width: '400px', height: '400px', animationDuration: '350s' }}> {/*Venus Orbit.*/}
            <div className="planet venus"></div>
          </section>
          <div className="orbit" style={{ width: '500px', height: '500px', animationDuration: '500s' }}> {/*Earth Orbit.*/}
            <div className="planet earth"></div>
          </div>
          <div className="orbit" style={{ width: '600px', height: '600px', animationDuration: '700s' }}> {/*Mars Orbit.*/}
            <div className="planet mars"></div>
          </div>
          <div className="orbit" style={{ width: '800px', height: '800px', animationDuration: '1200s' }}> {/*Jupiter Orbit.*/}
            <div className="planet jupiter"></div>
          </div>
          <div className="orbit" style={{ width: '1000px', height: '1000px', animationDuration: '2900s' }}> {/*Saturn Orbit.*/}
            <div className="planet saturn"></div>
          </div>
          <div className="orbit" style={{ width: '1200px', height: '1200px', animationDuration: '4500s' }}> {/*Uranus Orbit.*/}
            <div className="planet uranus"></div>
          </div>
          <div className="orbit" style={{ width: '1400px', height: '1400px', animationDuration: '9000s' }}> {/*Neptune Orbit.*/}
            <div className="planet neptune"></div>
          </div>
          {/*Each of the planets follow their own orbit lines and their speed it set to mimic a scaled down version of the actual solar system.*/}
          {/*Each planets also mirrors their real counterparts colours, yet still sticking to the minimalist aesthetics with a simple colour gradient and slight glow to each planets so the viewer can easily tell which planet it which.*/}
        </figure>
      </section>

      <section className="mission-timeline-section" id="mission-timeline"> {/*This is the mission timeline section where a mission timeline is included on the right side and some info circles on the left to display information regarding the space mission.*/}
        <header className="small-note-timeline">{/*The same small section note as the about us, just for the viewer to see which part of the page they are on and to clearly seperate from the previous section.*/}
          <span>Operation Timeline</span> <span className="arrow">→</span>
        </header>
        <div className="timeline-background"> {/*The timeline section has its own background, I did this to indicate a clear seperation of the different page sections for ease of navigation.*/}
          <aside className="timeline-left"> {/*The timeline left section contains the timeline progress from 2040 to 2090 to create lore for this space mission the viewer can read through.*/}
            <h3 className="timeline-year">2024</h3>
            <section className="timeline-progress"> {/*Information of the timeline can be edited here, the timeline includes year, title and description.*/}
              {/*I've designed the timelines being drop downs where it initially only displays the title of each event, but the user can click on them for a drop down which then shows more detailed information regarding each.*/}
              {[
                { year: 2024, label: "Initial Mission", details: "Beginning of the Starfarer program to revolutionise space exploration." },
                { year: 2028, label: "First Milestone", details: "Funding from all over the globe and the unification of the global space programs under Starfarer and the colonisation of Mars." },
                { year: 2035, label: "Deep Space Travel", details: "First man made space vassel to reach the deep space with experimental technology." },
                { year: 2040, label: "Interstellar Discovery", details: "Deep space allowed us to gain new insights into dark matter studies and the makeups of our universe." },
                { year: 2045, label: "Distant Star Travel", details: "Our first colonisation vessal reached our closest neighbour, Alpha Centauri." },
                { year: 2050, label: "New Colony Established", details: "The first human colony was established in a different star system, marking a great leap in mankind's expansion." },
                { year: 2077, label: "First Alien Contact", details: "For the first time, mankind has discovered lifeforms on the distant stars, even though they aren't carbon based lifeforms, this marked the first time we answered the age old question, we are not alone in the universe." },
                { year: 2085, label: "Galactic Travel", details: "The experimental warp drive finally became a reality, mankind has finally gained the ability to travel incredible distance across our galaxy." },
              //Mapping through each marker in the timeline data to create individual timeline entries
              ].map((marker, index) => 
                (// Each marker is wrapped in a div with a unique key for React's rendering efficiency
                  // The class 'active' is applied conditionally based on whether the marker is the one currently selected
                <div key={index} className={`timeline-marker ${activeMarker === index ? 'active' : ''}`} onClick={() => handleMarkerClick(index)}> 
                  {marker.year} - {marker.label} {/*Displays the year and label of the marker.*/}
                  <div className={`arrow ${activeMarker === index ? 'up' : 'down'}`}></div> {/*Conditionally render the marker details if the current marker is active.*/}
                  {activeMarker === index && (
                    <div className="marker-details"> {/*Details about the marker such as description and notes.*/}
                      <p>{marker.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>
            <h3 className="timeline-year">2090</h3>
          </aside>
          <div className="timeline-right"> {/*Here is the right side section of the mission timeline where info circles are displayed to show generalised information regarding the mission such as days away, stars discovered etc.*/}
              <article className="info-circle zigzag"> {/*The info circles are placed in an alternating pattern from left to right.*/}
                <figure>
                  <figcaption className="info-content">
                    <strong className="info-number">8</strong>
                    <span className="info-label">Billion</span>
                    <p className="info-text">Miles travelled</p>
                  </figcaption>
                </figure>
              </article>
              <article className="info-circle zigzag">
                <figure>
                  <figcaption className="info-content">
                    <strong className="info-number">716</strong>
                    <span className="info-label">Days</span>
                    <p className="info-text">Earth days away</p>
                  </figcaption>
                </figure>
              </article>
              <article className="info-circle zigzag">
                <figure>
                  <figcaption className="info-content">
                    <strong className="info-number">29</strong>
                    <span className="info-label">Stars</span>
                    <p className="info-text">Star systems discovered</p>
                  </figcaption>
                </figure>
              </article>
              <article className="info-circle zigzag">
                <figure>
                  <figcaption className="info-content">
                    <strong className="info-number">97</strong>
                    <span className="info-label">Crew</span>
                    <p className="info-text">Crew sent on missions</p>
                  </figcaption>
                </figure>
              </article>
            </div>
        </div>
      </section>

      <section className="image-collage-section" id="photos"> {/*The image collage section allows me to display images that helps to flesh out this fictional mission's lore*/}
        {imageCollageData.map((image, index) => (
          <div key={index} className={`collage-item ${image.className}`}>
            <div className="collage-info"> {/*The image collage allows the user to hover over the image to make a title and description of the image to appear.*/}
              <div className="collage-title">{image.title}</div> {/*Contains the title of the image when the image is hovered over.*/}
              <div className="collage-description">{image.description}</div> {/*Contains the description of the image that fades in when hovered over.*/}
            </div>
          </div>
        ))}
      </section>
      {generateStars(100)}
        <Footer />
    </main>
  );
};

export default Homepage;
