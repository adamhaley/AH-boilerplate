(function(old) {
    Backbone.History.prototype.getFragment = function() {
        return old.apply(this, arguments).replace(/\?.*/, '');
    };
})(Backbone.History.prototype.getFragment);

define([], function() {

    var AppRouter = Backbone.Router.extend({
	
    	routes: {

                'home': 'defaultAction'
        }
        , initialize: function () {
	    	Backbone.history.start();
	    }
        , defaultAction: function(){
        
        }
    })
    , router = new AppRouter;

  return router;
});