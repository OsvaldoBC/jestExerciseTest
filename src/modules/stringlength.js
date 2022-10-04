function stringlength(string){
    let str = string.length;
    if ( str < 1 || str > 10 ){
        return 'error';
    }
    else {
    return str;
    }
}
module.exports = stringlength;
