if(Meteor.isClient && Meteor.startup){
    Accounts.config({
        sendVerificationEmail:false,
        forbidClientAccountCreation:false
    });

    Accounts.ui.config({
        requestPermissions: {
            facebook: ['user_likes'],
            github: ['user', 'repo']
        },
        requestOfflineToken: {
            google: true
        },
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
}