class UI{
    constructor(){
        this.profile=document.querySelector('#profile');
        
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
currentAlert.remove();
        }
    }
    showAlert(message,classname){
        this.clearAlert();
    const div = document.createElement('div');
    div.className = classname;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div,search);
    setTimeout(() =>this.clearAlert(), 2000);
    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card border-primary mb-3">
  <div class="card-header"><h3 class="text-info">${user.name}</h3></div>
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">

            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
            <a href="${user.html_url}" class="btn btn-primary" target="_blank">View Profile</a>
          </div>
          <div class="col-md-9">
                <span class="badge badge-primary">Public Git: ${user.public_repos}</span>
                <span class="badge badge-success">Follower Git: ${user.followers}</span>
                <span class="badge badge-secondary">Public Git: ${user.following}</span>
                <br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
        </div>
      </div>
      </div>
      <div class="card border-primary mb-3">
            <div class="card-header"><h3 class="page-heading mb-3">Latest Repos</h3><div id="repos" class="container"></div></div>
    `;
    }
    showRepos(repos){
     let output = '';
     repos.forEach(repo => {
         output+=`    
        
                <div class="card card-body mb-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="${repos.html_url}" target="_blank">${repo.name}</a>
                      </div>
                      <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Fork: ${repo.fork_count}</span>
                      </div>
                    </div>
                  </div>
                  </div>`;
     });
    document.querySelector('#repos').innerHTML = output; 
    }
}