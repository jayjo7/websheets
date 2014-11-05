Template.foodItem.events({
 	'submit form': function (e) {
 		e.preventDefault();
 		
 		var order = 
 		{
 		
 			foodName: $(e.target).find('[name=foodName]').val(), 
 			webId:$(e.target).find('[name=webid]').val(),
	 		foodQuantity:$(e.target).find('[name=foodQty]').val(),
	 		customer: Meteor.user(),
	 		orderedAt: new Date(),
	 		status:'new'
	 		
	 	};
	 	
	 	console.log ( "order"+ order);
	 	order._id = Orders.insert(order);
	 	Router.go ('/beer');
}
});