Template.home.events({
	'submit .ajouter': function(e){
		e.preventDefault();

		var author = $("input[name='auteur']").val();
		var title = $("input[name='titre']").val();
		var content = $("input[name='contenu']").val();

		var post = {
			author: author,
			title: title,
			content: content
		}

		Meteor.call("insertPost", post, function(err,id){
			
				$("from input, from textarea").val("");
			
		});
	},
	
	'submit .supprimer': function(){
		var title = $("input[name='titre']").val();

		Posts.deleteOne(title);
	},
/*
	'submit .editB': function(){
		Router.route('/editPosts',{ name: "editPosts"});
	}
	*/

});



