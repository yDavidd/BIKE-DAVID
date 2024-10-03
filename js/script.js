function modal() {
    Swal.fire({
        title: "Zé Neto e Cristiano",
        width: 600,
        padding: "3em",
        color: "#ffffff",
        background: "#fff url(../img/zenetoecri.jpg)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("../img/nyan-cat-nyan.gif")
          left top
          no-repeat
        `
    });
}

function adicionar() {
    Swal.fire({
        title: "Item Adicionado ao carrinho",
        icon: "success"
    });
}
function confirmar(){
    Swal.fire({
        title: "Deseja finalizar a compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra finalizada",
            icon: "success"
          });
        }
      });
}

function ModalHtml() {
    Swal.fire({
        title: "Do Rock",
        text: "H a r d R o c k",
        icon: "success",
        html: `
            <img src="../img/do rock.jpg">
            <style>
                img{
                    width: 450px;
                    height: 350px;
                }
            </style>
        `
    });
}