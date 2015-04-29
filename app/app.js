/*global $*/
/*global ga*/
/*global window*/

module.exports = {
    run: function () {
        "use strict";
        if (this._prod()) {
            ga('send', 'pageview');
        }

        this.scrollEvents().delegate();
    },
    _prod: function () {
        "use strict";
        if (window.location.href.indexOf('localhost') === -1) {
            return true;
        }
        return false;
    },
    scrollEvents: function () {
        "use strict";
        var resetCaret = function () {
                $('a.next').prop('href', '#likes');
                $('a.next').removeClass('hide');
                $('a.top').addClass('hide');
            },
            setNextSection = function (target) {
                if (target === '#likes') {
                    $('a.next').prop('href', '#more');
                } else if (target === '#more') {
                    $('a.next').addClass('hide');
                    $('a.top').removeClass('hide');
                }
            };
        return {
            delegate: function () {
                $(document).on('scroll', function () {
                    if ($(window).scrollTop() === 0) {
                        resetCaret();
                    } else if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                        setNextSection('#more');
                    }
                });

                $('a.top').on('click', function (event) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: '0px'
                    }, 1000, function () {
                        resetCaret();
                    });
                }.bind(this));

                $('a.next').on('click', function (event) {
                    event.preventDefault();
                    var navHeight = $('#nav').outerHeight(),
                        target = this.hash;
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - navHeight
                    }, 1000, function () {
                        setNextSection(target);
                    });
                });
            }
        };
    }
};

module.exports.run();