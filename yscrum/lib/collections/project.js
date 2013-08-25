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
}

if(Meteor.isClient){
    //Meteor.subscribe("projects", function(){ alert('subscribed!');});
}