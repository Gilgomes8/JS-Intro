//Imprimindo alguns numeros


let i=0
while(i <= 10)
{
    console.log(i)
    i++    
}

for(c=0; c<=10; c++)
{
    console.log(c)
}


i=0
while(i<20)
{
    i++
    if (i===1)
    {
    console.log(`O ciclista deu ${i} volta`)
    }
    else
    {
    console.log(`O ciclista deu ${i} voltas`) 
    }
}

//Laços de repetição com apresentação de dados

for(i=1; i<=20; i++)
{
    if (i===1)
    {
    console.log(`O ciclista deu ${i} volta`)
    }
    else
    {
    console.log(`O ciclista deu ${i} voltas`) 
    }
}

const numeros = [10,20,30,40,50]
for(i=0; i<numeros.length; i++)
{
    elementos = numeros[i]
    console.log(elementos)
}

// Usando for of

const nomes = ["Gil", "Melissa", "Fulano", "Beltrano"]
for(i of nomes)
{
    console.log(i)
}

i = 0

while (i<=10)
{
    if( i%2===0)
    {
        console.log(i)
    }
    i++
}

//Exemplo de contagem regressiva com apresentação de dados

i=10
while(i>=0)
{
    if(i>0 && i%2 === 0)
    {
    console.log(`Tic || Restam: ${i} Segundos`)
    }
        else if (i>1)
        {
        console.log(`Tac || Restam: ${i} Segundos`)
        }
            else if(i===1)
            {
        console.log(`Tac || Resta: ${i} Segundo`)
            }
                else
                {
                 console.log("Kabum!! Game Over T.T")
                }
i--
}