const searchUser = document.querySelector('#searchUser');
const github =  new Github();
const ui = new UI();
searchUser.addEventListener('change',e=>{
// get input text
const userText = e.target.value;
if(userText !== ''){
github.getUser(userText)
.then(res => {
if(res.profile.message === 'Not Found'){
    // show alert
    
    ui.showAlert('User Not Found','alert alert-danger');
    
    ui.clearProfile();
}else{
    // show data
    ui.showProfile(res.profile);
    ui.showRepos(res.repos);
}
}
)
.catch(err=>console.log(err));
}else{
    // clear profile
    ui.clearProfile();
}
});