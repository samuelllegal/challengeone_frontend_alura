
function copy() {
    let copyText = document.querySelector("#frase_final");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copiar").addEventListener("click", copy);


/*async function copiar() {
    textoCopiado = document.getElementById("frase_final").readText();
    Clipboard.readText(document.getElementById("frase_final"));
    a = textoCopiado.select();
        console.log(a);
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
  }*/

function decodificar(){
    var inicial = document.getElementById('frase_inicial').value;
    if(inicial == ''){
        sem = document.getElementById('sem_resposta');
        sem.classList.replace('ocultar', 'mostrar');
        com = document.getElementById('com_resposta');
        com.classList.replace('mostrar', 'ocultar');
    }else{
        final = juntar('ai', 'a', inicial);
        final = juntar('enter', 'e', final);
        final = juntar('imes', 'i', final);
        final = juntar('ober', 'o', final);
        final = juntar('ufat', 'u', final);
        sem = document.getElementById('sem_resposta');
        sem.classList.replace('mostrar', 'ocultar');
        com = document.getElementById('com_resposta');
        com.classList.replace('ocultar', 'mostrar');
        document.getElementById('frase_final').innerHTML = final;
    }
    

}

function juntar(variavel, letra, inicial){
    final = inicial;
    while (true){
        if(final.search(variavel) != -1){
            final = final.replace(variavel, letra);
        }else{
            break
        }
        
    }
    
    return final
}

function codificar(){
    var inicial = document.getElementById('frase_inicial').value;
    if(inicial == ''){
        sem = document.getElementById('sem_resposta');
        sem.classList.replace('ocultar', 'mostrar');
        com = document.getElementById('com_resposta');
        com.classList.replace('mostrar', 'ocultar');
    }else {
        var q = inicial.split('');
        var final = '';

        q.forEach(a => {
            if (a == 'a'){
                final += 'ai';
            }else {
                if (a == 'e'){
                    final += 'enter';
                }else{
                    if (a == 'i'){
                        final += 'imes';
                    }else{
                        if (a == 'o'){
                            final += 'ober';
                        }else {
                            if (a == 'u'){
                                final += 'ufat';
                            }else {
                                final += a;
                            }
                        }
                    }
                }
            }

            
            
        });
        sem = document.getElementById('sem_resposta');
        sem.classList.replace('mostrar', 'ocultar');
        com = document.getElementById('com_resposta');
        com.classList.replace('ocultar', 'mostrar');
        document.getElementById('frase_final').innerHTML = final;
    }
}