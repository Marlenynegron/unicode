// ejercicio 1: expresion = /\p{Sc}/gu;
//ejercicio 2: let expresion = /\p{Z}/gu;
//ejercicio 3: expresion =/[\p{Script=Latin}\p{Script=Greek}]/gu;
//ejercicio 4: let expresion = /[\p{L}\p{N}]/gu;
let texto ="saltos de linea abc123"; 
let expresion = /\p{Z}/gu;
console.log (texto.match(expresion))
