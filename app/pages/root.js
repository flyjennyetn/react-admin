export default {
  path: '/',
  component: require('./Boot').default,
  // indexRedirect: {
  //   to:"/app/dashboard/index"
  // },
  indexRoute:{
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./Login/').default))
      }
  },
  childRoutes: [
    // {
    //   path: '/login',
    //   getComponent(state, cb){
    //     require.ensure([], require => cb(null, require('./Login/').default))
    //   }
    // },
    {
      path: 'app',
      component: require('./App').default,
      childRoutes:[
          {
            path: 'dashboard',
            getComponent(state, cb){
              require.ensure([], require => cb(null, require('./Dashboard/').default))
            }
          },
          require('./system/routes').default,
          require('./example/routes').default
      ]
    },
    {
      path: '*',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./NotFound/').default))
      }
    }
  ]
}
