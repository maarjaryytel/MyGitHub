//loome objekti sellest klassisi mida oleme kirjeldanud
const gitHub = new GitHub;
const ui = new UI;

//kutsume meetod
gitHub.getUserData() //ta tagastab meile profile ja repos
.then(data=>{ 
    console.log(data.profile);

    ui.showProfile(data.profile);
    ui.showRepos(data.repos);

});
