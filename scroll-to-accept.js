function scrollToAccept() {
    const terms = document.querySelector('.terms-and-conditions');

    if (!terms) {
        return; // quit if there isn't this item on page
    }

    terms.addEventListener('scroll', function (e) {
        console.log(e.currentTarget);
    });
}
  
scrollToAccept();
  