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
        this.notificar();
    }

    /* Métodos Observable */
    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}