export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          {name: '登录', path: '/user/login', component: './user/Login'},
          {name: '注册', path: '/user/register', component: './user/Register'}
        ]
      },
      {component: './404'},
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    // access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
      {path: '/admin/product-manage', name: '产品管理', icon: 'smile', component: './Admin/ProductManager'},
      {path: '/admin/component-manage', name: '零件管理', icon: 'smile', component: './Admin/ComponentManager'},
      {path: '/admin/material-manage', name: '原材料管理', icon: 'smile', component: './Admin/MaterialManager'},
      {path: '/admin/transport-manage', name: '运输页', icon: 'smile', component: './Admin/TransportManager'},
      {path: '/admin/composition-manage', name: '组成页', icon: 'smile', component: './Admin/CompositionManager'},
      {path: '/admin/manufacture-manage', name: '制造页', icon: 'smile', component: './Admin/ManufactureManager'},
      {component: './404'},
    ],
  },
  // {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  // {path: '/', redirect: '/welcome'},
  // {component: './404'},
];
