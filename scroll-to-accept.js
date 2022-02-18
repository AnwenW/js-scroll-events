function scrollToAccept() {
    const terms = document.querySelector('.terms-and-conditions');
    const watch = document.querySelector('.watch'); // element to observe
    const button = document.querySelector('.accept');

    if (!terms) {
        return; // quit if there isn't this item on page
    }

    // new intersection observer with callback function
    function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) { 
            button.disabled = false; // un-disable the accept button
            ob.unobserve(terms.lastElementChild);  // stop observing terms element
        }
    }

    const ob = new IntersectionObserver(obCallback, {
        root: terms,
        threshold: 1 // fully on screen
    });
   
    // tell intersection observer to watch something
    ob.observe(terms.lastElementChild);

}
  
scrollToAccept();
  