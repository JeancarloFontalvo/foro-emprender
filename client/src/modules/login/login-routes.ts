import LoginPage from './login-page.vue'

var LoginRoutes = [
	
	{
      path: '/login',
      name: 'login',
      component: LoginPage
    }
]

function addLoginRoutes(routes:any[]) {
	if(routes == null) 
		return;

	LoginRoutes.forEach( (value) => routes.push(value) );

}

export { LoginRoutes, addLoginRoutes };