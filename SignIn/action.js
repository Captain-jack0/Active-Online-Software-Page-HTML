
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.reloaded === true) {
      location.reload(); // Reload the page
    }
  });

  function goToPage(page) {
    history.pushState({ reloaded: true }, '','http://localhost/SpanishLearning/'+  page);
    location.reload(); // Reload the page immediately
  }


