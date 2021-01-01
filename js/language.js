$(function() {
    // https://stackoverflow.com/a/43515426
    $('#toggle-event').change(function() {
       document.body.className = $(this).data($(this).prop("checked").toString());
       console.log(document.body.className);
    });   
  });