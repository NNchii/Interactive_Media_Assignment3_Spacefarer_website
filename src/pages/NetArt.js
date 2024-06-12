import React, { useEffect, useRef } from 'react';
import '../styles/NetArt.css';

//Defining the net art element on the net art page.
const NetArt = () => {
  // Using useRef to keep track of the container div
  const spaceRef = useRef(null);

  //This useEffect handles the placement of the dots and lines and updates their new positions when the user clicks on a dot and everything randomises to visualise the vastness of the galaxy.
  useEffect(() => {
    //Getting the reference to the space where the dots and lines are rendered.
    const space = spaceRef.current;
    const numDots = 100; //This defines the total number of dots present on screen.
    let dots = []; // Array for the dots.
    let lines = []; // Array for the lines.

    //This function shuffles the dots randomly across the x and y axis when a dot is clicked on.
    const shuffleDots = () => 
      {
      dots.forEach(dot => 
        {
        const wrapper = dot.parentElement;
        wrapper.style.left = `${Math.random() * 200}vw`; //For randomised placement on the x axis of the page.
        wrapper.style.top = `${Math.random() * 200}vh`; //For randomised placement of the dots on the y axis.
      });
      
      updateLines(); //Update the lines to fit the new position of the shuffled dots after each click.
    };

    //For creating the dots and placing them randomly across the canvas of the webpage to represent an abstract star map.
    for (let i = 0; i < numDots; i++) {
      const wrapper = document.createElement('div');

      wrapper.classList.add('dot-wrapper');
      wrapper.style.left = `${Math.random() * 200}vw`; //Randomised X axis placement.
      wrapper.style.top = `${Math.random() * 200}vh`; //Randomised Y axis placement.
      wrapper.addEventListener('click', shuffleDots); //When the viewer clicks on a dot, the dots reshuffles to take up new random positions.

      const dot = document.createElement('div');
      dot.classList.add('star-system-rep');
      wrapper.appendChild(dot);

      space.appendChild(wrapper);
      dots.push(dot);
    }

    //Creating the lines that interconnects the dots on the screen to form a star map network.
    for (let i = 0; i < numDots; i++) 
      {
      for (let j = i + 1; j < i + 4 && j < numDots; j++) { //Here controls how map lines would connect with each dots.
        const line = document.createElement('div');
        line.classList.add('line');
        space.appendChild(line);
        lines.push({ line, dot1: dots[i], dot2: dots[j] });
      }
    }

    //This function updates the line positions based on the position of the newly randomised dots.
    const updateLines = () => 
      {
      lines.forEach(({ line, dot1, dot2 }) => {
        const wrapper1 = dot1.parentElement;
        const wrapper2 = dot2.parentElement;

        const x1 = wrapper1.offsetLeft + wrapper1.offsetWidth / 2;
        const y1 = wrapper1.offsetTop + wrapper1.offsetHeight / 2;
        const x2 = wrapper2.offsetLeft + wrapper2.offsetWidth / 2;
        const y2 = wrapper2.offsetTop + wrapper2.offsetHeight / 2;

        const length = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        line.style.width = `${length}px`;
        line.style.transform = `translate(${x1}px, ${y1}px) rotate(${angle}deg)`;
      });
    };

    updateLines(); //The first update called for updating the line positions upon page loadup.

    return () => 
      {
      //Event listener and element cleanups for better optimisation of the webpage.
      dots.forEach(dot => dot.parentElement.removeEventListener('click', shuffleDots));
      dots.forEach(dot => space.removeChild(dot.parentElement));
      lines.forEach(({ line }) => space.removeChild(line));
    };
  }, []);

  //To render the space the net art takes place in.
  return <div id="netart-spacebackground" ref={spaceRef}></div>;
};

export default NetArt;
