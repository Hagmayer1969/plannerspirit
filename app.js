// ========================================
// Data: 12 Monthly Lessons from Spiritual Intelligence
// ========================================
const monthlyLessons = [
    {
        month: 0, // Janeiro
        title: "Descobrindo Sua Identidade Espiritual",
        description: "Compreenda quem você realmente é em sua essência espiritual e descubra o propósito único que você carrega.",
        icon: "✨"
    },
    {
        month: 1, // Fevereiro
        title: "O Poder da Renovação da Mente",
        description: "Aprenda a transformar seus padrões de pensamento e desenvolver uma mentalidade alinhada com princípios espirituais.",
        icon: "🧠"
    },
    {
        month: 2, // Março
        title: "Desenvolvendo Discernimento Espiritual",
        description: "Cultive a capacidade de perceber e compreender verdades espirituais profundas em todas as situações.",
        icon: "👁️"
    },
    {
        month: 3, // Abril
        title: "A Força da Comunidade Espiritual",
        description: "Descubra o poder de conexões autênticas e como relacionamentos saudáveis fortalecem sua jornada espiritual.",
        icon: "🤝"
    },
    {
        month: 4, // Maio
        title: "Superando Limitações Mentais",
        description: "Identifique e quebre barreiras invisíveis que impedem seu crescimento e potencial espiritual.",
        icon: "🔓"
    },
    {
        month: 5, // Junho
        title: "Cultivando Sabedoria Divina",
        description: "Desenvolva a habilidade de aplicar conhecimento espiritual de forma prática e transformadora no dia a dia.",
        icon: "📚"
    },
    {
        month: 6, // Julho
        title: "O Propósito e Destino Pessoal",
        description: "Explore seu chamado único e aprenda a caminhar com confiança em direção ao seu destino espiritual.",
        icon: "🎯"
    },
    {
        month: 7, // Agosto
        title: "Transformação Através da Fé",
        description: "Entenda como a fé genuína catalisa mudanças profundas e duradouras em todas as áreas da vida.",
        icon: "🌟"
    },
    {
        month: 8, // Setembro
        title: "Autoridade Espiritual",
        description: "Reconheça e exerça a autoridade espiritual que você possui para influenciar positivamente seu mundo.",
        icon: "👑"
    },
    {
        month: 9, // Outubro
        title: "Intimidade com o Divino",
        description: "Aprofunde seu relacionamento pessoal com o divino através de práticas contemplativas e presença consciente.",
        icon: "💫"
    },
    {
        month: 10, // Novembro
        title: "Quebrando Padrões Negativos",
        description: "Identifique ciclos destrutivos e aprenda estratégias para criar novos padrões de vida saudáveis.",
        icon: "⚡"
    },
    {
        month: 11, // Dezembro
        title: "Vivendo em Plenitude Espiritual",
        description: "Integre todos os aprendizados e viva uma vida plena, abundante e alinhada com seu propósito espiritual.",
        icon: "🌈"
    }
]

    ;

