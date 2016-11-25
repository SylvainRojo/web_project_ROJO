Posts = new Mongo.Collection("posts");

Meteor.methods({
	"insertPost": function(doc){
		
		return Posts.insert(doc);
		
	}
});
/*
Meteor.methods({
	"updatePost": fonction(doc){
		return Posts.update(doc);
	}
});
*/
Posts.allow({
	insert: function(){return true;},
	update: function(){return true;},
	remove: function(){return true;}
});


