require.config({
  catchError: true,
  baseUrl: "/",
  paths: {
    'JQuery'        : 'js/libs/jquery/dist/jquery.min',
    'bootstrapJS'   : 'bootstrap-3.3.7-dist/js/bootstrap.min',
    'angularLib'    : 'js/libs/angular-1.5.8/angular.min'
  },
  urlArgs: "v=alpha-0.0",
  shim: {

  },

});

require(['JQuery', 'bootstrapJS', 'angularLib'], function() {
  console.log('All dependencies loaded');
});

requirejs.onError = function(err) {
  if (err.requireType == 'timeout' || err.requireType =='scripterror') {
    alert('An error occurred please refresh the page');
    throw err;
  } else {
    alert('An error occurred please refresh the page');
    throw err;
  }
};
