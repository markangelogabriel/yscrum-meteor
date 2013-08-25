Template.add_project.events = {
    'click #submit' : function(){
        //user has to be logged in to use this function
        if(Meteor.userId()){
            var project_name = $("#project_name").val();
            var add_self = document.getElementById("-0").checked; //why does jQuery have no .checked support? o_o
            var message = "Are you sure that you want to add a new project named '"+project_name+"'";

            if(add_self){
                message = message + " and to add yourself as one of this project's developers?";
            }
            else{
                message = message+"?";
            }

            if(confirm(message)){
                if(add_self){
                    Projects.insert({name:project_name, developers:[Meteor.userId()]}, function(error,result){
                        //if successful
                        if(result){
                            window.location="/projects";
                            //Session.set('current_page', "all_projects");
                            //ticker.alertSuccess("Project "+project_name+" has been added.");
                        }
                        else{
                            window.location="/main";
                            Session.set('current_page', "main");
                            // ticker.alertError("Something bad occurred while processing your data.");
                        }
                    });
                }
                else{
                    Projects.insert({name:project_name, developers:[]}, function(error,result){
                        //if successful
                        if(result){
                            window.location="/projects";
                            //Session.set('current_page', "all_projects");
                            //ticker.alertSuccess("Project "+project_name+" has been added.");
                        }
                        else{
                            window.location="/main";
                            Session.set('current_page', "main");
                           // ticker.alertError("Something bad occurred while processing your data.");
                        }
                    });
                }
            }
        }
        else{
            alert("You must be logged in to use this function!");
            Session.set('current_page', "main");
        }
    },
    'onblur #project_name' : function(){
        console.log('onblur');
    }
};