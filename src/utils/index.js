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

exports.login = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord,
                
            })
        });
        const data = await res.json();
        console.log(data.users);
        setter(data.users.username);
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
        console.log(data.result);
        setter(data.result);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteUser = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5000/user',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord
            })
        });
        const data = await res.json();
        console.log(data.deletes);
        setter(data.deletes);
    } catch (error) {
        console.log(error);
    }
};

exports.updateUser = async(userName,old_password, new_userName, email, password, setter)=>{
    try {
        const res = await fetch('http://localhost:5000/user',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'password': old_password,
                'new_username':new_userName,
                'new_email': email,
                'new_password': password
            })
        });
        const data = await res.json();
        console.log(data.userUpdate);
        setter(data.userUpdate);
    } catch (error) {
        console.log(error);
    }
};