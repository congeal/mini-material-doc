// M.AutoInit();
$(document).ready(function () {
    //Side navigation
    $('.sidenav').sidenav();
    $('.delayed-link a').click(function (e) {
        e.preventDefault();
        var linkUrl = $(this).attr('href');
        setTimeout(function (url) { window.location = url; }, 400, linkUrl);
    });

    //TOC
    if ($('.table-of-contents').size() != 0) {
        let toc_l = $(".page_content h2").addClass('scrollspy')
            .map(function (_, header) {
                return "<li><a href='#" + header.id + "'>" + header.innerHTML + "</a></li>"
            });
        $(".table-of-contents").html(toc_l.toArray().join('\n'))
        $('.scrollspy').scrollSpy();
        $('.row .table-of-contents').pushpin({ top: $('.row').offset().top, offset: 75 });
    }
});