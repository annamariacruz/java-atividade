//questao 1
var nome, dia, mes;//variavel
window.alert("Olá, seja bem vindo(a)!")
nome=prompt("Digite seu nome:");
dia=prompt("Digite um dia:");
mes=prompt("Digite um mês:");
if(nome=="Celso Portiolli" && dia=="11" && mes=="09"){
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro")
}

    else if (nome="Ana Maria" && dia=="04" && mes=="07") {
        window.alert("Faça a prova com atenção, boa sorte");
    }


//questao 2
var nome;//variavel
window.alert("Olá, seja bem-vindo(a)");
nome=prompt("Digite seu nome:");
escolha=prompt("Olá, "+ nome + ", gostaria de ver sua media?");
if(escolha=="Sim"){
    var nota1, nota2, nota3, media;
    nota1=parseFloat(prompt("Digite sua nota do 1° bimestre: "));
    nota2=parseFloat(prompt("Digite sua nota do 2° bimestre: "));
    nota3=parseFloat(prompt("Digite sua nota do 3° bimestre: "));
    media=(nota1+nota2+nota3/3);
    window.alert(nome +", sua media é: " + media+ ".");
    if (media>=60) {
        window.alert("Parabens! Você foi aprovado(a)");
    }
    
    else{
        window.alert("Sentimos muito, você foi reprovado(a)");
    }
}

else{
    window.alert("Ok, nos vemos na proxima :)");
}
