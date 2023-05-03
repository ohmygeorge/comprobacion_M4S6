$(function () {
    class Pais {
        constructor(diferenciaChile, timeOut, divHora) {
            this.diferenciaChile = diferenciaChile;
            this.timeOut = timeOut;
            this.divHora = divHora;
        }

        mostrarHora = () => {
            let ms = new Date().getTime() + this.diferenciaChile * 3600 * 1000;
            let hora = new Date(ms);
            let horaPais = `${hora.toLocaleTimeString('es-CL')}`;
            $(`${this.divHora}`).html(horaPais);
        };
        reloj = () => {
            setTimeout(() => {
                setInterval(this.mostrarHora, 1000);
            }, this.timeOut);
        };
    }

    let chile = new Pais(0, 0, '#santiago');
    let paris = new Pais(4, 4000, '#paris');
    let londres = new Pais(3, 8000, '#londres');
    let ny = new Pais(-2, 12000, '#nuevaYork');
    let sanPet = new Pais(6, 16000, '#sanPetersburgo');
    let beijing = new Pais(11, 20000, '#beijing');
    let seul = new Pais(12, 24000, '#seul');

    chile.reloj();
    paris.reloj();
    londres.reloj();
    ny.reloj();
    sanPet.reloj();
    beijing.reloj();
    seul.reloj();
});