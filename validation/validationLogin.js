const validator = require("validator")


const sanitization = (data)=> {
    return{
        username : validator.escape(validator.trim(data.username)),
        password : validator.trim(data.password)
    }
}

const loginVal = (dt)=> {
    let message = []
    let data = sanitization(dt)
    if(validator.isEmpty(data.username) && validator.isEmpty(data.password)){
        message.push("Username Dan Password Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.username)){
        message.push("Username Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.password)){
        message.push("Password Tidak Boleh Kosong")
    }
    // if(validator.isLength(data.username,{min : 3,max : 12})){
    // }else{
    //     message.push("Panjang Username Minimal 3 Maximal 12")
    // }
    // if(validator.isLength(data.password,{min : 6,max : 8})){
    // }else{
    //     message.push("Password Minimal 6 Maximal 8")
    // }
    return {data,message}
}


module.exports = loginVal