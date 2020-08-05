module.exports = {
    screenType() {
        var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if(screenWidth > 750) {
            return 'pc-view';
        }else {
            return 'moblie-view';
        }
    }
}