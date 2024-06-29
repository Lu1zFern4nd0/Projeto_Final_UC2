const form=document.querySelector('form') //pega o formulario no html
form.addEventListener('submit',(e)=>{ // fica esperando o botão ser apertado
    e.preventDefault() // serve para não atualizar a pagina
    const nome=document.querySelector('#nome').value
    const email=document.querySelector('#email').value
    const telefone=document.querySelector('#telefone').value
    const mensagem=document.querySelector('#mensagem').value
    
    console.log(`${nome} 
${email}
${telefone}
${mensagem}`) //o console mostra se as informaçoes foram testadas (testa se retornou as informaçoes)
})