var Router = Backbone.Router.extend({
    routes: {
        "":                 "main", //this will be http://your_domain/
        "help":             "help",  // http://your_domain/help
        "projects":         "all_projects",
        "add_project":      "add_project"
    },

    main: function() {
        Session.set('current_page','main');
    },

    help: function() {
        Session.set('current_page','help');
    },

    all_projects: function(){
        Session.set('current_page','all_projects');
    },

    add_project: function(){
        Session.set('current_page','add_project');
    }
});

var app = new Router;
Meteor.startup(function () {
    Backbone.history.start({pushState: true});
});