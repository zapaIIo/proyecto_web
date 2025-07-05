


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
    let texto  = "<img src='https://media.istockphoto.com/id/1473162531/photo/help-support-and-wheelchair-with-nurse-and-old-man-for-disability-rehabilitation-or-healing.jpg?s=2048x2048&w=is&k=20&c=9b9S2YAfsPsw1LZeHUhd4zulIeWgviWh04Vai7U24lY='> "
    document.getElementById("imagen").innerHTML = texto
}

