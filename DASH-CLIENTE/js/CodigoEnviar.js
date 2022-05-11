function enviar() {
	swal({
		title: "Esta seguro de guardar este producto?",
		text: "Asegurese que los datos sean correcto",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			swal("Su producto ha sido guardado correctamente", {
				icon: "success",
			});
		} else {
			swal("Ha cancelado guardar su producto");
		}
	});
}

function cancelar(){
	swal("Esta seguro?", {
		dangerMode: true,
		buttons: true,
	});
}