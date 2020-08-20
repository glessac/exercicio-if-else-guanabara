function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) { //se os dados estão inválidos
        alert('Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ""

        //criando a tag img foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //

        if (fSex[0].checked) /* Se o primeiro estiver marcado */ {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'fotos007/bebem.png')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'fotos007/jovemm.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'fotos007/adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos007/idosom.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'fotos007/bebef.png')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'fotos007/jovemf.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'fotos007/adultof.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos007/idosof.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // para adicionar o elemento img
    }
}