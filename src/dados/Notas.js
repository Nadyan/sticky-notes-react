export default class ArrayNotas {

    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletaNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }

       /* Métodos Observable */
       inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}