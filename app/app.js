/*global ga*/
/*global window*/

module.exports = {
    run: function () {
        "use strict";
        if (this._prod()) {
            ga('create', 'UA-36982620-1', 'auto');
            ga('send', 'pageview');
        }
    },
    _prod: function () {
        "use strict";
        if (window.location.href.indexOf('localhost') === -1) {
            return true;
        }
        return false;
    }
};

module.exports.run();