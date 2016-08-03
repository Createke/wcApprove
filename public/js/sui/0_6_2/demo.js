$(function () {
    'use strict';
    //加载提示符
    $(document).on("pageInit", "#app", function(e, id, page) {
        console.log("test pageInit");
    });
    $.init();
});
