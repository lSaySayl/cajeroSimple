let menu = () => {
    return Number(
        prompt(
            `Por favor, escoja la operación que desea realizar\nEscriba 1 para consultar saldo.\nEscriba 2 para retirar\nEscriba 3 para consignar dinero a su cuenta\nEscriba 4 para transferir dinero a otra cuenta\nEscriba 5 para salir del menu de navegación e ingresar otro usuario`
        )
    );
};

let saldo = 200000;
let valor = 0;
let repetir = true;
let intentos = 0;
let usuario, password;



const consultarSaldo = () => {
     alert(`Su saldo en este momento es de ${saldo}`);
};

const retirarDinero = () => {
    valor = parseInt(prompt(`Por favor, ingrese el valor a retirar`));
    if (valor < saldo) {
        alert(`Su saldo después de este retiro es de ${saldo - valor}`);
        
    } else {
        alert(`Lo sentimos, el valor a retirar es mayor a su saldo. Recuerde que su saldo es de ${saldo}`);
    }
   
};

const consignarDinero = () => {
    valor = parseInt(prompt(`Por favor, ingrese el valor que desea consignar en su cuenta`));
    saldo = saldo + valor;
    alert(`Su saldo después de la consignación es de ${saldo}`);
};

const transferirDinero = () => {
    valor = parseInt(prompt(`Por favor, ingrese la cantidad de dinero que desea transferir.`));
    if (valor < saldo) {
        alert(`Su saldo luego de la transferencia es de ${saldo - valor}`);
    
    } else {alert(`Lo sentimos, usted no puede realizar esta transferencia. Esto, porque su saldo es inferior. Recuerde que su saldo es de ${saldo}`);} 
    
};

const ejecutarOperacion = () => {
    switch (menu()) {
        case 1:
            return consultarSaldo();
        case 2:
            return retirarDinero();
        case 3:
            return consignarDinero();
        case 4:
            return transferirDinero();
        case 5:
            return (repetir = false);
    }
};


while (intentos <= 3) {
    usuario = prompt("Por favor, ingrese su usuario");
    if (usuario === "Camilo") {
    password = prompt("Por favor, ingrese la clave de su cuenta");
        if (password === "Camilo") {  
            while (repetir) {
                ejecutarOperacion();
            }    
        } else {
            alert(`La clave ingresada es incorrecta. Tiene ${2-intentos} intentos para ingresar`)
            intentos++
        }
    } 

    else {
    alert(`El usuario ingresado es incorrecto. Tiene ${3 - intentos} intentos para ingresar`);
    intentos++;
    }

}

if (intentos>=3) {
    alert(`Lo sentimos, ha realizado ${intentos} para ingresar y todos fueron erróneos. Por lo tanto el programa se va a cerrar`)
}