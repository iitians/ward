/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 pjwards.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * ==================================================================================
 *
 * Provides functions for whole site
 */

$(function () {
    // First, checks if it isn't implemented yet.
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

    if (!Date.prototype.format) {
        Date.prototype.format = function (f) {
            if (!this.valueOf()) return " ";

            var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
            var d = this;

            return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
                switch ($1) {
                    case "yyyy":
                        return d.getFullYear();
                    case "yy":
                        return (d.getFullYear() % 1000).zf(2);
                    case "MM":
                        return (d.getMonth() + 1).zf(2);
                    case "dd":
                        return d.getDate().zf(2);
                    case "E":
                        return weekName[d.getDay()];
                    case "HH":
                        return d.getHours().zf(2);
                    case "hh":
                        return ((h = d.getHours() % 12) ? h : 12).zf(2);
                    case "mm":
                        return d.getMinutes().zf(2);
                    case "ss":
                        return d.getSeconds().zf(2);
                    case "a/p":
                        return d.getHours() < 12 ? "오전" : "오후";
                    default:
                        return $1;
                }
            });
        };
    }

    if (!String.prototype.string) {
        String.prototype.string = function (len) {
            var s = '', i = 0;
            while (i++ < len) {
                s += this;
            }
            return s;
        };
    }

    if (!String.prototype.zf) {
        String.prototype.zf = function (len) {
            return "0".string(len - this.length) + this;
        };
    }

    if (!Number.prototype.zf) {
        Number.prototype.zf = function (len) {
            return this.toString().zf(len);
        };
    }

    $("#search_input").keypress(function (event) {
        var key_code = event.keyCode || window.event.keyCode;
        if (key_code == 13) document.getElementById('search_form').submit();
    });

    window.mobilecheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    window.mobileAndTabletcheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
});


/**
 * Generate Notify
 */
jui.ready(["ui.notify"], function (notify) {
    var handler = {
        show: function (data) {
            console.log("show : " + JSON.stringify(data));
        },
        hide: function (data) {
            console.log("hide : " + JSON.stringify(data));
        },
        click: function (data) {
            console.log("click : " + JSON.stringify(data));
        }
    };

    notify_1 = notify("body", {
        position: "top-right",
        event: handler,
        timeout: 2000,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_2 = notify("body", {
        position: "top-left",
        event: handler,
        timeout: 2000,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_3 = notify("body", {
        position: "top",
        event: handler,
        timeout: 2000,
        padding: {
            top: 100
        },
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_4 = notify("body", {
        position: "bottom",
        event: handler,
        timeout: 2000,
        distance: 30,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_5 = notify("body", {
        position: "bottom-left",
        event: handler,
        timeout: 2000,
        showDuration: 1000,
        hideDuration: 1000,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_6 = notify("body", {
        position: "bottom-right",
        event: handler,
        timeout: 2000,
        showEasing: "linear",
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_top_submit = function (type, data) {
        if (type == 1) notify_1.add(data);
        if (type == 2) notify_2.add(data);
        if (type == 3) notify_3.add(data);
        if (type == 4) notify_4.add(data);
        if (type == 5) notify_5.add(data);
        if (type == 6) notify_6.add(data);
    }
});


/**
 * Generate Time Since
 *
 * @param date
 * @returns {string}
 */
var timeSince = function (date) {
    if (typeof date !== 'object') {
        date = new Date(date);
    }

    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    return interval + ' ' + intervalType + ' ago';
};


/**
 * Get Today
 * @returns {string}
 */
var getToday = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return yyyy + '-' + mm + '-' + dd;
}


/**
 * Get Alert
 *
 * @param user_id
 */
var getAlert = function (user_id) {
    var ward_url = '/api/wards/ward_alert/';

    var ward_display = function (id, fb_url, name, date, message) {
        return '<li><a  onclick="updateWard({0},\'{1}\');getAlert({2});"><div><strong>{3}</strong><span class="pull-right text-muted"><em>{4}</em></span></div><div>{5}</div></a></li><li class="divider"></li>'.format(id, fb_url, user_id, name, date, message)
    }

    var ward_fun = function (source) {
        $("#alert").empty();

        var results = source["results"];
        for (var i in results) {
            var row = results[i];
            var object = row["post"];
            if (!object) return;

            var fb_url = "https://www.facebook.com/" + object.id;
            var message = object["message"] ? String(object["message"]).replace(/</gi, "&lt;") : "(photo)";
            message = message.length < 100 ? message : message.substring(0, 100) + "...";
            $("#alert").append(ward_display(row["id"], fb_url, object["user"]["name"], timeSince(object["updated_time"]), message));
        }

        /**
         * Ring Animate
         */
        if (results.length > 0) {
            $("#alert_icon").css("color", "#ff1493");
            $("#alert_icon_bell").addClass("faa-ring animated");
        } else {
            $("#alert_icon").css("color", "");
            $("#alert_icon_bell").removeClass("faa-ring animated");
        }

        $("#alert").append('<li><a class="text-center" href="/alert"><strong>Read All Messages</strong><i class="fa fa-angle-right"></i></a></li>');
        ;
    }

    if (!user_id) {
        return;
    }

    data = {
        limit: 5,
        user_id: user_id
    }

    getAjaxResult(ward_url, data, ward_fun);
}


/**
 * Save as image with canvas
 *
 * @param id
 * @param filename
 */
var saveAsImage = function (id, filename) {
    html2canvas($("#" + id), {
        onrendered: function (canvas) {
            theCanvas = canvas;
            document.body.appendChild(canvas);

            // Convert and download as image
            $("#download_img_btn").attr("href", canvas.toDataURL("image/png"));
            $("#download_img_btn").attr("download", filename + ".png");
            $("#img-out").empty();
            $("#img-out").append(canvas);
            // Clean up
            //document.body.removeChild(canvas);
        }
    });
}


/**
 * Get some day
 *
 * @param day
 * @returns {*}
 */
var getSomeDate = function (day) {
    if (typeof(day) != "number" && day % 1 != 0) return " ";

    return new Date(Date.parse(new Date()) - day * 1000 * 60 * 60 * 24)
};
