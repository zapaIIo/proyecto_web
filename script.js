


function verCaso1() {
    // Esto crea el string HTML correcto para la imagen
    let texto = '<img src="/imagenes/familia.jpg" alt="Familia">';
    // Inserta la imagen dentro del elemento con id "imagen"
    document.getElementById("imagen").innerHTML = texto;
}

function verCaso2(){
    let texto = "<img src='https://cdn.pixabay.com/photo/2015/07/15/19/59/health-846863_1280.jpg'> ";
    document.getElementById("imagen").innerHTML = texto;
}

function verCaso3(){
    document.getElementById("imagen").innerHTML = "img src='https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/' "
}

function sumar() {
    var suma = 8 + 8;
    document.getElementById('imagen').innerHTML = '<h1>' +suma+ '</h1>'
}