require.config({
  catchError: true,
  baseUrl: "/",
  paths: {
    'JQuery'        : 'js/libs/jquery/dist/jquery.min',
    'bootstrapJS'   : 'bootstrap-3.3.7-dist/js/bootstrap.min',
    'angularLib'    : 'js/libs/angular-1.5.8/angular.min',
    'angular-ui-router' : 'js/libs/angular-1.5.8/angular-ui-router.min'
  },
  urlArgs: "v=alpha-0.0",
  shim: {
    'bootstrapJS': {
        deps:["JQuery"]
    },
    'angular-ui-router' : {
      deps : ['angularLib']
    }
  }
});

require(['JQuery', 'bootstrapJS', 'angularLib', 'angular-ui-router'], function() {
  console.log('All dependencies loaded');
  require(['js/app'], function() {
    require(['js/routes'], function() {
      angular.bootstrap(document.body, ['WebTutorials']);
    });
  });
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
