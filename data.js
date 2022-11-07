function price() {
    var tes = document.getElementById("Prosesor").value;
    document.getElementById("hargaprosesor").value=tes;

    var tes = document.getElementById("Motherboard").value;
    document.getElementById("hargamotherboard").value=tes;

    var tes = document.getElementById("Ram").value;
    document.getElementById("hargaram").value=tes;

    var tes = document.getElementById("Storage").value;
    document.getElementById("hargastorage").value=tes;

    var tes = document.getElementById("VGA").value;
    document.getElementById("hargavga").value=tes;

    var tes = document.getElementById("Casing").value;
    document.getElementById("hargacasing").value=tes;

    var tes = document.getElementById("PSU").value;
    document.getElementById("hargapsu").value=tes;

    var tes = document.getElementById("CPUCOOLER").value;
    document.getElementById("hargacpucooler").value=tes;

    let total = (hargaprosesor+hargaram+hargastorage+hargavga+hargacasing+hargapsu+hargacpucooler);
    document.getElementById("totalharga").value=total;
     

}



