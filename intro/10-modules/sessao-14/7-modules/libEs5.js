// Modulo em ES5

var libEs5 = (function () {

    //console.log('teste do modulo ES5');
    var nome = "Joao";

    function dizerOla() {
        return `Olá ${nome} bem vindo.`;
    }

    return {
        //oi: dizerOla,
        //dizerOla: dizerOla,
        dizerOla, // short hand proterties ES9

    }

})();