const Systems = [{
  path:'/systems/userList',
  component: import ('./user/List/'),
}, {
  path:'/systems/userAdd',
  component: import ('./user/Add/')
}, {
  path:'/systems/menu',
  component: import ('./menu/')
}, {
  path:'/systems/role',
  component: import ('./role/')
}]

export default Systems;