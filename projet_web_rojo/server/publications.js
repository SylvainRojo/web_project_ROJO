Meteor.publish("allPostHearders", function(){
	return Posts.find({}, {
		fields: {content: 0} 
	});
});

