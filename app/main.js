/*global $*/
/*global ga*/
/*global window*/

module.exports = {
    run: function () {
        "use strict";
        if (this._prod()) {
            ga('send', 'pageview');
        }
        this.delegateEvents();
    },
    _prod: function () {
        "use strict";
        if (window.location.href.indexOf('localhost') === -1) {
            return true;
        }
        return false;
    },
    delegateEvents: function () {
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
            },
            indexEvents = function () {
                $(document).on('scroll', function () {
                    if ($(window).scrollTop() === 0) {
                        resetCaret();
                    } else if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                        setNextSection('#more');
                    }
                });

                $('.circle').on('click', function (event) {
                    if (!($(event.target).hasClass('portfolio'))) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: '0px'
                        }, 500);
                    }
                });

                $('a.top').on('click', function (event) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: '0px'
                    }, 1000, resetCaret);
                });

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
            },
            designEvents = function () {
                if ($('body').hasClass('design') || $('body').hasClass('more')) {
                    $('.title').on('mouseenter', function (event) {
                        $('.title').html('a development portfolio');
                    });
                    $('.title').on('mouseleave', function (event) {
                        $('.title').html('a design portfolio');
                    });
                }
            },
            devEvents = function () {
                if ($('body').hasClass('dev')) {
                    $('.title').on('mouseenter', function (event) {
                        $('.title').html('a design portfolio');
                    });
                    $('.title').on('mouseleave', function (event) {
                        $('.title').html('a development portfolio');
                    });
                }
            },
            moreEvents = function () {
                $('.nav-link').on('click', function (event) {
                    event.preventDefault();
                    var navHeight = $('#nav').outerHeight(),
                        target = this.hash;
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - navHeight
                    }, 1000);
                });
            },
            registerEvents = function () {
                indexEvents();
                designEvents();
                devEvents();
                moreEvents();
            };

        registerEvents();
    }
};

module.exports.run();