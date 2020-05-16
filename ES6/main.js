import api from './api';

class App {
    constructor () {
        this.repositores = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input');

        this.registerrendlers();
    }

    registerrendlers(){
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    async addRepository (event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length == 0)
            return;

        this.setLoader(true);

        try{
            const response = await api.get(`/repos/${repoInput}`);

            console.log(response);

            const {name,description, owner:{avatar_url, html_url}} = response.data;
            this.repositores.push({
                name,
                description,
                avatar_url,
                html_url,
            });
        
            this.render();
        } catch(err) {
            alert('Repositório não existe!');
        }

        this.setLoader(false);
    }
    
    render() {
            this.listEl.innerHTML = '';
            //o map faz algum tipo de alteração, o foreach so percorre.
            this.repositores.forEach(repo => {
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src',repo.avatar_url);

                let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

                let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));
                
                let linkEl = document.createElement('a');
                linkEl.setAttribute('href',repo.html_url);
                linkEl.appendChild(document.createTextNode('Acessar'));

                let listItemEl = document.createElement('li');
                listItemEl.appendChild(imgEl);
                listItemEl.appendChild(titleEl);
                listItemEl.appendChild(descriptionEl);
                listItemEl.appendChild(linkEl);

                this.listEl.appendChild(listItemEl);
            });
    }

    setLoader (loading) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }

    }
}

new App();