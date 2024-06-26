import React from 'react';
import '../styles/Design.css';
import Footer from '../components/Footer';

const Design = () => {
  return (
    //The design page with the design document, blogs and wireframes.
    <main className="design-page">
      <header className="design-header">
        <h1>Design Journal</h1>
        <p>Documenting the creative process and design evolution.</p>
      </header>
      <section className="design-journal">
        <article className="design-entry">
          <section className="entry-content"> 
            <h2>My Goal:</h2>
            <p>I aim to design a website themed around a fictional space travel mission set in the distant future. The goal is to create an aesthetically pleasing and immersive experience that presents viewers with relevant information about the mission. The website should captivate visitors and catch their attention, ultimately drawing in more recruits for the mission. The design will focus on a futuristic and engaging aesthetic, ensuring that the content is both informative and visually appealing. By combining thematic elements with a user-friendly interface, the website will effectively convey the mission's goals and attract a dedicated audience.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>My User:</h2>
            <p>I aim to draw in individuals who have a keen interest in space exploration and the mysteries of the universe. This website targets potential recruits eager to join the mission of exploring the stars and those interested in witnessing the documentary of mankind's expansion into the unknown. By appealing to this audience, I hope to foster a community of like-minded individuals who share a passion for space and the ambition to push the boundaries of human knowledge and exploration. The website will serve as a platform to inspire and inform, attracting visitors who are either potential recruits for the mission or enthusiasts eager to follow humanity's journey into the cosmos.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>My Content:</h2>
            <p>I aim to display a fictional space exploration mission through a detailed timeline and captivating images, creating an imagined scenario of a fascinating future for mankind. The website will also document my design progress, showcasing the development and creative process behind the site. Additionally, it will feature my theory essay on net art, providing an academic perspective on this digital medium. Finally, the site will include my own net art project, offering visitors a unique and interactive experience. Through this diverse range of content, the website will present an engaging narrative that highlights both the imagined future of space exploration and my personal growth as a digital artist and designer.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Information Structure:</h2>
            <p>My website boasts a well-structured and organised information layout that ensures effortless navigation for users to locate desired content. The homepage features a prominent header accompanied by a subnavigation menu that allows for a swift access to various sections of the homepage. In the main portion of the homepage, a concise introduction to the site and its fictional space exploration mission is provided along with visually captivating elements to engage visitors. The website is divided into several primary pages being Home, Design, Theory, and Net-Art, each having its own dedicated page and the navbar underlines whichever page the user is on for the ease of navigation. Within these sections the content is organised by subsections be it the design document, wireframe, dev blogs or the theory essay and net art planning, each clearly marked by a large heading with the body being a different font for better readability.</p>
            <p>The "Design" page includes sections of the design journal and a collage of wireframes that can be hovered over to reveal details. The "Theory" page presents the theory essay on net art with a semi-transparent black background and the planning and rationale for my netart and my net art page that features an interactive artwork that encompasses the entire page, where the user can use the vertical and horizontal scroll to explore the full artwork. The website's design embraces a futuristic theme and utilises a consistent colour scheme and typography, resulting in a cohesive and visually engaging user experience. Overall, the website's information architecture effectively showcases the fictional space exploration mission and capturing the user's attention with information regarding the mission.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>User Flow:</h2>
            <p>The user flow of the website begins with the homepage, where users are greeted with a captivating Title and a brief introduction to the fictional space exploration mission. From there, they can navigate to the various sections of the website, including the Design Journal, Theory, and Net-Art pages. The navigation bar is conveniently located at the top of the page making it easy for users to access different sections, the current page is always underlined to show the user where they are. The navigation links for the subsections of the homepage are designed to scroll smoothly to the respective sections on the homepage such as "About Us," "Mission Timeline," "Photos," and "Contact Us," each with its own dedicated area. The "About Us" section provides an overview of the mission, while the "Mission Timeline" details the journey and milestones of the space exploration mission with interactive elements. The "Photos" section features a collage of images that darken and reveal titles and descriptions on hover thus creating an engaging visual experience.</p>
            <p>In the "Design" page, users can explore the design journal entries presented in sections with a space between each to providing a detailed account of the design process. Below the design journal entries, a wireframe collage is displayed, allowing users to hover over each image to see more details. The "Theory" page presents the theory essay on net art with a semi-transparent black background and a starry space background sticking to the space theme, enhancing the aesthetic appeal. The website's design ensures that users can easily navigate through the content. The consistent colour scheme and typography provide a cohesive and visually engaging user experience, making it easy for users to access and engage with the content.</p>
            <p>Overall, the website is designed to be user-friendly, with clear navigation paths and interactive elements that guide users through the fictional space exploration mission, the design process, theoretical insights, and interactive net art.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Visual Design Elements:</h2>
            <h3>Futuristic Space Theme:</h3>
            <p>My website employs a futuristic space theme with a sleek and engaging design. The layout for the homepage allows for the user to gain an understanding of what the mission is about while showing them simple and relevant information that is easy to understand while also capturing their attention. The animated solar system provides a nice visual element that slowly rotates in the background which the viewer can watch while idling and the title and motto texts being large and overlaid on top immediately captures the viewer's attention.</p>
            <p>The navbar remains on the screen for ease of access to other pages, the current page being underlined to show the user where they are while the navbar being transparent with only the text visible allows it to not be a distraction when the user scrolls through the page. The theory and design page offers a simple and structured design for the users to read through, the large bold text clearly marking each section and the two different fonts allows for clear readability.</p>

            <h3>Readability and Legibility:</h3>
            <p>The two fonts used being Orbitron and Titillium Web allows for a clear readability and Legibility, the large and more angular Orbitron clearly marks each section of the pages while the smaller Titillium Web makes it easy to read through my design document as theory without any issues, the increased line space further improved the readability as the texts are no longer crammed together.</p>
          
            <h3>Colours:</h3>
            <p>The website uses a consistent color palette that enhances the futuristic space theme. The primary colors are:</p>
            <p>#062c43 (dark blue)</p>
            <p>#054569 (medium blue)</p>
            <p>#5591a9 (light blue)</p>
            <p>#9ccddc (lighter blue)</p>
            <p>#ced7e0 (lightest blue)</p>
            <p>These colors are used to create a cohesive and visually appealing design, with a slight gradient shift in the background to add subtle texture.</p>

            <h3>Shadow and Glow Effects:</h3>
            <p>Shadow and glow effects are used to create depth and visual interest. Headings and titles feature shadow effects that highlight the text, making it stand out against the dark background. The navigation bar and various elements have glow effects to enhance the futuristic theme and provide a sense of immersion.</p>

            <h3>Typography:</h3>
            <p>My website uses two different font, Orbitron and Titillium Web. Headings are in larger font sizes to draw attention and the Orbitron font matches the sci-fi aesthetic with a more rigid and angular design, while body text is smaller and uses Titillium Web being smaller and easier to read, but still having a slight rigidness to it to match the aesthetic and increased line space for improved readability.</p>

            <h3>Alignment:</h3>
            <p>Consistent alignment is used throughout the website to maintain a sense of order and balance. Elements are aligned to a grid and centered within their respective containers. Navigation links and sections follow this alignment, ensuring a clean and organized layout.</p>

            <h3>Interactive Elements:</h3>
            <p>Interactive elements, such as hover effects and animations, are incorporated to enhance user engagement. The navigation bar, mission timeline, and image collage feature animations that make the website feel dynamic and responsive. These elements contribute to an interactive and enjoyable user experience.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Dev Blog week 3:</h2>
            <p>Coming back after the holidays I am definitely struggling slightly getting back into working with Javascript as I never really had a solid grasp of it by the end of last year, however I am excited into working more with it with react this year as both a new concept as well as expand my knowledge on JS more as it is still one of the newer languages to me. My impression on net/web art is definitely one of confusion which did not alleviate after looking through some examples of it. My main question is what exactly constitutes net/web art as the examples are very diverse from the way they are presented to how the viewer can interact with them. However the confusion only raises my interest in net/web art as I’d like to understand more about them and how they are created as I have seen what I’d think counts as net/web arts in the past and their unconventional ways to create and deliver an idea/message have always captivated the younger me.</p>
            <p>Net/web art often uses the internet as its primary medium which allows for interactive and dynamic experiences. This can include everything from web-based installations to virtual reality experiences as the internet makes it possible for artists to reach a global audience and create shared experiences for viewers everywhere. Another cool thing about net/web art is how it turns viewers into active participants instead of just looking at the art, people can interact with it thus making them a part of the piece which adds a whole new layer to the experience.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Dev Blog week 4:</h2>
            <p>Working with react is familiar yet also foreign to me, it took a little bit for me to build the testing-app and learning how to work with it and understanding the structure of react. Outside of coding, my research into net art only made me even more confused than before.Looking through several examples I find myself not understanding their messages and often even not understanding how to interact with the net art at all. I find myself looking at the titles of the artworks that would catch my attention, but the moment I open them, I find myself lost at what I’m supposed to be looking at or even how to use it exactly.</p>
            <p>One of them caught my interest being “My Boyfriend Came Back From The War'' (MBCBFTW) by the Russian artist Olia Lialina in 1996. I can somewhat understand the message the artwork is trying to convey through its distorted or even uncanny display of images and texts which often reminds me of uncanny videos I have seen on youtube before. The theme of trauma after war is also another interest of mine which is also especially relevant with the current events. </p>
            <p>Overall, delving into net art has been a journey of discovery as I had never imagined some of the net arts I have seen could be possible, MBCDFTW gave a unique aesthetic that had captured my interest and I’d like to look into it further to learn more about it and fully understand its unique way of storytelling using only html, especially being at the infancy of the internet.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Dev Blog week 12:</h2>
            <p>Unfortunately I have been stressed and overwhelmed with assignments for other courses lately which has made me fall significantly behind on my website development and I’m still struggling somewhat with JS and using React to create a full website. I am also unsure if I’d like to stick with my current website theme and design as I’m finding trouble making a website that can capture the envisioned feeling I wanted for a space/space exploration website, but different enough from the NASA website we had made last year. However I’m unsure what I could change it to or if I have enough time to revamp my current design. For my planning for my net art, progress has been slow as well. The concept I have in mind is to create a space exploration net art where the viewer could explore the infinite stars among the cosmos. I envision an interactive experience that allows users to navigate through different star systems, each with its own unique story or message. This idea aligns well with my current space theme and has the potential to be visually stunning and engaging.</p>
            <p>However, I'm unsure how to go about executing this idea as I still struggle with working with JavaScript. The technical challenges of creating an interactive and immersive net art piece are significant, and my confidence in my coding skills is not where it needs to be. Despite these hurdles, I'm determined to push through and find a way to bring my vision to life. Perhaps with some more research and practice, I can develop the skills needed to create an impactful and memorable piece of net art.</p>
          </section>
        </article>
        <article className="design-entry">
          <section className="entry-content">
            <h2>Image References:</h2>
            <p>Behance.net. (2023). Behance. [online] Available at: https://www.behance.net/gallery/3304614/Scifi-Artwork [Accessed 12 Jun. 2024].</p>
            <p>Freepik. (2021). Free Photo | Galaxy night landscape. [online] Available at: https://www.freepik.com/free-photo/galaxy-night-landscape_13140050.htm#query=4k%20space%20stars&position=40&from_view=keyword&track=ais_user&uuid=442bb905-2dd0-4ad8-a6bc-eaed1067fc9c [Accessed 12 Jun. 2024].</p>
            <p>Peakpx.com. (2024). 2400x1350px, 1080P free download | Sci Fi, Spaceship, HD wallpaper | Peakpx. [online] Available at: https://www.peakpx.com/en/hd-wallpaper-desktop-vipnf/download/2400x1350 [Accessed 12 Jun. 2024].</p>
            <p>Peakpx.com. (2024). 2400x1350px, 1080P free download | Sci Fi, Space Station, HD wallpaper | Peakpx. [online] Available at: https://www.peakpx.com/en/hd-wallpaper-desktop-gtrpc/download/2400x1350 [Accessed 12 Jun. 2024].</p>
            <p>Thatjump.com. (2023). Blast Off to Marketing Success with the Power of Language. [online] Available at: https://thatjump.com/posts/wip [Accessed 12 Jun. 2024].</p>
            <p>Wallpaperflare.com. (2024). 2400x1350px | free download | HD wallpaper: Station, Planet, Space, View, The window, Surface, Art, Spaceship | Wallpaper Flare. [online] Available at: https://www.wallpaperflare.com/station-planet-space-view-the-window-surface-art-spaceship-wallpaper-gorjj/download/2400x1350 [Accessed 12 Jun. 2024].</p>
            <p>Wallpaperflare.com. (2020). HD wallpaper: Mars Colony, Space X, HD, Mars Base, metal, large group of objects | Wallpaper Flare. [online] Available at: https://www.wallpaperflare.com/mars-colony-space-x-hd-mars-base-metal-large-group-of-objects-wallpaper-rrmb [Accessed 12 Jun. 2024].</p>
          </section>
        </article>
      </section>
      <section className="wireframe-collage">
        <h2>Wireframes</h2>
        <section className="collage">
          <article className="collage-item collage-item-1">
            <div className="collage-info">
              <div className="collage-title">Homepage Title Wireframe</div>
              <div className="collage-description">This is the title section of the homepage where the user can access the nav bar, see the title and description of the website as well as access the sublinks to navigate to different sections of the page.</div>
            </div>
          </article>
          <article className="collage-item collage-item-2">
            <div className="collage-info">
              <div className="collage-title">About us and timeline Wireframe</div>
              <div className="collage-description">This is where the about us and mission timeline is displayed on the homepage, this gives the viewer information about this website's content and a detailed look at the space mission theme of the site.</div>
            </div>
          </article>
          <article className="collage-item collage-item-3">
            <div className="collage-info">
              <div className="collage-title">Photo Collage Wireframe</div>
              <div className="collage-description">This is where a photo collage of the space mission is shown to further enhance the immersion of the website's theme for the viewer and this is where the footer is contained.</div>
            </div>
          </article>
          <article className="collage-item collage-item-4">
            <div className="collage-info">
              <div className="collage-title">Design Journal Wireframe</div>
              <div className="collage-description">This is the page where the design journal will be displayed and the wireframe of the website below it.</div>
            </div>
          </article>
          <article className="collage-item collage-item-5">
            <div className="collage-info">
              <div className="collage-title">Theory Page Wireframe</div>
              <div className="collage-description">This is the wireframe for the theory page where my essay on Net art is displayed for the viewer to read through.</div>
            </div>
          </article>
          <article className="collage-item collage-item-6">
            <div className="collage-info">
              <div className="collage-title">Net Art Wireframe</div>
              <div className="collage-description">This is where the Net art will be placed later, currently it is just a placeholder.</div>
            </div>
          </article>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Design;
