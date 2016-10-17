import {$location} from 'providers';
import * as home from 'views/home';

const routes = {
  '/': {
    viewModule: home
  }
}

function initCurrentViewModule(){
  let module = routes[$location.pathname].viewModule;
  module.init();
}

export { initCurrentViewModule }
