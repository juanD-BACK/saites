const nome = "Juan";
const anoAtua = 2025;
const anoNacimento = 2005;


let idade = (anoAtua - anoNacimento);


console.log("Olá,sou" ,nome,"\ntenho ", idade );

if  (idade > 18) {
    console.log("e sou major de idade!!");
    process.exit();

} else (idade < 18) 
  console.log("e sou menor de idade. ");