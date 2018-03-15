
export default {
  component: require('./index').default,
  childRoutes: [
    {
      path: 'system/user',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./user/').default))
      }
    },
    {
      path: 'system/user/add',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./user/Add/').default))
      }
    },
    {
      path: 'system/menu',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./menu/').default))
      }
    },
    {
      path: 'system/role',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./role/').default))
      }
    }
  ]
}