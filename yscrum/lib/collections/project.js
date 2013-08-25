/*  Projects have :
 *      1) id
 *      2) name
 *      3) users (foreign key in collection Meteor.users)
 */
Projects = new Meteor.Collection("projects");

if(Meteor.isServer){
    /*Meteor.publish("projects", function(){
        return Projects.find();
    });                 */

// Fill the collection with some initial data if it's empty
    Meteor.startup(function(){
        if(Projects.find().count()==0){
            Projects.insert({name:"Get 1/4 System", users:[]});
            Projects.insert({name:"YSES Online", users:[]});
        }

        console.log("Projects count = "+Projects.find().count());
    });
}

if(Meteor.isClient){
    Meteor.subscribe("projects", function(){ alert('subscribed!');});
}