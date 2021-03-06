import ATV from 'atvjs';

// template helpers
import 'lib/template-helpers';
// raw css string
import css from 'assets/css/app.css';
// shared templates
import loaderTpl from 'shared/templates/loader.hbs';
import errorTpl from 'shared/templates/error.hbs';

// pages
import HomePage from 'pages/home';
import MoviesPage from 'pages/movies';
import TvShowsPage from 'pages/tvshows';
import MovieDetailsPage from 'pages/movie-details';
import PlayPage from 'pages/play';

ATV.start({
	style: css,
	menu: {
		items: [{
			id: 'home',
			name: 'Home',
			page: HomePage,
			attributes: { autoHighlight: true }
		}, {
			id: 'movies',
			name: 'Movies',
			page: MoviesPage
		}, {
			id: 'tvshows',
			name: 'TV Shows',
			page: TvShowsPage
		}]
	},
	templates: {
		loader: loaderTpl,
		error: errorTpl,
		// status level error handlers
		status: {
			'404': () => errorTpl({
				title: '404',
				message: 'Page cannot be found!'
			}),
			'500': () => errorTpl({
				title: '500',
				message: 'An unknown error occurred in the application. Please try again later.'
			}),
			'503': () => errorTpl({
				title: '500',
				message: 'An unknown error occurred in the application. Please try again later.'
			})
		}
	},
	onLaunch(options) {
		ATV.Navigation.navigateToMenuPage();
	}
});