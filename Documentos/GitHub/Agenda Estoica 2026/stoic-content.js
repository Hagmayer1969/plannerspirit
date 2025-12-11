// Banco de dados de conteúdo estoico para a Agenda 2026

const stoicContent = {
    // Citações estoicas diárias com autores
    quotes: [
        {
            text: "Você tem poder sobre sua mente - não sobre eventos externos. Perceba isso, e você encontrará força.",
            author: "Marco Aurélio"
        },
        {
            text: "A felicidade da sua vida depende da qualidade dos seus pensamentos.",
            author: "Marco Aurélio"
        },
        {
            text: "Não é porque as coisas são difíceis que não ousamos, é porque não ousamos que elas são difíceis.",
            author: "Sêneca"
        },
        {
            text: "Às vezes, até viver é um ato de coragem.",
            author: "Sêneca"
        },
        {
            text: "Não são os eventos que perturbam as pessoas, mas sim suas opiniões sobre os eventos.",
            author: "Epicteto"
        },
        {
            text: "Primeiro diga a si mesmo o que você gostaria de ser; e então faça o que você tem que fazer.",
            author: "Epicteto"
        },
        {
            text: "A melhor vingança é não ser como seu inimigo.",
            author: "Marco Aurélio"
        },
        {
            text: "O homem que sofre antes do necessário, sofre mais do que o necessário.",
            author: "Sêneca"
        },
        {
            text: "Não desperdice mais tempo discutindo o que um homem bom deveria ser. Seja um.",
            author: "Marco Aurélio"
        },
        {
            text: "A riqueza consiste não em ter grandes posses, mas em ter poucas necessidades.",
            author: "Epicteto"
        },
        {
            text: "Se não é certo, não faça. Se não é verdade, não diga.",
            author: "Marco Aurélio"
        },
        {
            text: "Comece de uma vez a viver e conte cada dia separado como uma vida separada.",
            author: "Sêneca"
        },
        {
            text: "A vida é muito curta e ansiosa para aqueles que esquecem o passado, negligenciam o presente e temem o futuro.",
            author: "Sêneca"
        },
        {
            text: "Tudo o que ouvimos é uma opinião, não um fato. Tudo o que vemos é uma perspectiva, não a verdade.",
            author: "Marco Aurélio"
        },
        {
            text: "Nenhum homem é livre se não é senhor de si mesmo.",
            author: "Epicteto"
        },
        {
            text: "O obstáculo no caminho se torna o caminho. Nunca esqueça, dentro de cada obstáculo há uma oportunidade para melhorar nossa condição.",
            author: "Marco Aurélio"
        },
        {
            text: "A sorte é o que acontece quando a preparação encontra a oportunidade.",
            author: "Sêneca"
        },
        {
            text: "Exija muito de si mesmo e espere pouco dos outros. Assim você evitará muitos aborrecimentos.",
            author: "Confúcio (Influência Estoica)"
        },
        {
            text: "Quando você surge pela manhã, pense no precioso privilégio que é estar vivo - respirar, pensar, desfrutar, amar.",
            author: "Marco Aurélio"
        },
        {
            text: "A vida longa não é boa o suficiente, mas uma vida boa é longa o suficiente.",
            author: "Sêneca"
        }
    ],

    // Lições estoicas mensais
    monthlyLessons: {
        1: { // Janeiro
            title: "Ataraxia - A Tranquilidade da Mente",
            content: `**Ataraxia** é o estado de tranquilidade e serenidade mental, livre de perturbações emocionais.

**Princípios:**
• Cultive a paz interior através da aceitação do que não pode controlar
• Pratique a indiferença saudável aos eventos externos
• Desenvolva equanimidade diante das circunstâncias da vida

**Aplicação Prática:**
- Ao enfrentar situações estressantes, pause e pergunte: "Isso está sob meu controle?"
- Pratique meditação diária para acalmar a mente
- Aceite as coisas como elas são, não como você gostaria que fossem

**Reflexão:** A verdadeira tranquilidade vem de dentro, não das circunstâncias externas.`
        },
        2: { // Fevereiro
            title: "Memento Mori - Lembre-se da Morte",
            content: `**Memento Mori** nos lembra da inevitabilidade da morte para valorizar cada momento da vida.

**Princípios:**
• A consciência da mortalidade traz clareza sobre o que realmente importa
• Cada dia é precioso e não deve ser desperdiçado
• A morte é natural e não deve ser temida

**Aplicação Prática:**
- Comece cada dia como se fosse o último
- Priorize relacionamentos e experiências significativas
- Elimine o trivial e foque no essencial

**Reflexão:** Você poderia deixar a vida agora. Deixe isso determinar o que você faz, diz e pensa.`
        },
        3: { // Março
            title: "Amor Fati - Amor ao Destino",
            content: `**Amor Fati** é a prática de amar tudo o que acontece, inclusive as adversidades.

**Princípios:**
• Aceite e abrace tudo o que a vida traz
• Veja cada evento como necessário e benéfico
• Transforme obstáculos em oportunidades

**Aplicação Prática:**
- Ao enfrentar dificuldades, pergunte: "Como isso pode me fortalecer?"
- Agradeça pelos desafios que promovem crescimento
- Não deseje que as coisas fossem diferentes

**Reflexão:** Não apenas aceite o que acontece, mas ame ativamente seu destino.`
        },
        4: { // Abril
            title: "Premeditatio Malorum - Visualização Negativa",
            content: `**Premeditatio Malorum** é a prática de imaginar antecipadamente as adversidades.

**Princípios:**
• Prepare-se mentalmente para possíveis infortúnios
• Reduza o impacto emocional de eventos negativos
• Desenvolva resiliência através da preparação mental

**Aplicação Prática:**
- Dedique alguns minutos diários para imaginar cenários desafiadores
- Planeje como você responderia a adversidades
- Cultive gratidão pelo que você tem ao imaginar sua perda

**Reflexão:** Ao antecipar dificuldades, você se torna menos vulnerável a elas.`
        },
        5: { // Maio
            title: "Dicotomia do Controle",
            content: `**Dicotomia do Controle** distingue o que está e o que não está sob nosso controle.

**Princípios:**
• Foque energia apenas no que você pode controlar
• Aceite com serenidade o que está fora do seu controle
• Suas opiniões, impulsos e desejos estão sob seu controle

**Aplicação Prática:**
- Liste suas preocupações e classifique: controle total, parcial ou nenhum
- Invista tempo apenas no que você pode influenciar
- Solte a ansiedade sobre resultados externos

**Reflexão:** A liberdade vem de focar no que está sob seu poder.`
        },
        6: { // Junho
            title: "As Quatro Virtudes Cardeais",
            content: `**As Virtudes Estoicas:** Sabedoria, Coragem, Justiça e Temperança.

**Sabedoria (Sophia):** Conhecimento prático e bom julgamento
**Coragem (Andreia):** Enfrentar medos e adversidades com bravura
**Justiça (Dikaiosyne):** Tratar os outros com equidade e bondade
**Temperança (Sophrosyne):** Autocontrole e moderação

**Aplicação Prática:**
- Sabedoria: Reflita antes de agir
- Coragem: Faça o que é certo, mesmo quando difícil
- Justiça: Seja justo em todas as interações
- Temperança: Pratique moderação em prazeres e desejos

**Reflexão:** Viver virtuosamente é o caminho para a eudaimonia (florescimento humano).`
        },
        7: { // Julho
            title: "Apatheia - Liberdade das Paixões",
            content: `**Apatheia** é o estado de equanimidade, livre de paixões destrutivas.

**Princípios:**
• Não significa ausência de emoções, mas não ser dominado por elas
• Cultive respostas racionais em vez de reações emocionais
• Mantenha clareza mental em todas as situações

**Aplicação Prática:**
- Observe suas emoções sem julgamento
- Crie espaço entre estímulo e resposta
- Escolha conscientemente como reagir

**Reflexão:** A verdadeira liberdade é não ser escravo das próprias emoções.`
        },
        8: { // Agosto
            title: "Oikeiosis - Apropriação e Conexão",
            content: `**Oikeiosis** é o processo de reconhecer nossa conexão com toda a humanidade.

**Princípios:**
• Todos os seres humanos são parte de uma comunidade universal
• Expandir o círculo de preocupação além de si mesmo
• Reconhecer a natureza social do ser humano

**Aplicação Prática:**
- Pratique empatia ativa com os outros
- Contribua para o bem comum
- Veja os outros como membros da mesma família humana

**Reflexão:** Nascemos para cooperar, como os pés, as mãos, as pálpebras.`
        },
        9: { // Setembro
            title: "Prosoche - Atenção Plena",
            content: `**Prosoche** é a prática de atenção constante aos próprios pensamentos e ações.

**Princípios:**
• Mantenha vigilância sobre seus julgamentos
• Esteja presente no momento atual
• Examine continuamente suas impressões

**Aplicação Prática:**
- Pratique mindfulness nas atividades diárias
- Questione seus julgamentos automáticos
- Observe seus pensamentos como um guardião

**Reflexão:** A atenção plena é a chave para viver de acordo com a natureza.`
        },
        10: { // Outubro
            title: "Sympatheia - Interconexão Universal",
            content: `**Sympatheia** é o princípio de que tudo no universo está interconectado.

**Princípios:**
• Tudo está conectado em uma rede cósmica
• Suas ações afetam o todo
• Você é parte de algo maior

**Aplicação Prática:**
- Considere o impacto de suas ações no mundo
- Reconheça que você não está isolado
- Aja com consciência da interdependência

**Reflexão:** Somos todos membros de um único corpo, criados para cooperar.`
        },
        11: { // Novembro
            title: "Askesis - Treinamento e Disciplina",
            content: `**Askesis** é a prática deliberada de exercícios espirituais e autodisciplina.

**Princípios:**
• A virtude requer prática constante
• Desenvolva força através do treinamento voluntário
• Crie hábitos que fortaleçam o caráter

**Aplicação Prática:**
- Estabeleça rotinas diárias de reflexão
- Pratique pequenos desconfortos voluntários
- Exercite autocontrole regularmente

**Reflexão:** Assim como o corpo precisa de exercício, a alma precisa de treinamento.`
        },
        12: { // Dezembro
            title: "Eudaimonia - Florescimento Humano",
            content: `**Eudaimonia** é o objetivo final: uma vida de florescimento e realização através da virtude.

**Princípios:**
• A felicidade verdadeira vem de viver virtuosamente
• Não depende de circunstâncias externas
• É alcançada através da excelência de caráter

**Aplicação Prática:**
- Avalie seu progresso nas virtudes
- Celebre o crescimento de caráter
- Comprometa-se com a excelência contínua

**Reflexão:** O objetivo da vida não é ser feliz, mas valer a pena, ser honrado e compassivo.`
        }
    }
};

// Função para obter citação aleatória
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * stoicContent.quotes.length);
    return stoicContent.quotes[randomIndex];
}

// Função para obter citação do dia (baseada na data)
function getQuoteOfDay(date = new Date()) {
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % stoicContent.quotes.length;
    return stoicContent.quotes[index];
}

// Função para obter lição do mês
function getMonthlyLesson(month) {
    return stoicContent.monthlyLessons[month];
}

export { stoicContent, getRandomQuote, getQuoteOfDay, getMonthlyLesson };