// ========================================
// Daily Spiritual Quotes (365 quotes based on the book)
// ========================================
const dailyQuotes = [
    // Janeiro - Descobrindo Sua Identidade Espiritual
    "Você foi criado com um propósito único e divino.",
    "Sua identidade não está no que você faz, mas em quem você é.",
    "Descubra a verdade sobre quem você realmente é em essência.",
    "Você carrega dentro de si um potencial ilimitado.",
    "Sua jornada espiritual começa com autoconhecimento.",
    "Você é mais do que suas circunstâncias.",
    "Reconheça o valor inerente que você possui.",
    "Sua identidade espiritual transcende suas limitações físicas.",
    "Você foi desenhado para grandeza.",
    "Aceite quem você é e abrace seu destino.",
    "Sua essência espiritual é eterna e poderosa.",
    "Você tem um chamado específico nesta vida.",
    "Descubra os dons únicos que você carrega.",
    "Sua identidade está enraizada no divino.",
    "Você é amado incondicionalmente.",
    "Reconheça a singularidade do seu propósito.",
    "Você foi criado para fazer a diferença.",
    "Sua vida tem significado profundo.",
    "Abrace sua verdadeira natureza espiritual.",
    "Você é portador de luz e esperança.",
    "Sua identidade não pode ser definida por outros.",
    "Você carrega a imagem do divino.",
    "Descubra quem você foi criado para ser.",
    "Sua jornada é única e valiosa.",
    "Você tem autoridade sobre sua própria vida.",
    "Reconheça o poder que habita em você.",
    "Sua identidade espiritual é sua maior força.",
    "Você foi feito para prosperar.",
    "Aceite sua singularidade com gratidão.",
    "Você é um ser espiritual vivendo uma experiência humana.",
    "Sua verdadeira identidade nunca muda.",

    // Fevereiro - O Poder da Renovação da Mente
    "Renove seus pensamentos e transforme sua vida.",
    "Sua mente é o campo de batalha da transformação.",
    "Pense de acordo com sua verdadeira identidade.",
    "Renovação mental leva à renovação de vida.",
    "Seus pensamentos moldam sua realidade.",
    "Escolha pensamentos que edificam e fortalecem.",
    "A transformação começa na mente.",
    "Liberte-se de padrões mentais limitantes.",
    "Pense como quem você está se tornando.",
    "Sua mente pode ser renovada diariamente.",
    "Cultive pensamentos alinhados com seu propósito.",
    "Renovação mental é um processo contínuo.",
    "Seus pensamentos têm poder criativo.",
    "Transforme sua mente, transforme seu destino.",
    "Pense em possibilidades, não em limitações.",
    "A renovação da mente traz liberdade.",
    "Seus pensamentos influenciam suas emoções.",
    "Cultive uma mentalidade de crescimento.",
    "Renove sua perspectiva sobre si mesmo.",
    "Pensamentos saudáveis geram vida saudável.",
    "Sua mente é terreno fértil para mudança.",
    "Escolha pensamentos que honram seu valor.",
    "A renovação mental requer disciplina diária.",
    "Pense com sabedoria e discernimento.",
    "Seus pensamentos criam seu futuro.",
    "Renove sua mente com verdades espirituais.",
    "Transformação mental é transformação de vida.",
    "Pense de forma alinhada com seu destino.",

    // Março - Desenvolvendo Discernimento Espiritual
    "Discernimento é ver além do óbvio.",
    "Cultive a capacidade de perceber verdades profundas.",
    "Discernimento espiritual é um dom a ser desenvolvido.",
    "Ouça a voz da sabedoria interior.",
    "Discernimento protege e direciona.",
    "Desenvolva sensibilidade espiritual.",
    "Discernimento vem através da prática.",
    "Aprenda a distinguir o verdadeiro do falso.",
    "Discernimento espiritual traz clareza.",
    "Confie em sua intuição espiritual.",
    "Discernimento é sabedoria aplicada.",
    "Desenvolva olhos para ver o invisível.",
    "Discernimento revela intenções ocultas.",
    "Cultive percepção espiritual aguçada.",
    "Discernimento é um músculo espiritual.",
    "Aprenda a ouvir além das palavras.",
    "Discernimento traz proteção divina.",
    "Desenvolva sensibilidade ao espírito.",
    "Discernimento ilumina o caminho.",
    "Cultive sabedoria para discernir.",
    "Discernimento espiritual é essencial.",
    "Aprenda a perceber a verdade.",
    "Discernimento vem da intimidade com o divino.",
    "Desenvolva percepção espiritual profunda.",
    "Discernimento guia suas decisões.",
    "Cultive a arte de discernir.",
    "Discernimento é ver com olhos espirituais.",
    "Desenvolva sensibilidade às coisas do espírito.",
    "Discernimento traz sabedoria prática.",
    "Aprenda a distinguir vozes espirituais.",
    "Discernimento é um presente precioso.",

    // Abril - A Força da Comunidade Espiritual
    "Você foi criado para comunidade.",
    "Relacionamentos saudáveis fortalecem sua jornada.",
    "Comunidade espiritual é essencial para crescimento.",
    "Juntos somos mais fortes.",
    "Cultive conexões autênticas e profundas.",
    "Comunidade traz apoio e encorajamento.",
    "Você precisa de outros e outros precisam de você.",
    "Relacionamentos espirituais são transformadores.",
    "Comunidade é onde você encontra pertencimento.",
    "Cultive amizades que edificam.",
    "Comunidade espiritual traz cura.",
    "Juntos alcançamos mais.",
    "Relacionamentos saudáveis refletem amor divino.",
    "Comunidade é força multiplicada.",
    "Cultive conexões que inspiram crescimento.",
    "Você foi feito para viver em comunidade.",
    "Relacionamentos autênticos trazem vida.",
    "Comunidade espiritual é família escolhida.",
    "Juntos carregamos os fardos uns dos outros.",
    "Cultive relacionamentos baseados em verdade.",
    "Comunidade traz equilíbrio e perspectiva.",
    "Relacionamentos saudáveis são tesouros.",
    "Comunidade espiritual é refúgio seguro.",
    "Juntos celebramos vitórias e superamos desafios.",
    "Cultive conexões que honram o divino.",
    "Comunidade é onde você cresce.",
    "Relacionamentos profundos trazem significado.",
    "Comunidade espiritual é fonte de força.",
    "Juntos refletimos a imagem do divino.",
    "Cultive relacionamentos que transformam.",

    // Maio - Superando Limitações Mentais
    "Suas limitações são frequentemente mentais.",
    "Quebre as barreiras invisíveis da sua mente.",
    "Você é capaz de mais do que imagina.",
    "Limitações mentais impedem seu potencial.",
    "Liberte-se de crenças limitantes.",
    "Suas barreiras mentais podem ser superadas.",
    "Você não está preso às suas limitações.",
    "Desafie pensamentos que limitam seu crescimento.",
    "Liberdade mental traz liberdade de vida.",
    "Você pode superar qualquer barreira mental.",
    "Limitações são oportunidades disfarçadas.",
    "Quebre correntes mentais antigas.",
    "Você é maior que suas limitações.",
    "Liberte-se de padrões restritivos.",
    "Suas limitações não definem você.",
    "Supere barreiras com fé e determinação.",
    "Limitações mentais são ilusões.",
    "Você tem poder para quebrar correntes.",
    "Liberdade começa na mente.",
    "Supere limitações com nova perspectiva.",
    "Você não precisa permanecer limitado.",
    "Quebre barreiras e alcance novos níveis.",
    "Limitações são temporárias.",
    "Liberte-se e voe alto.",
    "Você é capaz de crescimento ilimitado.",
    "Supere barreiras mentais com coragem.",
    "Limitações existem para serem superadas.",
    "Liberdade mental é seu direito.",
    "Você pode quebrar qualquer corrente.",
    "Supere limitações e abrace possibilidades.",
    "Liberte-se e viva plenamente.",

    // Junho - Cultivando Sabedoria Divina
    "Sabedoria é mais valiosa que conhecimento.",
    "Cultive sabedoria através da experiência.",
    "Sabedoria divina ilumina seu caminho.",
    "Busque sabedoria acima de tudo.",
    "Sabedoria traz discernimento e clareza.",
    "Cultive uma vida de sabedoria prática.",
    "Sabedoria divina é acessível a você.",
    "Aplique sabedoria em cada decisão.",
    "Sabedoria transforma conhecimento em ação.",
    "Cultive sabedoria através da reflexão.",
    "Sabedoria divina guia seus passos.",
    "Busque sabedoria com humildade.",
    "Sabedoria é aplicação prática da verdade.",
    "Cultive sabedoria em todas as áreas.",
    "Sabedoria divina supera entendimento humano.",
    "Aplique sabedoria em relacionamentos.",
    "Sabedoria traz paz e direção.",
    "Cultive sabedoria através da meditação.",
    "Sabedoria divina é tesouro precioso.",
    "Busque sabedoria constantemente.",
    "Sabedoria transforma sua perspectiva.",
    "Cultive sabedoria com diligência.",
    "Sabedoria divina é fonte de vida.",
    "Aplique sabedoria em desafios.",
    "Sabedoria traz soluções criativas.",
    "Cultive sabedoria através da experiência.",
    "Sabedoria divina nunca falha.",
    "Busque sabedoria em todas as coisas.",
    "Sabedoria é dom a ser cultivado.",
    "Cultive sabedoria e prospere.",

    // Julho - O Propósito e Destino Pessoal
    "Você tem um propósito único.",
    "Seu destino está esperando por você.",
    "Caminhe com confiança em direção ao seu chamado.",
    "Propósito traz significado à vida.",
    "Descubra e abrace seu destino.",
    "Você foi criado com intenção divina.",
    "Seu propósito é maior que você imagina.",
    "Destino é descoberto, não inventado.",
    "Caminhe no propósito para o qual foi criado.",
    "Seu destino está conectado ao divino.",
    "Propósito traz paixão e direção.",
    "Descubra o que você foi feito para fazer.",
    "Seu destino impacta gerações.",
    "Caminhe com propósito todos os dias.",
    "Destino é cumprido passo a passo.",
    "Você foi desenhado para um propósito específico.",
    "Seu chamado é único e valioso.",
    "Propósito traz realização profunda.",
    "Descubra seu destino através da busca.",
    "Caminhe confiante em seu chamado.",
    "Destino é jornada, não apenas destino.",
    "Você tem um papel importante a desempenhar.",
    "Propósito alinha suas ações com seu ser.",
    "Descubra e viva seu propósito.",
    "Seu destino glorifica o divino.",
    "Caminhe no propósito com coragem.",
    "Destino é realizado através de obediência.",
    "Você foi criado para fazer diferença.",
    "Propósito traz alegria duradoura.",
    "Descubra seu destino e corra atrás dele.",
    "Caminhe em seu propósito único.",

    // Agosto - Transformação Através da Fé
    "Fé move montanhas.",
    "Transformação profunda vem através da fé.",
    "Fé genuína catalisa mudança.",
    "Acredite no impossível.",
    "Fé transforma sua realidade.",
    "Confie no processo de transformação.",
    "Fé é certeza de coisas não vistas.",
    "Transformação requer fé ativa.",
    "Acredite em mudança duradoura.",
    "Fé abre portas impossíveis.",
    "Transformação através da fé é real.",
    "Confie no poder transformador da fé.",
    "Fé traz esperança viva.",
    "Transformação começa com crença.",
    "Acredite em milagres.",
    "Fé supera circunstâncias.",
    "Transformação através da fé é poderosa.",
    "Confie mesmo quando não vê.",
    "Fé ativa produz resultados.",
    "Transformação é fruto de fé persistente.",
    "Acredite em possibilidades divinas.",
    "Fé traz mudança radical.",
    "Transformação através da fé é duradoura.",
    "Confie no invisível.",
    "Fé move o coração do divino.",
    "Transformação requer fé corajosa.",
    "Acredite em novos começos.",
    "Fé transforma impossível em possível.",
    "Transformação através da fé glorifica o divino.",
    "Confie e veja milagres.",
    "Fé é fundamento de transformação.",

    // Setembro - Autoridade Espiritual
    "Você possui autoridade espiritual.",
    "Reconheça o poder que você carrega.",
    "Autoridade espiritual é seu direito.",
    "Exerça autoridade com sabedoria.",
    "Você tem poder para influenciar.",
    "Autoridade espiritual traz responsabilidade.",
    "Reconheça sua posição de autoridade.",
    "Exerça autoridade com amor.",
    "Você foi delegado com poder espiritual.",
    "Autoridade espiritual transforma ambientes.",
    "Reconheça e use sua autoridade.",
    "Exerça autoridade em seu mundo.",
    "Você tem poder para fazer diferença.",
    "Autoridade espiritual é ferramenta poderosa.",
    "Reconheça o poder da sua palavra.",
    "Exerça autoridade com humildade.",
    "Você carrega autoridade divina.",
    "Autoridade espiritual muda atmosferas.",
    "Reconheça sua influência espiritual.",
    "Exerça autoridade com confiança.",
    "Você tem poder para abençoar.",
    "Autoridade espiritual é dom precioso.",
    "Reconheça o peso da sua autoridade.",
    "Exerça autoridade com integridade.",
    "Você foi empoderado espiritualmente.",
    "Autoridade espiritual traz transformação.",
    "Reconheça e honre sua autoridade.",
    "Exerça autoridade para o bem.",
    "Você tem poder espiritual real.",
    "Autoridade espiritual é para ser usada.",

    // Outubro - Intimidade com o Divino
    "Intimidade com o divino transforma tudo.",
    "Busque proximidade com o sagrado.",
    "Intimidade espiritual é tesouro maior.",
    "Cultive relacionamento profundo com o divino.",
    "Intimidade traz conhecimento verdadeiro.",
    "Busque a presença do divino.",
    "Intimidade espiritual é prioridade.",
    "Cultive momentos de conexão profunda.",
    "Intimidade com o divino traz paz.",
    "Busque comunhão constante.",
    "Intimidade espiritual transforma caráter.",
    "Cultive presença consciente do divino.",
    "Intimidade traz revelação.",
    "Busque proximidade acima de tudo.",
    "Intimidade espiritual é fonte de força.",
    "Cultive relacionamento íntimo e pessoal.",
    "Intimidade com o divino é vida.",
    "Busque a face do sagrado.",
    "Intimidade espiritual traz alegria.",
    "Cultive comunhão diária.",
    "Intimidade transforma perspectiva.",
    "Busque profundidade espiritual.",
    "Intimidade com o divino é essencial.",
    "Cultive momentos de quietude.",
    "Intimidade traz sabedoria.",
    "Busque conexão autêntica.",
    "Intimidade espiritual é jornada.",
    "Cultive presença do divino.",
    "Intimidade transforma vida.",
    "Busque relacionamento profundo.",
    "Intimidade com o divino é tudo.",

    // Novembro - Quebrando Padrões Negativos
    "Quebre ciclos destrutivos.",
    "Você pode criar novos padrões.",
    "Liberte-se de hábitos negativos.",
    "Padrões antigos podem ser quebrados.",
    "Crie novos caminhos saudáveis.",
    "Quebre correntes de comportamento.",
    "Você não está preso ao passado.",
    "Liberte-se de ciclos viciosos.",
    "Padrões negativos podem ser superados.",
    "Crie hábitos que edificam.",
    "Quebre padrões familiares destrutivos.",
    "Você tem poder para mudar.",
    "Liberte-se de repetições negativas.",
    "Padrões podem ser transformados.",
    "Crie novos ciclos positivos.",
    "Quebre hábitos que limitam.",
    "Você pode estabelecer novos padrões.",
    "Liberte-se de comportamentos antigos.",
    "Padrões negativos não são permanentes.",
    "Crie rotinas saudáveis.",
    "Quebre ciclos geracionais.",
    "Você é capaz de mudança real.",
    "Liberte-se de padrões tóxicos.",
    "Padrões podem ser renovados.",
    "Crie novos hábitos de vida.",
    "Quebre correntes do passado.",
    "Você pode escrever nova história.",
    "Liberte-se e viva diferente.",
    "Padrões negativos são quebráveis.",
    "Crie vida nova e saudável.",

    // Dezembro - Vivendo em Plenitude Espiritual
    "Viva em plenitude todos os dias.",
    "Plenitude espiritual é seu destino.",
    "Abrace vida abundante.",
    "Plenitude é mais que suficiência.",
    "Viva a vida que foi planejada para você.",
    "Plenitude espiritual traz satisfação.",
    "Abrace abundância em todas as áreas.",
    "Plenitude é viver alinhado com propósito.",
    "Viva vida plena e significativa.",
    "Plenitude espiritual é realização.",
    "Abrace a vida em sua totalidade.",
    "Plenitude é fruto de intimidade.",
    "Viva com alegria e propósito.",
    "Plenitude espiritual é herança sua.",
    "Abrace vida abundante e livre.",
    "Plenitude é viver em potencial máximo.",
    "Viva cada dia com gratidão.",
    "Plenitude espiritual transforma tudo.",
    "Abrace a vida que o divino oferece.",
    "Plenitude é viver em paz.",
    "Viva com paixão e propósito.",
    "Plenitude espiritual é alegria completa.",
    "Abrace vida em todas as dimensões.",
    "Plenitude é viver conectado ao divino.",
    "Viva em abundância espiritual.",
    "Plenitude é realização de destino.",
    "Abrace vida plena e próspera.",
    "Plenitude espiritual é seu direito.",
    "Viva em totalidade e integridade.",
    "Plenitude é viver como foi criado para viver.",
    "Abrace vida abundante e transformadora."
];

