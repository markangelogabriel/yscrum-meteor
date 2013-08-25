Handlebars.registerHelper("getPageBySession", function(){
    var current_page=Session.get('current_page')?Session.get('current_page'):"main";
    var content = Template[current_page]();

    return content;
});
