exports.signUp = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5000/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord
            })
        });
        const data = await res.json();
        console.log(data.newUser.username);
        setter(data.newUser.username);
    } catch (error) {
        console.log(error);
    }
};

exports.allUsers = async(users, setter)=>{
    try {
        const res = await fetch('http://localhost:5000/user',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'users':users,
                })
        });
        const data = await res.json();
        console.log(data.users);
        setter(data.users);
    } catch (error) {
        console.log(error);
    }
};