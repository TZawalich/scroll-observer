# Current Scroll Observer

## Description
A script that allows you to change navigation element styles depending on where you are located on the page using Intersection Observers. This does not use event handlers.

This project works well with single page websites, and infinite scroll/lazy load pages.

Can easily be modified to change other element styles based on scroll height/page view.


## How to Use
- Drop script directly into project/.js file
- Replace navList querySelectorALL target with relevant navigation bar elements that are to be styled with 'current' class name
- You will need to create a CSS file with 'current' class styling
- Update intersectionObserver call targets with Ids of elements that need to be observed (the sections/elements you will scroll through)
   - Add/Remove number of intersectionObserver calls relevant to your project
- Works great with smooth scrolling

## Credits

