// 普通加载路由
// import Home from './Home.vue'
// 懒加载路由
const Home = () => import('./Home.vue')
export default {
  path: '/home',
  name: 'Home',
  component: Home,
  children: [
  ]
}