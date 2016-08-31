$(function() {
    // Determines if str ends with suffix.
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    // Highlight the proper navbar link for the current page. Loop through each
    // link checking to see if the current pathname of the URL ends with the
    // link's href. If so, remove existing active class and add active class to
    // the li associated with this link.
    $('.navbar-nav').find('a').each(function(i, link) {
        var $link = $(link);
        // location.pathname for:
        // http://www.princeton.edu/~mjs3/soc504_s2015/project.shtml#pick
        // will be:
        // /~mjs3/soc504_s2015/project.shtml
        if (endsWith(location.pathname, $link.attr('href'))) {
            // This finds the existing active link in the navbar and removes the
            // active class from it.
            $('.navbar-nav .active').removeClass('active');
            // This adds the active class to the parent li element that our
            // current current link element belongs to.
            $link.closest('li').addClass('active');
        }
    });
});