// ========================================
// State Management
// ========================================
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedDay = currentDate.getDate();

// ========================================
// Local Storage Functions
// ========================================
function getStorageKey(year, month, day) {
    return `agenda_${year}_${month}_${day}`;
}

function saveEntry(year, month, day, data) {
    const key = getStorageKey(year, month, day);
    localStorage.setItem(key, JSON.stringify(data));
}

function loadEntry(year, month, day) {
    const key = getStorageKey(year, month, day);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function getAllEntriesForMonth(year, month) {
    const entries = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const entry = loadEntry(year, month, day);
        if (entry) {
            entries.push({ day, ...entry });
        }
    }

    return entries;
}

// ========================================
// UI Update Functions
// ========================================
function updateMonthDisplay() {
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    document.getElementById('currentMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    updateMonthlyLesson();
    generateCalendar();
    updateDailyQuote();
    populateDaySelector();
    updateMonthlySummary();
}

function generateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const today = new Date();

    calendarGrid.innerHTML = '';

    // Add day headers
    const dayHeaders = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        header.style.cssText = `
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            text-align: center;
            padding: var(--space-xs);
        `;
        calendarGrid.appendChild(header);
    });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        calendarGrid.appendChild(emptyDay);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';

        // Check if this day has an entry
        const entry = loadEntry(currentYear, currentMonth, day);
        if (entry) {
            dayElement.classList.add('has-entry');
        }

        // Check if this is today
        if (currentMonth === today.getMonth() &&
            currentYear === today.getFullYear() &&
            day === today.getDate()) {
            dayElement.classList.add('today');
        }

        // Check if this is the selected day
        if (day === selectedDay) {
            dayElement.classList.add('selected');
        }

        const dayNumber = document.createElement('div');
        dayNumber.className = 'calendar-day-number';
        dayNumber.textContent = day;

        dayElement.appendChild(dayNumber);

        // Add click event
        dayElement.addEventListener('click', () => {
            selectedDay = day;
            document.getElementById('daySelect').value = day;
            generateCalendar();
            updateDailyQuote();
            loadDayEntry();
        });

        calendarGrid.appendChild(dayElement);
    }
}

