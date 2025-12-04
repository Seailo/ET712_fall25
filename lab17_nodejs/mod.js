const helper = function(data){
    return '${data} data is logged in!'
}
const id =(userid)=>{
    return '${userid}'
}

const email =(useremail)=>{
    return useremail
}

module.exports = {helper, id, email}