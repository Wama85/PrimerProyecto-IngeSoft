import {validarmatriz, validarposicion} from "./validador";


describe("Validar El comando ingresado para una posición en una matriz",()=>{
    it("Deberia mostrar que es menor a 20x20",()=>{
        expect(validarmatriz(18,18)).toEqual({fila:18,columna:18,mensajeinvalidacion:"",mensajevalidacion:"18 X 18"});
    });

    it("Validar la posición final del primer comando (I)",()=>{

        expect(validarposicion('5,5/1,2N/I')).toEqual('1,2O');
    });
    it("Validar la posición final del primer comando (D)",()=>{

        expect(validarposicion('5,5/1,2N/D')).toEqual('1,2E');
    });
    it("Validar la posición final del comando (A)",()=>{

        expect(validarposicion('5,5/1,2N/A')).toEqual('1,3N');
    });

});