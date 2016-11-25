Template.home.events({
	'submit form': function(e){
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
			if (err) {
				alert(err.reason);
			}
			else{
				$("from input, from textarea").val("");
			}
		});
	}
});