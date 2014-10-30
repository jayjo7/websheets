Meteor.publish('homes', function(){
	return Homes.find({activate: "Y"},{sort: { WebId: 1 } });
	}
	);

Meteor.publish('beers', function(){
	return Beers.find({activate: "Y"},{sort: { WebId: 1 } });
	}
	);	
	
Meteor.publish('foods', function(){
	return Foods.find({activate: "Y"},{sort: { WebId: 1 } });
	}
	);		
	
	
	
	
	