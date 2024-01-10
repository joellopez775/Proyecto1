function resta(){
    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var resta=0;
    resta=v1-v2;

    document.getElementById("resultado").value=resta;
}
