import { useCallback } from 'react';

// Define a custom hook to handle scrolling to a specified ID.
const useSmoothScroll = () => 
  {
  const handleScroll = useCallback((id) => 
    {
    const element = document.getElementById(id); // Retrieve the DOM element by its ID.
    if (element) 
    {
      element.scrollIntoView({ behavior: 'smooth' }); // If the element exists, scroll to it using smooth behavior.
    }
  }, []);
  // Return the handleScroll function so it can be used by components.
  return handleScroll;
};

export default useSmoothScroll;