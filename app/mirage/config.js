export default function() {

	this.get('/projects', function() {
		return {
			data: [{
				id: 1,
				titre: 'Interférences',
				programme: [
					'Heritage renewal',
					'Museum extension'
				],
				lieu: [
					'Musée du fer',
					'Jarville-la-malgrange, France'
				],
				enseignants: [
					'Jennifer Didelon',
					'Pascal Prunet'
				],
				infos: [
					'Master 2',
					'Semestre 1',
					'Sept.2015-Jan.2016'
				],
				description: 'Le musée de l\'histoire du fer est unbâtiment emblématique des années 1960. Un pari audacieux en terme de structure conduit aujourd\'hui à d\'importants problèmes sanitaires pour l\'édifice, et le mur rideau laissant trop de lumière pénétrer contraint les expositions, car incompatibles avec la conservation préventive. L\'objectif est de dynamiser le musée, de le réorganiser et de transformer ses parois et ainsi faire un espace culturel apte à remplir sa fonction',
				images: [],
				schemas: []
			}]
		};
	});

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
