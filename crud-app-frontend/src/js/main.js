import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
    $("h1").click(function() {
        $(this).css("color", "blue");
    });
});
