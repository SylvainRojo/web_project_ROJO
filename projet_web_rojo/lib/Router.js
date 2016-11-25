Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: "home",
	data: function(){
		var posts = Posts.find();

		return {
			posts: posts
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPostHearders");
	}
	
});

Router.route('/editPosts',{
	name: "editPosts"
});


