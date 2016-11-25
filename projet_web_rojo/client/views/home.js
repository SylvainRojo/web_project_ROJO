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
		$("input[name='auteur']").val("");
		$("input[name='titre']").val("");
		$("input[name='contenu']").val("");
	},



	'click .editB': function(){

		var title = $("input[name='titreM']").val();
		var content = $("input[name='contenuM']").val();
/*
		Pots.findAndModify({
			query: { _id: this._id},
 			update: {}

		});
*/
		Posts.update(this._id,{$set:{
			title:title,
			content:content}
		});
		$("input[name='titreM']").val("");
		$("input[name='contenuM']").val("");
	},

	
	'click .remove': function() {
		Posts.remove(this._id);
	}



});



