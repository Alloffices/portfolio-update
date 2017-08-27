function Filters(data) {

    ////  PROPERTIES ////
    //public properties
    this.data = data;
    this.base_url = base_url || window.location.origin;
    this.getArguments = false;
    this.cookie = false;
    this.user_ip = user_ip || "error";
    this.trendings = trendings || data;
    this.populars = populars || data;
    this.emptyState = (function() {
        var dom = $('<p>');
        dom.css({
            "textAlign": "center",
            "fontSize": "16px",
            "fontFamily": "GOTHAM-MEDIUM",
            "lineHeight": 20
        });
        dom.html('Sorry, no products yet');
        return dom;
    })();
    this.state = {
        filter_1: null,
        filter_2: null,
        filter_3: null
    };
    //private properies
    var current = this.data;
    var self = this;

    ////  DOM ////
    this.$ = {};
    this.$.container = $('.filter');
    this.$.filterList1 = this.$.container.find('.container-filter-1 div');
    this.$.filterList2 = this.$.container.find('.container-filter-2 .type  .drop-down div');
    this.$.filterList3 = this.$.container.find('.container-filter-2 .price .drop-down div');
    this.$.displayZone = $('.result-product');
    ////  METHODS ////
    this.cookieFilter = {};
    //expire date for cookies
    var dtExpire = new Date();
    dtExpire.setTime(dtExpire.getTime() + 3600 * 1000);

    this.cookieFilter.cookie_name = "last_filter";
    this.cookieFilter.create_save = function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    };


    this.cookieFilter.get_save = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };


    this.cookieFilter.delete_save = function(name) {
        self.cookieFilter.create_save(name, "", -1);
    };

    this.cookieFilter.erase_save = function(name, datas) {
        self.cookieFilter.delete_save(name);
        self.cookieFilter.create_save(name, datas, 7);
    };

    this.cookieFilter.init = function(name) {
        var current = {
            last_page: window.location.href,
            last_state: self.state,
        };
        if (document.cookie.indexOf(name) >= 0) { //detect the cookie we want
            console.debug("cookie detected");

            restoreLast = JSON.parse(self.cookieFilter.get_save(name));

            console.info("document.refer : " + document.referrer);
            console.info("current.last_page : " + current.last_page);
            console.info("cookie.last_page : " + restoreLast.last_page);



            if (document.reffer !== current.last_page && current.last_page === restoreLast.last_page) {
                console.log('gogogogogo');
                self.cookie = true;
                console.debug(self.state);
                console.debug(restoreLast.last_state);
                self._initFilters(restoreLast.last_state);

            }
            self.cookieFilter.erase_save(name, JSON.stringify(current));

        } else { // set a new cookie
            console.log("no cookies");

            self.cookieFilter.create_save(name, JSON.stringify(current), 7);
        }
    };

    //filter by type
    this._byType = function(type, current) {
        //special case : select all types
        if (type === "ALL PRODUCTS")
            if (self.state.filter_1 !== "exclusive")
                return this.data;
            else
                return self._byExclusive();
        else {
            //fix for uikit
            if (type === "UIKIT")
                type = "UI KITS";
            var result = current.filter(function(item) {
                item = item || "error";
                if (item === "error") return;
                return item.type.name === type;
            });
            //no result, empty array
            if (typeof result !== 'undefined' && result.length === 0) {
                return "empty";
                //  return null;
            } else {
                return result;
            }
        }
    };

    //filter by price
    //from max to min
    this._byPriceDescending = function(current) {
        var result = current.sort(function(a, b) {
            a = parseInt(a.price) || 0;
            b = parseInt(b.price) || 0;
            return b - a;
        });
        return result || null;
    };
    //from min to max
    this._byPriceAscending = function(current) {
        var result = this._byPriceDescending(current).reverse();
        return result || null;
    };

    //filter by date
    //from new to old
    this._byDateDescending = function(current) {
        var result = this.data.sort(function(a, b) {
            return new Date(b.validated_at) - new Date(a.validated_at);
        });
        return result || null;
    };

    //from old to new
    this._byDateAscending = function(current) {
        var result = this._byDateDescending(current).reverse();
        return result || null;
    };

    //filter exclusives products
    this._byExclusive = function() {
        var result = this.data.filter(function(item) {
            item = item || "error";
            if (item === "error") return;
            return parseInt(item.income) === 1;
        });
        return result || alert("No exclusive products, you may find a bug");
    };

    this._byDeals = function() {
        var result = this.data.filter(function(item) {
            item = item || "error";
            if (item === "error") return;
            return (item.price != item.originalPrice);
        }); 
        return result || alert("No exclusive products, you may find a bug");
    };

    this._byTrendings = function() {
        var result = this.trendings.map(function(trendItem) {
            var search = self.data.filter(function(item) {
                item = item || "error";
                if (item === "error") return;
                return (item.id === trendItem.id);
            });
            return search[0];
        });
        return result;
    };
    this._byPopular = function() {
        var result = this.populars.map(function(popularItem) {
            var search = self.data.filter(function(item) {
                item = item || "error";
                if (item === "error") return;
                return (item.id === popularItem.id);
            });
            return search[0];
        });
        return result;
    };

    this._updateDOM = function(items) {
        var DOMbuffer = $("<div>");

        if (typeof items === "string") {
            return self.$.displayZone.html(self.emptyState);
        } else {
            $.each(items, function(index, item) {
                var render = self._createItem(item);
                DOMbuffer.append(render);
            });
            //dom
            self.$.displayZone.html(DOMbuffer);
            //Likes
            bindShare();
            likes = new Likes(".product-thumb .like");

            //lightboxes
            thumbs = $('.product-thumb');
            thumbs.find("a.buy.do-purchase").on('click', bindLigthbox);
            thumbs.find("a.buy.do-purchase").on('click', bindCardConstraints);
        }
    };

    this._createItem = function(item) {
        item = item || "error";
        if (item === "error") return;
        var shareLink = item.short_url || this.base_url + 'product/' + item.url;
        var template = [
            '<div class="product-thumb'+ ((item.price != item.originalPrice)?' deals':'') + (function() {
                if (item.income !== null && parseInt(item.income) === 1)
                    return ' exclusive-product';
                return "";
            }()) + (function() {
                if (item.likes.already_liked)
                    return ' like';
                return "";
            }()) + '">',
            '<a class="cover" href="' + this.MarketMeRedirect(item.url) + '">',
            '<img src="' + item.files.thumb.url + '" style="background-color:rgba(0, 0, 0,' + Math.ceil(Math.random() * 4 + 1) * 0.05 + ');"/>',
            '<span class="banner-deals">'+
            Math.round( 100 - ((item.price / item.originalPrice))  *100)+'% SALE'+
            '</span>'+
            '</a>',
            '<div class="info">',
            '<div class="title">',
            (function() {
                    if (parseInt(item.income) === 1)
                        return '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10">' + '<path fill-rule="evenodd" d="M 5.25 0 L 6.51 4 L 10.5 4 L 7.29 6.19 L 8.49 10 L 5.25 7.68 L 2.01 10 L 3.21 6.19 L 0 4 L 3.99 4 L 5.25 0 L 5.25 0 Z M 5.25 0" />' + '</svg>';
                }
                ()),
            item.name,
            '</div>',
            '<div class="more">',
            'by ',
            '<a href="' + this.base_url + "account/" + item.user.url + '" class="seller">',
            item.user.pseudo,
            '</a>',
            ' in <a href="' + (this.base_url + "all-products?filter=" + item.type.name) + '" class="category">' + item.type.name + '</a>',
            '</div>',
            '<div class="action">',
            '<div class="like" data-ip="' + this.user_ip + '" data-id="' + item.id + '">',

            '<div class="illu">',
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.5 18.7" style="enable-background:new 0 0 19.5 18.7;" xml:space="preserve">',
            '<defs>',
            '<filter filterUnits="userSpaceOnUse" x="0" y="0" width="19.5" height="18.7">',
            '<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />',
            '</filter>',
            '</defs>',
            '<mask maskUnits="userSpaceOnUse" x="0" y="0" width="19.5" height="18.7" id="mask-2">',
            '<g>',
            '<path d="M9.7,6.6C9.2,5.7,8.2,5,7,5C5.4,5,4,6.4,4,8c0,1.7,1,3.2,2.4,4.5C7.8,13.8,9.7,15,9.7,15',
            's1.9-1.2,3.4-2.5c1.5-1.4,2.4-2.8,2.4-4.5c0-1.7-1.4-3-3-3C11.3,5,10.3,5.7,9.7,6.6z" />',
            '</g>',
            '</mask>',
            '<g transform="translate(2.000000, 37.000000)" class="st2">',
            '<g>',
            '<path d="M7.8-31.4C7.2-32.3,6.2-33,5-33c-1.7,0-3,1.4-3,3c0,1.7,1,3.2,2.4,4.5C5.8-24.2,7.8-23,7.8-23',
            's1.9-1.2,3.4-2.5c1.5-1.4,2.4-2.8,2.4-4.5c0-1.7-1.4-3-3-3C9.3-33,8.3-32.3,7.8-31.4z" />',
            '</g>',
            '</g>',
            '</svg>',

            '</div>',
            '<div class="number">',
            item.likes.count,
            '</div>',

            '</div>',
            '<div class="share">',
            '<div class="illu">',
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.5 18.7" style="enable-background:new 0 0 19.5 18.7;" xml:space="preserve">',
            '<g>',
            '<defs>',
            '<path d="M11.5,14.4v-2.5c0,0-5-1.2-7.5,2.5c0-4.1,3.4-7.5,7.5-7.5V4.4l5,5L11.5,14.4z" />',
            '</defs>',
            '<g>',
            '<path d="M11.5,14.4v-2.5c0,0-5-1.2-7.5,2.5c0-4.1,3.4-7.5,7.5-7.5V4.4l5,5L11.5,14.4z" />',
            '</g>',
            '</g>',
            '</svg>',

            '</div>',
            '<div class="number">',
            //3,
            '</div>',
            '<div class="drop-down">',
            //twitter
            '<a class="share-elmnt" href="https://twitter.com/intent/tweet?text=' + item.name + ' (' + shareLink + ') by ' + item.user.pseudo + 'Get it on MarketMe (@AgenceMe_Market)" target="_blank">',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewbox="0 0 14 11">',
            '<path d="M752.32 785.28C751.83 785.5 751.3000000000001 785.65 750.75 785.7099999999999C751.32 785.3699999999999 751.75 784.8399999999999 751.95 784.1999999999999C751.4200000000001 784.5099999999999 750.84 784.7399999999999 750.22 784.8599999999999C749.72 784.3299999999999 749.01 783.9999999999999 748.22 783.9999999999999C746.71 783.9999999999999 745.49 785.2199999999999 745.49 786.7299999999999C745.49 786.9499999999999 745.51 787.1499999999999 745.5600000000001 787.3499999999999C743.2900000000001 787.2399999999999 741.2800000000001 786.1499999999999 739.9300000000001 784.4999999999999C739.69 784.8999999999999 739.5600000000001 785.3699999999999 739.5600000000001 785.8699999999999C739.5600000000001 786.8199999999999 740.0400000000001 787.6599999999999 740.7700000000001 788.1499999999999C740.33 788.1299999999999 739.9000000000001 788.0099999999999 739.5300000000001 787.8099999999998L739.5300000000001 787.8399999999998C739.5300000000001 789.1599999999999 740.4800000000001 790.2699999999998 741.7300000000001 790.5199999999998C741.5000000000001 790.5799999999997 741.2600000000001 790.6199999999998 741.0100000000001 790.6199999999998C740.8300000000002 790.6199999999998 740.6600000000001 790.5999999999998 740.4900000000001 790.5699999999998C740.8400000000001 791.6499999999999 741.8500000000001 792.4399999999998 743.0500000000001 792.4599999999998C742.11 793.1999999999998 740.9300000000001 793.6299999999998 739.6500000000001 793.6299999999998C739.4300000000001 793.6299999999998 739.21 793.6199999999998 739.0000000000001 793.5999999999998C740.2100000000002 794.3699999999998 741.6500000000001 794.8199999999998 743.1900000000002 794.8199999999998C748.2200000000001 794.8199999999998 750.9600000000002 790.6599999999999 750.9600000000002 787.0499999999998C750.9600000000002 786.9299999999998 750.9600000000002 786.8099999999998 750.9600000000002 786.6999999999998C751.4900000000001 786.3099999999998 751.9500000000002 785.8299999999998 752.3200000000002 785.2799999999999 " fill-opacity="1" transform="matrix(1,0,0,1,-739,-784)"></path>',
            '</svg>',
            '</a>',
            // facebook
            '<a class="share-elmnt" href="https://www.facebook.com/sharer/sharer.php?u=' + shareLink + '" target="_blank">',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewbox="0 0 13 12">',
            '<path d="M780.43 794.74L774.66 794.74C774.3 794.74 774 794.45 774 794.09L774 783.65C774 783.29 774.3 783 774.66 783L785.38 783C785.74 783 786.04 783.29 786.04 783.65L786.04 794.09C786.04 794.45 785.74 794.74 785.38 794.74L782.31 794.74L782.31 790.19L783.8699999999999 790.19L784.1099999999999 788.4200000000001L782.31 788.4200000000001L782.31 787.2900000000001C782.31 786.7800000000001 782.4499999999999 786.4300000000001 783.2099999999999 786.4300000000001L784.17 786.4300000000001L784.17 784.84C784 784.82 783.43 784.77 782.77 784.77C781.38 784.77 780.43 785.6 780.43 787.11L780.43 788.42L778.8599999999999 788.42L778.8599999999999 790.1899999999999L780.43 790.1899999999999L780.43 794.7399999999999Z " fill-opacity="1" transform="matrix(1,0,0,1,-774,-783)"></path>',
            '</svg>',
            '</a>',
            // pinterest
            '<a class="share-elmnt" href="https://pinterest.com/pin/create/button/?url=https%3A//www.facebook.com/sharer/sharer.php?u=' + shareLink + '&media=' + item.files.thumb.url + "&description=" + item.name + " (" + shareLink + ") by " + item.user.pseudo + 'Get it on MarketMe (@AgenceMe_Market)" target="_blank">',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewbox="0 0 12 12">',
            '<path d="M813 783C809.69 783 807 785.69 807 789C807 791.46 808.48 793.57 810.59 794.5C810.58 794.08 810.59 793.57 810.7 793.12C810.8100000000001 792.63 811.47 789.85 811.47 789.85C811.47 789.85 811.28 789.47 811.28 788.9C811.28 788.01 811.79 787.35 812.43 787.35C812.9799999999999 787.35 813.2399999999999 787.76 813.2399999999999 788.25C813.2399999999999 788.8 812.8899999999999 789.62 812.7099999999999 790.38C812.56 791.01 813.03 791.53 813.66 791.53C814.8 791.53 815.56 790.0699999999999 815.56 788.3399999999999C815.56 787.03 814.68 786.04 813.0699999999999 786.04C811.2499999999999 786.04 810.1099999999999 787.4 810.1099999999999 788.91C810.1099999999999 789.4399999999999 810.2699999999999 789.81 810.5099999999999 790.0899999999999C810.6199999999999 790.2199999999999 810.6299999999999 790.28 810.5899999999999 790.43C810.5699999999999 790.54 810.4999999999999 790.8 810.4699999999999 790.91C810.43 791.06 810.31 791.12 810.17 791.06C809.3299999999999 790.7199999999999 808.9399999999999 789.8 808.9399999999999 788.77C808.9399999999999 787.06 810.38 785.02 813.2299999999999 785.02C815.5199999999999 785.02 817.0299999999999 786.68 817.0299999999999 788.4499999999999C817.0299999999999 790.81 815.7199999999999 792.5699999999999 813.7899999999998 792.5699999999999C813.1399999999999 792.5699999999999 812.5299999999999 792.2199999999999 812.3299999999998 791.8199999999999C812.3299999999998 791.8199999999999 811.9799999999998 793.1999999999999 811.8999999999999 793.4699999999999C811.7799999999999 793.93 811.5299999999999 794.3899999999999 811.2999999999998 794.7499999999999C811.8399999999998 794.9099999999999 812.4099999999999 794.9999999999999 812.9999999999999 794.9999999999999C816.3099999999998 794.9999999999999 818.9999999999999 792.3099999999998 818.9999999999999 788.9999999999999C818.9999999999999 785.6899999999999 816.3099999999998 782.9999999999999 812.9999999999999 782.9999999999999 " fill-opacity="1" transform="matrix(1,0,0,1,-807,-783)"></path>',
            '</svg>',
            '</a>',
            // mail
            '<a class="share-elmnt" href="mailto:?subject=' + item.name + 'on MarketMe&body=' + item.name + ' (' + shareLink + ') by ' + item.user.pseudo + 'Get it on MarketMe (@AgenceMe_Market)">',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewbox="0 0 15 11">',
            '<path d="M843.32 795C842.0400000000001 795 841 793.95 841 792.65L841 785L854.33 785L854.33 792.65C854.33 793.9499999999999 853.3000000000001 795 852.01 795ZM842.53 786.75L847.67 791.47L852.8299999999999 786.74Z " fill-opacity="0" fill="#ffffff" stroke-dasharray="0" stroke-linejoin="miter" stroke-linecap="butt" stroke-opacity="1" stroke="#333333" stroke-miterlimit="50" stroke-width="1" transform="matrix(1,0,0,1,-840.5,-784.5)"></path>',
            '</svg>',
            '</a>',
            '</div>',
            '</div>',
            '</div>',
            '<a class="buy ',
            (function() {
                if (parseInt(item.already_buyed) === 1)
                    return 'direct-dl"';
                else
                    return 'do-purchase"';
            }()),
            (function() {
                if (parseInt(item.already_buyed) === 1)
                    return 'href="' + item.files.product[0].url + '"';
            }()),
            '>',
            '<div class="price">',
            (function() {
                if (parseInt(item.already_buyed) === 1)
                    return '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 22"> <path fill-rule="evenodd" d="M 18.62 22 L 1.69 22 C 0.76 22 0 21.24 0 20.31 L 0 15.23 C 0 14.3 0.76 13.54 1.69 13.54 C 2.63 13.54 3.38 14.3 3.38 15.23 L 3.38 18.62 L 16.92 18.62 L 16.92 15.23 C 16.92 14.3 17.68 13.54 18.62 13.54 C 19.55 13.54 20.31 14.3 20.31 15.23 L 20.31 20.31 C 20.31 21.24 19.55 22 18.62 22 Z M 10.15 15.23 C 9.72 15.23 9.29 15.06 8.96 14.73 L 3.88 9.66 C 3.22 9 3.22 7.93 3.88 7.27 C 4.54 6.6 5.61 6.6 6.27 7.27 L 8.46 9.45 L 8.46 1.69 C 8.46 0.76 9.22 0 10.15 0 C 11.09 0 11.85 0.76 11.85 1.69 L 11.85 9.45 L 14.03 7.27 C 14.7 6.6 15.77 6.6 16.43 7.27 C 17.09 7.93 17.09 9 16.43 9.66 L 11.35 14.73 C 11.02 15.06 10.59 15.23 10.15 15.23 Z M 10.15 15.23"></path> </svg> ';
                else
                    return '<span class="initial-price">$'+ (item.originalPrice) +'</span><span class="reduction-final-price">$'+item.price+'</span>';
            }()),
            //'$'+item.price,
            '</div>',
            '<div class="text">',
            (function() {
                if (parseInt(item.already_buyed) === 1)
                    return '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 22"> <path fill-rule="evenodd" d="M 18.62 22 L 1.69 22 C 0.76 22 0 21.24 0 20.31 L 0 15.23 C 0 14.3 0.76 13.54 1.69 13.54 C 2.63 13.54 3.38 14.3 3.38 15.23 L 3.38 18.62 L 16.92 18.62 L 16.92 15.23 C 16.92 14.3 17.68 13.54 18.62 13.54 C 19.55 13.54 20.31 14.3 20.31 15.23 L 20.31 20.31 C 20.31 21.24 19.55 22 18.62 22 Z M 10.15 15.23 C 9.72 15.23 9.29 15.06 8.96 14.73 L 3.88 9.66 C 3.22 9 3.22 7.93 3.88 7.27 C 4.54 6.6 5.61 6.6 6.27 7.27 L 8.46 9.45 L 8.46 1.69 C 8.46 0.76 9.22 0 10.15 0 C 11.09 0 11.85 0.76 11.85 1.69 L 11.85 9.45 L 14.03 7.27 C 14.7 6.6 15.77 6.6 16.43 7.27 C 17.09 7.93 17.09 9 16.43 9.66 L 11.35 14.73 C 11.02 15.06 10.59 15.23 10.15 15.23 Z M 10.15 15.23"></path> </svg> ';
                else
                    return "BUY";
            }()),
            '</div>',
            '</a>',
            '</div>',
            '</div>'
        ];

        return template.join('');
    };

    this._initFilters = function(state) {
        //console.debug(state);
        if(self.cookie){
        var currentCookie = JSON.parse(self.cookieFilter.get_save(self.cookieFilter.cookie_name));
        currentCookie.last_state = self.state;
        self.cookieFilter.erase_save(self.cookieFilter.cookie_name, JSON.stringify(currentCookie));
        console.log(document.cookie);
      }
        var step1 = self.data;

        if (state.filter_1 !== null) {
            $('#container-all-product').removeClass('exclusive-product');
            switch (state.filter_1) {
                case "exclusive":
                    step1 = self._byExclusive();
                    $('#container-all-product').addClass('exclusive-product');
                    break;
                case "hot":
                    step1 = self._byTrendings();
                    break;
                case "deals":
                    step1 = self._byDeals();
                    break;
                case "most-recent":
                    step1 = self._byDateDescending(step1);
                    break;
            }

            this.$.container.find('.container-filter-1 div.' + state.filter_1).addClass("active");
        }

        var step2 = step1;

        if (state.filter_2 !== null) {
            switch (state.filter_2) {
                case "UI KITS":
                    state.filter_2 = 'UIKIT';
                case "UIKIT":
                case "ICONS":
                case "FONTS":
                case "WIREFRAME":
                case "PRESENTATIONS":
                case "THEMES":
                case "OTHERS":
                case "ALL PRODUCTS":
                    //  console.debug("init type " + state.filter_2);
                    step2 = self._byType(state.filter_2, step1);
                    break;
            }
            if (state.filter_2 === "UIKIT") state.filter_2 = "UI KIT";
            this.$.container.find('.container-filter-2 div:contains(' + state.filter_2 + ')').addClass("active");
            this.$.filterList2.closest(".type").find('.current').html(state.filter_2);


        }

        var step3 = step2;

        if (state.filter_3 !== null) {
            switch (state.filter_3) {
                case "ASCENDING":
                case "DESCENDING":
                    //  console.debug("init price " + state.filter_3);

                    var fixNaming = function(str) {
                        str = str.toLowerCase();
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    };

                    state.filter_3 = fixNaming(state.filter_3);
                    step2 = self["_byPrice" + state.filter_3](step2);
                    break;
            }
            this.$.container.find('.container-filter-2 div.' + state.filter_3.toLowerCase()).addClass("active");

        }
        //return step2;
        self._updateDOM(step3);
    };

    // BIG THANKS TO weltraumpirat --> http://stackoverflow.com/a/5448635/6099183
    this._parseUrl = function() {
        function getSearchParameters() {
            var prmstr = window.location.search.substr(1);
            return prmstr !== null && prmstr !== "" ?
                transformToAssocArray(prmstr) : {};
        }

        function transformToAssocArray(prmstr) {
            var params = {};
            var prmarr = prmstr.split("&");
            for (var i = 0; i < prmarr.length; i++) {
                var tmparr = prmarr[i].split("=");
                params[tmparr[0]] = tmparr[1];
            }
            return params;
        }

        var params = getSearchParameters();
        if (params && Object.keys(params).length > 0) {
            this.getArguments = true;
            for (var filter in params) {
                if (filter.indexOf("filter") > -1) {
                    switch (params[filter]) {
                        case "most-recent":
                        case "hot":
                        case "exclusive":
                        case "deals":
                            self.state.filter_1 = params[filter];
                            break;
                        case "UI%20KITS":
                            params[filter] = "UIKIT";
                        case "ICONS":
                        case "PRESENTATIONS":
                        case "THEMES":
                        case "WIREFRAME":
                        case "FONTS":
                        case "OTHERS":
                            self.state.filter_2 = params[filter];
                            break;
                        case "ASCENDING":
                        case "DESCENDING":
                            self.state.filter_3 = params[filter];
                            break;

                    }
                }
            }
            this._initFilters(this.state);
        }
    };

    //to do : unified those 2 func
    ////  EVENTS ////

    this.$.filterList1.on('click', function() {
        var elem = $(this).first();
        if (elem.hasClass('active'))
            self.state.filter_1 = elem.attr('class').replace(' active', '');
        else if (elem.attr('class') === self.state.filter_1)
            self.state.filter_1 = null;

        self._initFilters(self.state);
    });
    this.$.filterList2.on('click', function() {
        var elem = $(this).first();
        if (elem.hasClass('active'))
            self.state.filter_2 = elem.html();
        else if (elem.html() === self.state.filter_2)
            self.state.filter_2 = null;

        self._initFilters(self.state);
    });
    this.$.filterList3.on('click', function() {
        var elem = $(this).first();
        if (elem.hasClass('active'))
            self.state.filter_3 = elem.attr('class').replace(' active', '').toUpperCase();
        else if (elem.attr('class') === self.state.filter_3)
            self.state.filter_3 = null;

        self._initFilters(self.state);
    });

    this.MarketMeRedirect = function($productName) {
        $url = base_url;
        $productName = $productName.toLowerCase();
        $subname = undefined;
        switch ($productName) {
            case 'livo-1':
                $subname = "Livo";
                break;
            case 'cima-1':
                $subname = "cima";
                break;
            case 'arco-1':
                $subname = "arco";
                break;
            case 'bellagicons':
                $subname = "bellagicons";
                break;
            case 'musso-presentation-1':
                $subname = "musso";
                break;
            case 'lecco-wordpress-theme':
                $subname = "lecco";
                break;
            case 'cremia-html-template':
                $subname = "cremia";
                break;
            case 'colicons-set-of-300-icons':
                $subname = "colicons";
                break;
            case 'barni-startup-1':
                $subname = "barni-startup";
                break;
            case 'barni-eshop-1':
                $subname = "barni-eshop";
                break;
            case 'barni-media-1':
                $subname = "barni-media";
                break;

            default:
                break;
        }
        if ($subname)
            return $url + $subname;
        else
            return $url + "product/" + $productName;

    };

    this._parseUrl();
    //this.cookieFilter.init(self.cookieFilter.cookie_name);

}
$(document).ready(function() {

    var f = new Filters(products);
    if (!f.getArguments)
        $('.most-recent').click();

});
