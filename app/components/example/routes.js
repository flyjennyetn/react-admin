
export default {
  component: require('./index').default,
  childRoutes: [
    {
      path: 'form/BasicForm',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./forms/BasicForm').default))
      }
    },
    {
      path: 'table/basicTable',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./tables/BasicTable').default))
      }
    },
    {
      path: 'table/advancedTable',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./tables/AdvancedTables').default))
      }
    },
    {
      path: 'table/asynchronousTable',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./tables/AsynchronousTable').default))
      }
    },
    {
      path: 'chart/echarts',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./charts/Echarts').default))
      }
    },
    {
      path: 'chart/recharts',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./charts/Recharts').default))
      }
    },
    {
      path: 'ui/icons',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Icons').default))
      }
    },
    {
      path: 'ui/buttons',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Buttons').default))
      }
    },
    {
      path: 'ui/spins',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Spins').default))
      }
    },
    {
      path: 'ui/modals',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Modals').default))
      }
    },
    {
      path: 'ui/notifications',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Notifications').default))
      }
    },
    {
      path: 'ui/tabs',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Tabs').default))
      }
    },
    {
      path: 'ui/banners',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/banners/').default))
      }
    },
    {
      path: 'ui/wysiwyg',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Wysiwyg').default))
      }
    },
    {
      path: 'ui/draggable',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Draggable').default))
      }
    },
    {
      path: 'ui/gallery',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./ui/Gallery').default))
      }
    },
    {
      path: 'animation/basicAnimations',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./animation/BasicAnimations').default))
      }
    },
    {
      path: 'animation/exampleAnimations',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./animation/ExampleAnimations').default))
      }
    },
    {
      path: 'dashboard/index',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./dashboard/Dashboard').default))
      }
    },
    {
      path: 'auth/basic',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./auth/Basic').default))
      }
    }

  ]
}