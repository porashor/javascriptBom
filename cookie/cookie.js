function setcokie(name, value, datey){
    const d = new Date();
    d.setTime(d.getTime() + datey * 24 * 60 * 60 * 1000);
    let expires = 'expires =' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path = /';
}