// img_caso1 img src="https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/"
// img_caso2
//img_caso3
function verCaso1(){
    texto = '<img src="https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/"'
    document.getElementById("imagen").innerHTML = "img src='https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/' "
}

function verCaso2(){
    document.getElementById("imagen").innerHTML = "img src='https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/' "
}

function verCaso3(){
    document.getElementById("imagen").innerHTML = "img src='https://pixabay.com/es/photos/familia-sol-amor-abuelos-gente-7392843/' "
}

function sumar() {
    var suma = 8 + 8;
    document.getElementById('imagen').innerHTML = '<h1>' +suma+ '</h1>'
}