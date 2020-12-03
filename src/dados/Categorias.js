export default class Categorias {
    
    constructor() {
        this.categorias = [];

        // Array de Observable:
        // componentes que observam as 
        // alterações da classe Categorias
        this._inscritos = []; 
    }

    criarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
    }

    /* Métodos Observable */
    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}