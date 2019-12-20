class GitHub{
    constructor(){ //konstruktor ehitab andmetest objekti
        this.client_ID =  '9405d814c0add9a9bc18' ;//this ehitab andmetest objekti üles
        this.client_secret = 'ee0ded1861ceaf2d993f516e58150e5352139123';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'maarjaryytel'
        this.apiUrl = 'https://api.github.com/users/';
    }

    //kutsun meetodi, mis kutsub serverist andmed, ta tagastab mulle
    //serveri vastuse

    async getUserData(){
            let urlProfile =`${this.apiUrl}${this.user}?client_id= ${this.client_ID}&client_secret=${this.client_secret}`;
         //letiga dekla muutujad
            let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`
            //kutsume andmed välja, salvestab profile, ta ootab selles profiles kuni saab andmed
            const profileResponse = await fetch(urlProfile); //fetch on "püüa ja too tagasi"
            const reposResponse = await fetch(urlRepos);

            const profile = await profileResponse.json(); //tahame need andmed json formaadis
            const repos = await reposResponse.json();

            return {
                profile,
                repos
            }
    }
}
