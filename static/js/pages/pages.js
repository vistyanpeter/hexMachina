app.page.all = function() {
	new app.view.MobileMenu();
	new app.view.GoogleSearch();
};

app.page.home = function() {
	console.info('initializing home');
	new app.view.CodeMirror();

	app.$carousel = new Flickity('.flickity', {
		wrapAround: true,
		prevNextButtons: false
	});

	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
	$('.carousel-section').parallax({imageSrc: '{{site.baseurl}}/img/pattern-cover.jpg'});
	new app.ReadMore('.features');
	particlesJS.load('particles-js', 'assets/particles.json', function() {});

};

app.page.docs = function() {
	new app.view.CodeMirror();
	new app.view.VerticalMenu();

	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
};

app.page.blog = function() {
	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
};

app.page.downloads = function() {
	new app.view.Clipboard();
};