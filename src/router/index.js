import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../pages/test'
import Sandbox from '../pages/sandbox'
import Theory from '../pages/theory'
import SurveyCreator from '../pages/survey-creator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },

  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Sandbox
  },

  {
    path: '/theory',
    name: 'Theory',
    component: Theory
  },

  {
    path: '/survey-creator',
    name: 'SurveyCreator',
    component: SurveyCreator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
