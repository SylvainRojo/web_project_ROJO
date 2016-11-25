Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: 'accueil'
});

Router.route('/posts', {
	name: "posts",
	data: function(){
		return {
			posts: [
				{ 
					title: "Premier Post",
					hide: true
				},
				{
					title: "Second Post",
					hide: false
				},
				{
					title: "Troisième Post",
					hide: false
				},
			]
		};

	}

});