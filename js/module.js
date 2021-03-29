function postUnderstandData(userid,moduleid,dateformat) {
    jQuery(function ($) {

        $.post(url_ajax_record, { moduleid: moduleid, userid: userid, dateformat: dateformat, rnd: Math.random()}, function (response) {

        });
    });
}
