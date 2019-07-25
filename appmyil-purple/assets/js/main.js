/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 *
 * Template Name: Appmyil - Business Consulting Bootstrap4 Template   
 * Template URI: https://thememarch.com/demo/html/appmyil/
 * Description: Appmyil is a business consulting HTML template which comes with the unique and clean design. It helps you to create a beautiful business consulting HTML website. It has also e-commerce support. E-commerce pages are included on this template.
 * Author: Thememarch
 * Author URI: https://thememarch.com
 * Version: 2.0
 *
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */

(function(t) {
    "use strict";
    jQuery.fn.exists = function() {
        return this.length > 0
    }, t(window).on("load", function() {
        t(".tm-preloader").delay(150).fadeOut("slow")
    });
    var i = new ScrollMagic.Controller,
        e = {
            preloaderCancellation: function() {
                t(".tm-preloader").find(".tm-button").on("click", function() {
                    t(this).parent(".tm-preloader").fadeOut("slow")
                })
            },
            dataBgImage: function() {
                t("[data-bgimage]").each(function() {
                    var i = t(this).data("bgimage");
                    t(this).css({
                        "background-image": "url(" + i + ")"
                    })
                })
            },
            sliderActivation: {
                screenshotSlider: function() {
                    t(".tm-screenshots-slider").slick({
                        infinite: !0,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        slidesToScroll: 1,
                        slidesToShow: 3,
                        centerMode: !0,
                        centerPadding: "0",
                        focusOnSelect: !0,
                        arrows: !0,
                        prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                        nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                        dots: !1,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    })
                },
                teamMemberSlider: function() {
                    t(".tm-team-slider").slick({
                        infinite: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: !0,
                        prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                        nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                        dots: !1,
                        responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    })
                },
                blogSlider: function() {
                    t(".tm-blog-slider").slick({
                        infinite: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: !0,
                        centerPadding: "0",
                        focusOnSelect: !0,
                        arrows: !0,
                        prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                        nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                        dots: !1,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                adaptiveHeight: !0
                            }
                        }]
                    })
                },
                testimonialSlider: function() {
                    t(".tm-testimonial-contents").slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: !0,
                        asNavFor: ".tm-testimonial-authors",
                        autoplay: !0,
                        arrows: !0,
                        prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                        nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>'
                    }), t(".tm-testimonial-authors").slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: ".tm-testimonial-contents",
                        dots: !1,
                        centerMode: !0,
                        centerPadding: 0,
                        focusOnSelect: !0,
                        autoplay: !0
                    })
                },
                init: function() {
                    e.sliderActivation.screenshotSlider(), e.sliderActivation.teamMemberSlider(), e.sliderActivation.blogSlider(), e.sliderActivation.testimonialSlider()
                }
            },
            counterupActivation: function() {
                t(".odometer").length && t(window).on("scroll", function() {
                    function i() {
                        var i = t(window).scrollTop(),
                            e = t(window).height(),
                            o = Math.round(i + e / 1.2);
                        return o
                    }
                    var e = t(".odometer").offset().top;
                    e < i() && t(".odometer").each(function() {
                        t(this).html(t(this).data("count-to"))
                    })
                })
            },
            funfactMasonryActive: function() {
                t(".tm-funfact-wrapper").masonry({
                    itemSelector: ".tm-funfact-masonryitem",
                    columnWidth: 1
                })
            },
            dynamicPricebox: function() {
                function i() {
                    return t(".tm-pricebox-switchbuttons").find("button").on("click", function() {
                        t(this).addClass("is-active").siblings("button").removeClass("is-active")
                    }), t(".tm-pricebox-switchbuttons").find("button.is-active").data("keyvalue")
                }

                function e() {
                    t(".tm-pricebox-price-digit").each(function() {
                        var e = t(this).data("pricebox-price-monthly"),
                            o = t(this).data("pricebox-price-yearly");
                        "monthly" === i() ? t(this).text(e) : t(this).text(o)
                    })
                }

                function o() {
                    t(".tm-pricebox-price-time").each(function() {
                        var e = t(this).data("monthly-text"),
                            o = t(this).data("yearly-text");
                        "monthly" === i() ? t(this).text(e) : t(this).text(o)
                    })
                }
                e(), o(), t(".tm-pricebox-switchbuttons").find("button").on("click", function() {
                    e(), o()
                })
            },
            contactFormEffect: function() {
                t(".tm-form-field").on("focus", "input, textarea", function() {
                    t(this).siblings(".tm-form-animatedline").css("width", "100%")
                }), t(".tm-form-field").on("focusout", "input, textarea", function() {
                    t(this).siblings(".tm-form-animatedline").css("width", 0);
                    var i = t(this);
                    0 !== i.val().trim().length && t(this).siblings(".tm-form-animatedline").css("width", "100%")
                })
            },
            scrollToSection: function() {
                t(".tm-heroslider-scrolldown").on("click", function(i) {
                    i.preventDefault();
                    var e = t(this);
                    t("html, body").stop().animate({
                        scrollTop: t(e.attr("href")).offset().top - 65
                    }, 1e3)
                })
            },
            stickyHeaderActive: function() {
                t(window).on("scroll", function() {
                    t(this).scrollTop() >= 1 ? t(".tm-sticky-header").addClass("is-sticky") : t(".tm-sticky-header").removeClass("is-sticky")
                })
            },
            meanmenuActive: function() {
                t("nav.tm-navigation").meanmenu({
                    meanMenuContainer: ".tm-mobilenav",
                    meanScreenWidth: "991",
                    meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
                    meanMenuClose: '<i class="zmdi zmdi-close"></i>'
                }), t(".tm-mobilenav nav.mean-nav li a").on("click", function(i) {
                    i.preventDefault();
                    var e = t(this);
                    t("html, body").stop().animate({
                        scrollTop: t(e.attr("href")).offset().top - 65
                    }, 1e3)
                })
            },
            breadcrumbPadding: function() {
                if (t(".tm-header-fixed").exists()) {
                    var i = t(".tm-header-fixed").innerHeight();
                    t(".tm-breadcrumb").css({
                        paddingTop: i + "px"
                    })
                }
            },
            scrollSpyActive: function() {
                t(".tm-navigation").scrollspy({
                    offset: -65,
                    activeClass: "current",
                    animate: "swing"
                })
            },
            fancyboxInit: function() {
                t("[data-fancybox]").fancybox()
            },
            ajaxMailchimp: function() {
                function i(i) {
                    "success" === i.result ? (t(".tm-mailchimp-success").html("" + i.msg).fadeIn(900), t(".tm-mailchimp-error").fadeOut(400)) : "error" === i.result && t(".tm-mailchimp-error").html("" + i.msg).fadeIn(900)
                }
                t("#tm-mailchimp-form").ajaxChimp({
                    language: "en",
                    callback: i,
                    url: "YOUR_MAILCHIMP_URL_HERE"
                })
            },
            scrollUpActive: function() {
                t('<button id="scrollUp"><i class="zmdi zmdi-chevron-up"></i></button>').appendTo("body"), t(window).on("scroll", function() {
                    var i = t(this).height(),
                        e = t(this).scrollTop();
                    e > i + 100 ? t("#scrollUp").addClass("is-visible") : t("#scrollUp").removeClass("is-visible")
                }), t("#scrollUp").on("click", function() {
                    return t("html, body").animate({
                        scrollTop: 0
                    }, "slow"), !1
                })
            },
            easeScrollActive: function() {
                t("html").easeScroll()
            },
            herosliderScrollMagic: function() {
                var e = t(window).width();
                e >= 992 && (new ScrollMagic.Scene({
                    duration: 0,
                    offset: 0
                }).setPin(".tm-heroslider-inner", {
                    pushFollowers: !1
                }).addTo(i), t(window).on("scroll", function() {
                    var i = t(this).scrollTop(),
                        e = 1 - i / 750;
                    t(".tm-heroslider-content, .tm-heroslider-mobileshow ").css({
                        opacity: e
                    })
                }))
            },
            blogMasonryActive: function() {
                t(".blog-masonry-active").masonry({
                    itemSelector: ".blog-masonry-item"
                })
            },
            ajaxMailer: function() {
                var i = t("#tm-contactform"),
                    e = t(".form-messages");
                t(i).submit(function(o) {
                    o.preventDefault();
                    var n = t(i).serialize();
                    t.ajax({
                        type: "POST",
                        url: t(i).attr("action"),
                        data: n
                    }).done(function(i) {
                        t(e).removeClass("error"), t(e).addClass("success"), t(e).text(i), t('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val("")
                    }).fail(function(i) {
                        t(e).removeClass("success"), t(e).addClass("error"), "" !== i.responseText ? t(e).text(i.responseText) : t(e).text("Oops! An error occured and your message could not be sent.")
                    })
                })
            },
            serviceImageAnim: function() {
                setInterval(function() {
                    t(".tm-service-image-1").toggleClass("is-visible"), t(".tm-service-image-2").toggleClass("is-visible")
                }, 5e3)
            },
            init: function() {
                e.preloaderCancellation(), e.dataBgImage(), e.sliderActivation.init(), e.counterupActivation(), e.funfactMasonryActive(), e.dynamicPricebox(), e.contactFormEffect(), e.scrollToSection(), e.stickyHeaderActive(), e.meanmenuActive(), e.breadcrumbPadding(), e.scrollSpyActive(), e.fancyboxInit(), e.ajaxMailchimp(), e.scrollUpActive(), e.easeScrollActive(), e.herosliderScrollMagic(), e.blogMasonryActive(), e.ajaxMailer(), e.serviceImageAnim()
            }
        };
    e.init()
})(jQuery);