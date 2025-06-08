document.addEventListener("DOMContentLoaded", () => {
    const btnLimpiar = document.getElementById("limpiar");
    const btnCargar = document.getElementById("cargar");
    const btnGuardar = document.getElementById("guardar");
    const txtArea = document.getElementById("txtArea");

    if(btnLimpiar && txtArea){
        btnLimpiar.addEventListener("click", () => {
            txtArea.value = "";
            txtArea.focus();
        });
    }

    if(btnCargar && txtArea){
        btnCargar.addEventListener("change", (event) =>{
        const file = event.target.files[0];

        if(file){
            const ruta = file.name.split('.').pop().toLowerCase();

            if(ruta !== "pklfp"){
                alert("Archivo Incorrecto, solo se permiten archivos .pkfp");
                btnCargar.value = "";
                return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                txtArea.value = e.target.result;
                alert("Archivo Cargado Correctamente");
            };
            reader.readAsText(file);
        };
        });
    }

    if(btnGuardar && txtArea){
        btnGuardar.addEventListener("click", () => {
            const informacion = txtArea.value;

            const datos = new Blob([informacion], {type: "text/plain;charset=utf-8"});
            const url = URL.createObjectURL(datos);
            const a = document.createElement("a");


            a.href = url;
            a.download = "datos_jugadores.pklfp";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});