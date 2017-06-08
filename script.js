var upvote = document.getElementById('upvote');
var downvote = document.getElementById('downvote');
var votes = document.getElementById('votes');

var currentIndex = 0;

upvote.addEventListener('click', function(){
	currentIndex += 1;

	votes.textContent = 'Likes: ' + currentIndex;
});

downvote.addEventListener('click', function(){
	currentIndex -= 1;

	votes.textContent = 'Likes: ' + currentIndex;
});