const bntSubmit = document.getElementById('send')

bntSubmit.addEventListener('click', () =>{
    event.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;

    
    const datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        fecha: fecha,
    }

    const opcion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(datosFormulario)
    }

    
    fetch("https://jsonplaceholder.typicode.com/users", opcion)
        .then(response => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('La solicitud no fue exitosa');
              }
        })
        .then(data => {
            console.log(data);
        })
} )

