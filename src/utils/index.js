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

exports.allUsers = async(setter)=>{
    try {
        const res = await fetch('http://localhost:5000/user',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            
        });
        const data = await res.json();
        console.log(data.allUsers);
        setter(data.allUsers);
    } catch (error) {
        console.log(error);
    }
};