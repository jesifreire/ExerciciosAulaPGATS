/**
 * describe -> agrupamento de testes 
 * it -> testes implementacao do teste
 * */

import { exibirNomeDogFormatado } from '../conceitos/teste-de-unidade.js'
import assert from 'node:assert' 

describe('Teste do Projeto', () => {
    it('Deve exibir o nome do dog formatado', () => {
        assert.strictEqual(exibirNomeDogFormatado('Thor'), 'THOR')
    })
    
    it('Segundo Teste', () => {
        
    })
    it('Terceiro Teste', () => {
        throw new Error('Erro de teste')
    })
})