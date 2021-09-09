import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// 动态读取路由
const routes = []
const files = require.context('../views', true, /route\.js$/)
files.keys().forEach(filename => {
  const page = require('../views' + filename.replace('.', ''))
  routes.unshift(page.default)
})

// 添加首页默认路由
routes.unshift({
  path:'/',
  component:() => import('../views/home/Home.vue')
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router