const desculpas = {
    trabalho: [
        'Desculpe, estou preso em uma reunião interminável!',
        'Meu chefe acabou de me chamar para uma reunião urgente.',
        'Preciso finalizar um projeto importante agora.',
        'Estou lidando com um problema crítico no sistema.',
        'Tenho uma entrega importante para o cliente hoje.',
        'Estou em uma call com a matriz, não posso sair agora.',
        'Preciso preparar uma apresentação para amanhã.',
        'Estou resolvendo uma emergência de última hora.',
        'Tenho uma auditoria hoje, não posso me ausentar.',
        'Estou em um treinamento obrigatório.',
        'Preciso ajudar um colega com um problema urgente.',
        'O servidor caiu e preciso consertar isso agora.'
    ],
    social: [
        'Infelizmente, algo urgente surgiu e não poderei ir.',
        'Não estou me sentindo muito sociável hoje, desculpe!',
        'Tenho um compromisso de última hora com a família.',
        'Meu cachorro está passando mal, preciso ficar em casa.',
        'Esqueci que já tinha um outro compromisso marcado.',
        'Estou preso no trânsito e não vou conseguir chegar a tempo.',
        'Estou cuidando de um amigo doente.',
        'Preciso descansar, tive uma semana muito cansativa.',
        'O clima mudou e não estou me sentindo bem.',
        'Tenho que resolver um problema pessoal agora.',
        'Acabei de receber uma visita inesperada.',
        'Não estou em um bom dia para socializar.'
    ],
    familia: [
        'Preciso cuidar de uma emergência familiar, lamento!',
        'Minha mãe precisa de ajuda com algo urgente.',
        'Tenho que levar meu irmão ao médico.',
        'Estou ajudando um parente com uma mudança.',
        'Tenho que buscar meu filho na escola.',
        'Meu parente acabou de ter um bebê, preciso visitar.',
        'Preciso ajudar meus pais em casa.',
        'Um parente próximo está hospitalizado, preciso visitá-lo.',
        'Tenho um almoço de família importante.',
        'Minha avó precisa de ajuda com suas compras.',
        'Preciso levar minha tia ao aeroporto.',
        'Estou organizando uma reunião de família.'
    ],
    saude: [
        'Não estou me sentindo bem hoje, melhor eu descansar.',
        'Acho que peguei um resfriado, melhor eu não sair.',
        'Estou com dor de cabeça, preciso deitar um pouco.',
        'Minha pressão está baixa, vou ficar em casa.',
        'Estou com uma alergia forte, melhor eu evitar sair.',
        'Minha garganta está doendo, pode ser gripe.',
        'Estou com dor de estômago, não vou conseguir sair.',
        'Minha enxaqueca atacou novamente.',
        'Preciso ir ao médico, não estou me sentindo bem.',
        'Estou com sintomas de gripe, melhor evitar contato.',
        'Estou sentindo uma dor nas costas forte.',
        'Vou fazer um exame médico, preciso descansar depois.'
    ],
    outras: [
        'Surgiu algo que eu realmente não posso adiar.',
        'Estou cuidando de um problema pessoal importante.',
        'Preciso resolver uma situação inesperada agora.',
        'Minha internet caiu e preciso de um técnico.',
        'Minha luz acabou de acabar, preciso ficar em casa.',
        'O encanador acabou de chegar, preciso supervisionar.',
        'Preciso ajudar meu vizinho com um problema urgente.',
        'Recebi uma entrega importante que não posso adiar.',
        'Estou esperando uma ligação importante.',
        'Minha encomenda chegou danificada, preciso resolver.',
        'Preciso resolver um problema com meu banco.',
        'Ocorreu um imprevisto que exige minha atenção imediata.'
    ]
};

document.getElementById('gerarDesculpa').addEventListener('click', function () {
    const categoriaSelecionada = document.querySelector('input[name="categoria"]:checked');
    if (categoriaSelecionada) {
        const categoria = categoriaSelecionada.value;
        const desculpaArray = desculpas[categoria];
        const desculpaAleatoria = desculpaArray[Math.floor(Math.random() * desculpaArray.length)];
        document.getElementById('desculpa').value = desculpaAleatoria;
    } else {
        alert('Por favor, selecione uma categoria!');
    }
});

document.getElementById('copiarDesculpa').addEventListener('click', function () {
    const textarea = document.getElementById('desculpa');
    textarea.select();
    document.execCommand('copy');
    alert('Desculpa copiada para a área de transferência!');
});

const heartIcon = document.querySelector(".fa-heart");
heartIcon.classList.add("pulse");