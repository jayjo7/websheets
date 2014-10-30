Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ return Meteor.subscribe('homes');}

	
	});
	
Router.route('/',     {name: 'homesList'});
Router.route('/food', {name: 'foodsList'});
Router.route('/beer', {name: 'beersList'});

	
	
	


