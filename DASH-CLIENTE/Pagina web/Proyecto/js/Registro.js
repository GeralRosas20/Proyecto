function registro(){
  swal({
  title: "Estas seguro?",
  text: "asegurese que todos los datos esten completados",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("¡Usted a sido registrado con exito!", {
      icon: "success",
    });
  } else {
    swal("¡Ha cancelado su registro!");
  }
});
}
