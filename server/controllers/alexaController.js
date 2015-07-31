var mongoose = require('mongoose');
var Post = mongoose.model('Post');

var PostBody;
var PostContent;

module.exports = {
	alexaSkill: function(req, res) {
		if (req.body.request.type === 'LaunchRequest') {
			res.json({
				version: "0.1",
				sessionAttributes: {},
				response: { 
					outputSpeech: {
						type: "PlainText",
						text: "Okay. What's the title of your post?"	
					},
					reprompt: {
						outputSpeech: {
							type: "PlainText",
							text: "I asked you a question you stupid mother fucking cocksucker."
						}
					},
					shouldEndSession: false
				}    
			})
		} else if (req.body.request.type === 'IntentRequest' && req.body.request.intent.slots.Title.value) {
			PostTitle = req.body.request.intent.slots.Title.value;
			res.json({
				version: "0.1",
				sessionAttributes: {},
				response: {
					outputSpeech: {
						type: "PlainText",
						text: "Okay great, the title of your post is " + PostTitle + ", now what should I post for its content?"
					},
					reprompt: {
						outputSpeech: {
						type: "PlainText",
						text: "What was that? I didn't catch it."
						}
					},
					shouldEndSession: false
				}
			})
		} else if (req.body.request.type === 'IntentRequest' && req.body.request.intent.slots.Content.value) {
			PostContent = req.body.request.intent.slots.Content.value;

			var permalink = PostTitle.toLowerCase();
            permalink = permalink.replace(/\s/g, "") 
			
			var newPost = new Post({permalink: permalink, title: PostTitle, body: PostContent, tags: ['Amazon Echo'], categories: ['Alexa Skills Kit'], _user: '55b86d671cda851d23870d0e'});
			newPost.save(function(err, post){
				if (err) {
					console.log('Error creating new post from Alexa');
				}
			})

			res.json({
				version: "0.1",
				sessionAttributes: {},
				response: {
					outputSpeech: {
						type: "PlainText",
						text: "Okay great, I'll post that for you right away!"
					},
					shouldEndSession: true
				}
			})
		}
	}
}

