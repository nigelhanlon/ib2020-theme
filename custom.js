// BEGIN CUSTOM SCRIPT

// Rename nav bar items
setTimeout(function navCleanup() {
  $('a[href*="/privmsg?folder=inbox"]').text('Messages');
  $('#logout').text('Logout');

}, 200);

// END CUSTOM SCRIPT