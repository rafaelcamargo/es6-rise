import * as $ from 'jquery';
import {emailValidator} from 'shared/email-validator';

function init(){
  console.log('Initialized Home Page!');
  console.log(emailValidator);
  console.log($.ajax);
}

export { init };
