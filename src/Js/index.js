//Professora, aqui está o codigo corrigido, a explicação do calculo está logo abaixo.


document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form")
    const inputDia = document.getElementById("day")
    const inputMes = document.getElementById("month")
    const inputAno = document.getElementById("year")
    const spanErroDia = inputDia.nextElementSibling
    const spanErroMes = inputMes.nextElementSibling
    const spanErroAno = inputAno.nextElementSibling
    const resultadoAnos = document.querySelector(".year")
    const resultadoMeses = document.querySelector(".month")
    const resultadoDias = document.querySelector(".day")

    formulario.addEventListener("submit", function (event) {
        event.preventDefault()

       
        let diaNasc = parseInt(inputDia.value)
        let mesNasc = parseInt(inputMes.value)
        let anoNasc = parseInt(inputAno.value)
        let dataAtual = new Date()
        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth() + 1 
        let anoAtual = dataAtual.getFullYear()

        let erro = false

        
        spanErroDia.classList.add("hide")
        spanErroMes.classList.add("hide")
        spanErroAno.classList.add("hide")

      
        if (!diaNasc || diaNasc < 1 || diaNasc > 31) {
            spanErroDia.classList.remove("hide")
            spanErroDia.textContent = "Dia inválido"
            erro = true
        }

        if (!mesNasc || mesNasc < 1 || mesNasc > 12) {
            spanErroMes.classList.remove("hide")
            spanErroMes.textContent = "Mês inválido"
            erro = true
        }

        if (!anoNasc || anoNasc < 1910 || anoNasc > anoAtual) {
            spanErroAno.classList.remove("hide")
            spanErroAno.textContent = "Ano inválido"
            erro = true
        }

        if (erro) return;

        // Cálculo da idade
        let idadeAnos = anoAtual - anoNasc
        /*Subtrai o ano de nascimento do ano atual
        Exemplo: Se você nasceu em 2000 e estamos em 2025, a conta seria; 2025 - 2000 = 25 anos */
        let idadeMeses = mesAtual - mesNasc
        /*Subtrai o mês de nascimento do mês atual, se o mês de nascimento já passou no ano, não precisa ajustar nada.
          Mas se ainda não chegou, significa que o último aniversário ainda não aconteceu então tiramos 1 ano e ajustamos os meses.*/
        let idadeDias = diaAtual - diaNasc
        /*Subtrai o dia de nascimento do dia atual, se o dia do nascimento já passou esse mês, nada muda.
          Mas se o dia ainda não chegou, significa que o último “mês completo” ainda não aconteceu
          então tiramos 1 mês e ajustamos os dias pegando o total do mês anterior.*/

        if (idadeDias < 0) {
            idadeMeses--
            let diasNoMesPassado = new Date(anoAtual, mesAtual - 1, 0).getDate()
            idadeDias += diasNoMesPassado
        }

        if (idadeMeses < 0) {
            idadeAnos--
            idadeMeses += 12
        }

       
        resultadoAnos.textContent = idadeAnos
        resultadoMeses.textContent = idadeMeses
        resultadoDias.textContent = idadeDias
    })
})
