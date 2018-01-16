export default {
  path: '/',
  component: require('./App').default,
  // indexRedirect: {
  //   to:"/app/dashboard/index"
  // },
  indexRoute:{
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./Login').default))
      }
  },
  childRoutes: [
    // {
    //   path: '/login',
    //   getComponent(state, cb){
    //     require.ensure([], require => cb(null, require('./Login').default))
    //   }
    // },
    {
      path: 'app',
      component: require('./Boot').default,

      childRoutes:[
          require('../components/example/routes').default
      ]
    },
    {
      path: '*',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./NotFound').default))
      }
    }
  ]
}
