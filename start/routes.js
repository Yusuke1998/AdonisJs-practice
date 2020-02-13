'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.any('*', ({ view }) => view.render('yusuke'))

/**

Route.on('/').render('yusuke')

Route.get('/yusuke', () => 'Hello Yusuke from Adonis framework')

Route.get('/yusuke/:ci?', async({ params }) => {
	if (!params.ci) {
		return 'La cedula no existe!'
	}else{
		return 'La cedula es '+params.ci
	}
})
**/