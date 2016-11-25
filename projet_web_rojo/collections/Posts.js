Posts = new Mongo.Collection("posts");

Meteor.methods({
	"insertPost": function(doc){
		if (doc.author !== "Martin") {
			throw new Meteor.Error(403, " Pas D'autorisation !");
		}
		else{
			return Posts.insert(doc);
		}
	}
});