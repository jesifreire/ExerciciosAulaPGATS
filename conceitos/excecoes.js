/** 
 * Exceções em JavaScript
 * tentar executar um código que pode falhar
 * Tratamento de erros
 * lancar erros = throw
 */

//Vou tentar fazer algo que pode dar errado
try {
    console.log('Tentando alimntar o gato')
    throw new Error()

    //throw new Error('Erro ao alimentar o gato')
} catch (excecao) {
    //Aqui eu trato o erro
    console.log(excecao)
    console.log(excecao.message)
    console.log(excecao.name)
    console.log(excecao.stack)

}finally {
    //Esse bloco é sempre executado, mesmo que não tenha erro
    console.log('SEMPRE EXECUTADO')
}
