export class emailValidator {
  constructor(emailAddress){
    this.emailAddress = '';
  }

  isValid(){
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(this.emailAddress);
  }
}