function updateDailyQuote() {
    const quoteText = document.getElementById('quoteText');

    // Calculate the day of the year to get the appropriate quote
    const startOfYear = new Date(currentYear, 0, 1);
    const currentDate = new Date(currentYear, currentMonth, selectedDay);
    const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

    // Get quote for this day (cycling through if needed)
    const quoteIndex = dayOfYear % dailyQuotes.length;
    quoteText.textContent = dailyQuotes[quoteIndex];
}

function updateMonthlyLesson() {
    const lesson = monthlyLessons[currentMonth];
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonDescription').textContent = lesson.description;
    document.querySelector('.lesson-icon').textContent = lesson.icon;
}

function populateDaySelector() {
    const daySelect = document.getElementById('daySelect');
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    daySelect.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = `Dia ${day}`;

        // Check if there's an entry for this day
        const entry = loadEntry(currentYear, currentMonth, day);
        if (entry) {
            option.textContent += ' ✓';
        }

        daySelect.appendChild(option);
    }

    // Set selected day
    const today = new Date();
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
        selectedDay = today.getDate();
    } else {
        selectedDay = 1;
    }

    daySelect.value = selectedDay;
    loadDayEntry();
}

function loadDayEntry() {
    const entry = loadEntry(currentYear, currentMonth, selectedDay);

    if (entry) {
        // Load gratitude
        document.getElementById('gratitude1').value = entry.gratitude1 || '';
        document.getElementById('gratitude2').value = entry.gratitude2 || '';
        document.getElementById('gratitude3').value = entry.gratitude3 || '';

        // Load goal
        document.getElementById('dailyGoal').value = entry.goal || '';

        // Load improvements
        document.getElementById('improvement1').value = entry.improvement1 || '';
        document.getElementById('improvement2').value = entry.improvement2 || '';
        document.getElementById('improvement3').value = entry.improvement3 || '';
    } else {
        // Clear all fields
        document.getElementById('gratitude1').value = '';
        document.getElementById('gratitude2').value = '';
        document.getElementById('gratitude3').value = '';
        document.getElementById('dailyGoal').value = '';
        document.getElementById('improvement1').value = '';
        document.getElementById('improvement2').value = '';
        document.getElementById('improvement3').value = '';
    }
}

