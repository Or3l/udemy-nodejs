var getUser = (id, callback) => {
    var userObject = {
        id : id,
        name : 'orel'
    };
    setTimeout(()=>{callback(userObject)}, 3000);
};

getUser(31, (user) => {
    console.log(user);
});