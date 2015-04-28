/*global $*/
/*global ga*/
/*global window*/

module.exports = {
    run: function () {
        "use strict";
        if (this._prod()) {
            ga('send', 'pageview');
        }

        this.delegateScrollEvents();
    },
    _prod: function () {
        "use strict";
        if (window.location.href.indexOf('localhost') === -1) {
            return true;
        }
        return false;
    },
    delegateScrollEvents: function () {
        $('a.top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: '0px'
            }, 1000);
        });
        $('a.bottom').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
        });
    }
};

module.exports.run();