Template.collection_all_projects.projects = function(){
    return Projects.find({}, {sort:{name:1}});
}