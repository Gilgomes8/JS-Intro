educacao = prompt("Você concluiu o ensino médio? s- Sim n- Não")
idade = prompt("Qual sua idade?")
estuda = prompt("Atualmente você estuda em outra faculdade? s- Sim n- Não")
if (educacao === "n")
{
    console.log("Você precisa concluir o ensino médio antes da faculdade")
}
else if (idade < 18)
{
    console.log("Você ainda não tem a idade necessária")
}
else if(estuda === "s")
{
    console.log("Você já estuda atualmente")
}
else
{
    console.log("Você já pode começar nessa faculdade")
}

//Utilizando função

educacao = prompt("Você concluiu o ensino médio? s- Sim n- Não")
idade = prompt("Qual sua idade?")
estuda = prompt("Atualmente você estuda em outra faculdade? s- Sim n- Não")

function checagem(ed, id, es)
{
    ch1=false
    ch2=false
    ch3=false
    if (ed === "n")
{
    console.log("Você precisa concluir o ensino médio antes da faculdade")
}
    else
    {   
        console.log("Você tem a primeira condição")
        ch1=true
    }
if (id < 18)
{
    console.log("Você ainda não tem a idade necessária")
}
    else
    {
        console.log("Você tem a segunda condição")
        ch2=true
    }
if(es === "s")
{
    console.log("Você já estuda atualmente")
}
    else
    {
        console.log("Você tem a terceira condição")
        ch3=true
    }
if (ch1&ch2&ch3===true)
{
    console.log("Você já pode começar numa faculdade")
}
else
{
    console.log("Você não atingiu todas as condições necessárias")
}
}
checagem(educacao,idade,estuda)
