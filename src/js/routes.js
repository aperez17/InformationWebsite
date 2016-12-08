import Main from './Main';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Dashboard },
  childRoutes: [
    { path: 'menu', component: Menu }
  ]
};
