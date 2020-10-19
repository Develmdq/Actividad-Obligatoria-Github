document.addEventListener( "DOMContentLoaded", function () {
    document.querySelector( '#submit' ).addEventListener( 'click', validar );
} );


function validar( e ) {
    e.preventDefault();
    let usuario = document.querySelector( '#usuario' ).value;
    let clave = document.querySelector( '#clave' ).value;
    let todoOk = true

    if ( usuario.length === 0 || clave.length === 0 ) {
        alert( 'Complete los campos vacios !!' );
        todoOk = false
    }

    if ( usuario.indexOf( '@' ) === -1 ) {
        alert( 'Falta el arroba en el usuario !!' );
        todoOk = false
    }

    if ( todoOk === true ) {
        alert( 'Bienvenido!!' )
    }

}
