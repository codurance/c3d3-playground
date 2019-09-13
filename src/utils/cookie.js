const Cookie = {
  setCookie: (name, value, expirationDays) => {
    var d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toGMTString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  },
  getCookie: name => {
    var name = name + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
};

export default Cookie;
