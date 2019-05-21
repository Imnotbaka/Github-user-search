class Github {
  constructor() {
    this.client_id = "102acf152606e9b116d1";
    this.client_secret = "79bc303c155ee6762c2d6b35b69c5514f869dbf6";
    this.link = "https://api.github.com/users/";
    this.repos_count = 5;
    this.repos_sort = 'create: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(
      `${this.link}${user}?client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
  const repoResponse = await fetch( `${this.link}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
    this.client_secret
  }`)
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile,repos };
  
  }
  

}
