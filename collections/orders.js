Orders = new Meteor.Collection('orders');

Orders.allow({

insert: function (userId, doc){
//only allow posting if you are logged in
return !! userId;
}
});