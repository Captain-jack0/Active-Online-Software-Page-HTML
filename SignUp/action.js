
window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page
    }
  };


  function goToPage(page) {
    history.pushState({ reloaded: true }, '','http://localhost/SpanishLearning/'+  page);
    location.reload(); // Reload the page immediately
  }


