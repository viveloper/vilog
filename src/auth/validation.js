export default {
  isEmpty(strValue) {
    if (!strValue) return true
    return strValue.trim() === '' ? true : false
  },

  isEmail(email) {
    if (!email) return false;
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(regEx) ? true : false;
  }
}