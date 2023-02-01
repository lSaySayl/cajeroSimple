/* Realizar un cajero que tenga las opciones de consultar saldo, retirar, consignar dinero y transferir y salir. debe solo tener tres intentos el usuario. */

let menu = () => {
    let opcion = Number(prompt(`Por favor, escoja la operación que desea realizar\nEscriba 1 para consultar saldo.\nEscriba 2 para retirar\nEscriba 3 para consignar dinero a su cuenta\nEscriba 4 para transferir dinero a otra cuenta\nEscriba 5 para salir del menu de navegación e ingresar otro usuario`))
    return opcion;

}

let saldo = 200000;
let valor = 0;
let repetir = true;
let intentos = 0;
let usuario,password;

while (intentos<3) {
    usuario = prompt(`Por favor, ingrese su usuario`);
    if(usuario === `Camilo`){
        password = prompt(`Por favor, ingrese la clave de su cuenta`);
        if(password === `Camilo`){
            while(repetir) {

                switch(menu()) {

                    case 1:
                        alert(`Su saldo en este momento es de ${saldo}`)
                
                    break;

                    case 2:
                        valor = parseInt(prompt(`Por favor, ingrese el valor a retirar`))
                        if(valor>saldo){
                            alert(`Lo sentimos, el valor a retirar es mayor a su saldo. Recuerde que su saldo es de ${saldo}`);

                        } else {
                            alert(`Su saldo después de este retiro es de ${saldo-valor}`);
                        }

                    break;

                    case 3:
                        valor = parseInt(prompt(`Por favor, ingrese el valor que desea consignar en su cuenta`))
                        saldo = saldo + valor;
                        alert(`Su saldo después de la consignación es de ${saldo}`);

                        
                    break;

                    case 4:
                        valor = parseInt(prompt(`Por favor, ingrese la cantidad de dinero que desea transferir.`))

                        if (valor>saldo) {
                            alert(`Lo sentimos, usted no puede realizar esta transferencia. Esto, porque su saldo es inferior. Recuerde que su saldo es de ${saldo}`);
                        } else {
                            alert (`Su saldo luego de la transferencia es de ${saldo-valor}`);
                        }
                        
                    break;

                    case 5:
                        repetir = false;
                        
                    break;

                }

            
                }
                break;

            }

            else {
                intentos++;
                alert(`Lo sentimos, la contraseña ingresada es incorrecta.Le quedan ${3-intentos} intentos`);
            }


        } else {
            intentos++;
            alert(`Lo sentimos, el usuario es incorrecto. Le quedan ${3-intentos} intentos`);
        }

    }

    if (intentos>=3){
        alert(`Lo sentimos, en esta ocasión ha agotado todos los intentos. Por lo tanto el programa se va a cerrar.`)
    }



