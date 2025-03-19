const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootsrap.Tooltip(t)
})

function handleSubmit(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

    // Muestra la ventana modal
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();

    // Opcional: Aquí puedes agregar código para enviar el formulario a Netlify usando fetch
    // Ejemplo:
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
    }).then(response => {
        console.log('Formulario enviado', response);
        event.target.reset()
    }).catch(error => {
        console.error('Error al enviar el formulario', error);
    });
}