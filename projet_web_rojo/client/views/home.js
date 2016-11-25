Template.home.events({
	'submit form': function(e){
		e.preventDefault();

		var author = $("input[name='auter']").val();
		var title = $("input[name='titre']").val();
		var content = $("input[name='contenu']").val();

		var post = {
			author: author,
			title: title,
			content: content
		}

		Posts.insert(post);
	}
});