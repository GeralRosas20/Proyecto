$(document).ready(function() {
	$('#example').DataTable({
		responsive: "true",
		dom:'Bfrtilp',
		buttons:[
		{
			extend: 'excelHtml5',
			text: '<i class="fad fa-file-excel"></i> ',
			titleAttr: 'Exportar a excel',
			className: 'btn btn-success'
		},
		{
			extend: 'pdfHtml5',
			text: '<i class="fad fa-file-pdf"></i>',
			titleAttr: 'Exportar a PDF',
			className: 'btn btn-danger'
		},
		{
			extend: 'print',
			text:   '<i class="fad fa-print"></i>',
			titleAttr: 'Imprimir',
			className: 'btn btn-info'
		},
		]
	});

	});
