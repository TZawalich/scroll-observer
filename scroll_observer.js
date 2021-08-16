// set querySelectorAll to elements that need to be styled
const navList = document.querySelectorAll('#EXAMPLE_NAV_BAR ul li a');

//observer function
const intersectionObserver = new IntersectionObserver(function(entries) {
    //slight hack to stop callback from triggering when leaving the .9 threshold section (triggers sub threshold value on exit)
    if (entries[0].intersectionRatio < 0.9) return;

    navList.forEach( e => {
        //removes "current_nav" styling from navigation elements
        e.classList.remove('current')
        //matches the navList hash to the Observer event target to find the "current" nav item
        if(e.hash === (`#${entries[0].target.id}`)){
            //adds "current_nav" class to the element that triggers the observer
            e.classList.add('current')
            //updates page URL to line up with most recently observed section -- remove if you don't want
            history.replaceState(undefined, undefined, e.hash);
        }
    })
  }, {threshold: 0.9});
  //triggers observer function when 90% of the section comes into view

//add or remove observers as you see fit  
intersectionObserver.observe(document.getElementById('EXAMPLE_SECTION_1'));
intersectionObserver.observe(document.getElementById('EXAMPLE_SECTION_2'));
intersectionObserver.observe(document.getElementById('EXAMPLE_SECTION_3'));
intersectionObserver.observe(document.getElementById('EXAMPLE_SECTION_4'));