// 普通加载路由
// import About from './About.vue'
// 懒加载路由
const About = () => import('./About.vue')
export default {
  path: '/about',
  name: 'About',
  component: About,
  children: [
  ]
}