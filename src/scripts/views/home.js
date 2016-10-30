import * as $ from 'jquery';
import {EmailValidator} from 'shared/email-validator';

function init(){
  console.log('Initialized Home Page!');
  console.log(EmailValidator);
  console.log($.ajax);
}

export { init };
