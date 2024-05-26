import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div className="design-page">
      <div className="design-header">
        <h1>Design Journal</h1>
        <p>Documenting the creative process and design evolution.</p>
      </div>
      <div className="design-journal">
        <div className="design-entry left">
          <div className="entry-content">
            <h2>Design Entry 1</h2>
            <p>This is the first entry of my design journal. It includes the initial concepts and inspirations for the project...</p>
          </div>
          <div className="entry-image design-entry-1"></div>
        </div>
        <div className="design-entry right">
          <div className="entry-content">
            <h2>Design Entry 2</h2>
            <p>In this entry, I explored various color schemes and typography options...</p>
          </div>
          <div className="entry-image design-entry-2"></div>
        </div>
      </div>
      <div className="wireframe-collage">
        <h2>Wireframes</h2>
        <div className="collage">
          <div className="collage-item collage-item-1">
            <div className="collage-info">
              <div className="collage-title">Wireframe 1</div>
              <div className="collage-description">Description of Wireframe 1...</div>
            </div>
          </div>
          <div className="collage-item collage-item-2">
            <div className="collage-info">
              <div className="collage-title">Wireframe 2</div>
              <div className="collage-description">Description of Wireframe 2...</div>
            </div>
          </div>
          <div className="collage-item collage-item-3">
            <div className="collage-info">
              <div className="collage-title">Wireframe 3</div>
              <div className="collage-description">Description of Wireframe 3...</div>
            </div>
          </div>
          <div className="collage-item collage-item-4">
            <div className="collage-info">
              <div className="collage-title">Wireframe 4</div>
              <div className="collage-description">Description of Wireframe 4...</div>
            </div>
          </div>
          <div className="collage-item collage-item-5">
            <div className="collage-info">
              <div className="collage-title">Wireframe 5</div>
              <div className="collage-description">Description of Wireframe 5...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