function saveDayEntry() {
    const entry = {
        gratitude1: document.getElementById('gratitude1').value.trim(),
        gratitude2: document.getElementById('gratitude2').value.trim(),
        gratitude3: document.getElementById('gratitude3').value.trim(),
        goal: document.getElementById('dailyGoal').value.trim(),
        improvement1: document.getElementById('improvement1').value.trim(),
        improvement2: document.getElementById('improvement2').value.trim(),
        improvement3: document.getElementById('improvement3').value.trim(),
        timestamp: new Date().toISOString()
    };

    saveEntry(currentYear, currentMonth, selectedDay, entry);
    showToast('Registro salvo com sucesso!');

    // Update day selector to show checkmark and refresh calendar
    generateCalendar();
    populateDaySelector();
    updateMonthlySummary();
}

function updateMonthlySummary() {
    const entries = getAllEntriesForMonth(currentYear, currentMonth);

    // Update gratitude summary
    const gratitudeSummary = document.getElementById('gratitudeSummary');
    const gratitudes = [];

    entries.forEach(entry => {
        if (entry.gratitude1) gratitudes.push({ day: entry.day, text: entry.gratitude1 });
        if (entry.gratitude2) gratitudes.push({ day: entry.day, text: entry.gratitude2 });
        if (entry.gratitude3) gratitudes.push({ day: entry.day, text: entry.gratitude3 });
    });

    if (gratitudes.length > 0) {
        gratitudeSummary.innerHTML = gratitudes.map(g =>
            `<div class="summary-item">
                <span class="summary-item-date">Dia ${g.day}:</span>${g.text}
            </div>`
        ).join('');
    } else {
        gratitudeSummary.innerHTML = '<p class="empty-message">Nenhuma gratidão registrada ainda.</p>';
    }

    // Update goals summary
    const goalsSummary = document.getElementById('goalsSummary');
    const goals = entries.filter(e => e.goal).map(e => ({ day: e.day, text: e.goal }));

    if (goals.length > 0) {
        goalsSummary.innerHTML = goals.map(g =>
            `<div class="summary-item">
                <span class="summary-item-date">Dia ${g.day}:</span>${g.text}
            </div>`
        ).join('');
    } else {
        goalsSummary.innerHTML = '<p class="empty-message">Nenhum alvo registrado ainda.</p>';
    }

    // Update improvements summary
    const improvementsSummary = document.getElementById('improvementsSummary');
    const improvements = [];

    entries.forEach(entry => {
        if (entry.improvement1) improvements.push({ day: entry.day, text: entry.improvement1 });
        if (entry.improvement2) improvements.push({ day: entry.day, text: entry.improvement2 });
        if (entry.improvement3) improvements.push({ day: entry.day, text: entry.improvement3 });
    });

    if (improvements.length > 0) {
        improvementsSummary.innerHTML = improvements.map(i =>
            `<div class="summary-item">
                <span class="summary-item-date">Dia ${i.day}:</span>${i.text}
            </div>`
        ).join('');
    } else {
        improvementsSummary.innerHTML = '<p class="empty-message">Nenhuma melhoria registrada ainda.</p>';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// Event Listeners
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize display
    updateMonthDisplay();

    // Month navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateMonthDisplay();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateMonthDisplay();
    });

    // Day selection
    document.getElementById('daySelect').addEventListener('change', (e) => {
        selectedDay = parseInt(e.target.value);
        generateCalendar();
        updateDailyQuote();
        loadDayEntry();
    });

    // Save button
    document.getElementById('saveEntry').addEventListener('click', () => {
        saveDayEntry();
    });

    // Toggle summary
    const toggleBtn = document.getElementById('toggleSummary');
    const summaryContent = document.getElementById('summaryContent');
    const summaryBtnText = document.getElementById('summaryBtnText');

    toggleBtn.addEventListener('click', () => {
        const isVisible = summaryContent.style.display !== 'none';

        if (isVisible) {
            summaryContent.style.display = 'none';
            summaryBtnText.textContent = 'Ver Resumo';
            toggleBtn.classList.remove('active');
        } else {
            summaryContent.style.display = 'block';
            summaryBtnText.textContent = 'Ocultar Resumo';
            toggleBtn.classList.add('active');
        }
    });

    // AI Summary Generation
    const generateAIBtn = document.getElementById('generateAISummary');
    const retryAIBtn = document.getElementById('retryAISummary');

    async function handleAISummaryGeneration() {
        const entries = getAllEntriesForMonth(currentYear, currentMonth);

        if (entries.length === 0) {
            showToast('Nenhum registro encontrado para este mês');
            return;
        }

        // Collect all data
        const gratitudes = [];
        const goals = [];
        const improvements = [];

        entries.forEach(entry => {
            if (entry.gratitude1) gratitudes.push(entry.gratitude1);
            if (entry.gratitude2) gratitudes.push(entry.gratitude2);
            if (entry.gratitude3) gratitudes.push(entry.gratitude3);
            if (entry.goal) goals.push(entry.goal);
            if (entry.improvement1) improvements.push(entry.improvement1);
            if (entry.improvement2) improvements.push(entry.improvement2);
            if (entry.improvement3) improvements.push(entry.improvement3);
        });

        // Show loading
        document.getElementById('aiSummaryResult').style.display = 'none';
        document.getElementById('aiSummaryError').style.display = 'none';
        document.getElementById('aiSummaryLoading').style.display = 'flex';

        try {
            const monthNames = [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ];
            const monthName = monthNames[currentMonth];
            const lesson = monthlyLessons[currentMonth];

            const summary = await generateAISummary(
                gratitudes,
                goals,
                improvements,
                monthName,
                lesson.title
            );

            // Show result
            document.getElementById('aiSummaryLoading').style.display = 'none';
            document.getElementById('aiSummaryText').innerHTML = summary.replace(/\n/g, '<br>');
            document.getElementById('aiSummaryResult').style.display = 'block';

        } catch (error) {
            console.error('Erro ao gerar resumo:', error);
            document.getElementById('aiSummaryLoading').style.display = 'none';
            document.getElementById('aiSummaryError').style.display = 'block';
        }
    }

    generateAIBtn.addEventListener('click', handleAISummaryGeneration);
    retryAIBtn.addEventListener('click', handleAISummaryGeneration);

    // Toggle raw data
    const toggleRawDataBtn = document.getElementById('toggleRawData');
    const rawDataContent = document.getElementById('rawDataContent');
    const rawDataBtnText = document.getElementById('rawDataBtnText');

    toggleRawDataBtn.addEventListener('click', () => {
        const isVisible = rawDataContent.style.display !== 'none';

        if (isVisible) {
            rawDataContent.style.display = 'none';
            rawDataBtnText.textContent = 'Ver Dados Detalhados';
            toggleRawDataBtn.classList.remove('active');
        } else {
            rawDataContent.style.display = 'block';
            rawDataBtnText.textContent = 'Ocultar Dados Detalhados';
            toggleRawDataBtn.classList.add('active');
        }
    });

    // Auto-save on input (debounced)
    let autoSaveTimeout;
    const inputs = document.querySelectorAll('.text-input, .text-area');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                saveDayEntry();
            }, 2000); // Auto-save after 2 seconds of inactivity
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveDayEntry();
        }

        // Arrow keys to navigate days
        if (e.altKey) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const daySelect = document.getElementById('daySelect');
                if (selectedDay > 1) {
                    selectedDay--;
                    daySelect.value = selectedDay;
                    loadDayEntry();
                }
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const daySelect = document.getElementById('daySelect');
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                if (selectedDay < daysInMonth) {
                    selectedDay++;
                    daySelect.value = selectedDay;
                    loadDayEntry();
                }
            }
        }
    });
});

// ========================================
// Service Worker Registration (for PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added later for offline functionality
    });
}
