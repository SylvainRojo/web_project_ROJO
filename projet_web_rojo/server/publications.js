Meteor.publish("allPostHearders", function(){
	return Posts.find();
});

