// BEGIN CUSTOM SCRIPT

// Rename nav bar items
setTimeout(function navCleanup() {
  $('a[href*="/privmsg?folder=inbox"]').text('Messages');
  $('#logout').text('Logout');
  $(".accordion").accordion({
    collapsible: true,
    active: false,
    icons: false,
    beforeActivate: function(event, ui) {
      $(".accordion").not(this).accordion('option', 'active', false);
    }
  });

}, 250);


// END CUSTOM SCRIPT