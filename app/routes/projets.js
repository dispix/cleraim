import Ember from 'ember';

var projets = [
	{
		id: 1,
		titre: 'Interférences',
		programme: ['Heritage renewal', 'Museum extension'],
		lieu: ['Musée du fer', 'Jarville-la-malgrange, France'],
		enseignants: ['Jennifer Didelon', 'Pascal Prunet'],
		infos: ['Master 2', 'Semestre 1', 'Sept.2015-Jan.2016'],
		description: 'Le musée de l\'histoire du fer est unbâtiment emblématique des années 1960. Un pari audacieux en terme de structure conduit aujourd\'hui à d\'importants problèmes sanitaires pour l\'édifice, et le mur rideau laissant trop de lumière pénétrer contraint les expositions, car incompatibles avec la conservation préventive. L\'objectif est de dynamiser le musée, de le réorganiser et de transformer ses parois et ainsi faire un espace culturel apte à remplir sa fonction',
		images: [],
		schemas: []
	},
	{
		id: 1,
		titre: 'Interférences',
		programme: ['Heritage renewal', 'Museum extension'],
		lieu: ['Musée du fer', 'Jarville-la-malgrange, France'],
		enseignants: ['Jennifer Didelon', 'Pascal Prunet'],
		infos: ['Master 2', 'Semestre 1', 'Sept.2015-Jan.2016'],
		description: 'Le musée de l\'histoire du fer est unbâtiment emblématique des années 1960. Un pari audacieux en terme de structure conduit aujourd\'hui à d\'importants problèmes sanitaires pour l\'édifice, et le mur rideau laissant trop de lumière pénétrer contraint les expositions, car incompatibles avec la conservation préventive. L\'objectif est de dynamiser le musée, de le réorganiser et de transformer ses parois et ainsi faire un espace culturel apte à remplir sa fonction',
		images: [],
		schemas: []
	}
];

export default Ember.Route.extend({
	model() {
		return projets;
	}
});
