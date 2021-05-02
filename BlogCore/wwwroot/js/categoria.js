var datatable;

$(document).ready(function () {
    cargarDatatable();
});


function cargarDatatable() {
    datatable = $("#tblCategorias").DataTable({
        "ajax": {
            "url": "/Admin/Categorias/GetAll",
            "type": "GET",
            "datatype" : "json"
        },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "nombre", "width": "50%" },
            { "data": "orden", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                                <a href='/Admin/Categorias/Edit/${data}' class='btn btn-success text-white' style='cursor:pointer;width:100px;'>
                                <i class="fas fa-edit"></i> Editar</a>
                                &nbsp;
                                <a onclick=Delete("/Admin/Categorias/Delete/${data}") class='btn btn-danger text-white' style='cursor:pointer;width:100px;'>
                                <i class="fas fa-trash-alt"></i> Borrar</a>
                            </div>
                            `;
                }, "width" : "30%"
            }
        ],
        "language": {
            "emptyTable" : "No hay registros."
        },
        "width" : "100%" 
    });
}

function Delete(url) {
    Swal.fire({
        title: '<strong>Estas seguro de querer <u>BORRARLO</u>?</strong>',
        html:
            'Este contenido ya <b>NO</b>, ' +
            'puede recuperarse ' +
            'al eliminarlo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'DELETE',
                url: url,
                success: function (data) {
                    if (data.success) {
                        datatable.ajax.reload();

                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            });
        }
    })
}