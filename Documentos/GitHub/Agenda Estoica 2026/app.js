import { getQuoteOfDay, getMonthlyLesson } from './stoic-content.js';

// Estado da aplicação
const state = {
    currentMonth: 0, // Janeiro = 0
    currentYear: 2026,
    selectedDate: null,
    appointments: {},
    gratitude: {},
    reflections: {},
    settings: {
        morningTime: '07:00',
        eveningTime: '21:00',
        notificationsEnabled: true
    }
};

// Nomes dos meses
const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initializeApp();
    setupEventListeners();
    checkAndScheduleNotifications();
});

// Carregar dados do localStorage
function loadFromStorage() {
    const saved = localStorage.getItem('agendaEstoica2026');
    if (saved) {
        const data = JSON.parse(saved);
        state.appointments = data.appointments || {};
        state.gratitude = data.gratitude || {};
        state.reflections = data.reflections || {};
        state.settings = data.settings || state.settings;
    }
}

// Salvar dados no localStorage
function saveToStorage() {
    const data = {
        appointments: state.appointments,
        gratitude: state.gratitude,
        reflections: state.reflections,
        settings: state.settings
    };
    localStorage.setItem('agendaEstoica2026', JSON.stringify(data));
}

// Inicializar aplicação
function initializeApp() {
    // Exibir citação do dia
    displayDailyQuote();

    // Verificar se deve exibir lição mensal
    const today = new Date();
    if (today.getDate() <= 7) { // Exibir nos primeiros 7 dias do mês
        displayMonthlyLesson(today.getMonth() + 1);
    }

    // Renderizar calendário
    renderCalendar();

    // Atualizar horários exibidos
    updateDisplayedTimes();

    // Carregar práticas do dia
    loadTodaysPractices();
}

// Exibir citação do dia
function displayDailyQuote() {
    const quote = getQuoteOfDay();
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = quote.author;
}

// Exibir lição mensal
function displayMonthlyLesson(month) {
    const lesson = getMonthlyLesson(month);
    if (lesson) {
        document.getElementById('lessonTitle').textContent = lesson.title;
        document.getElementById('lessonContent').textContent = lesson.content;
        document.getElementById('monthlyLesson').style.display = 'block';
    }
}

// Renderizar calendário
function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthTitle = document.getElementById('monthTitle');

    // Atualizar título do mês
    monthTitle.textContent = `${monthNames[state.currentMonth]} ${state.currentYear}`;

    // Limpar dias anteriores (manter cabeçalhos)
    const headers = grid.querySelectorAll('.calendar-day-header');
    grid.innerHTML = '';
    headers.forEach(header => grid.appendChild(header));

    // Calcular primeiro dia do mês e total de dias
    const firstDay = new Date(state.currentYear, state.currentMonth, 1);
    const lastDay = new Date(state.currentYear, state.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Adicionar dias do mês anterior
    const prevMonthLastDay = new Date(state.currentYear, state.currentMonth, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const dayDiv = createDayElement(prevMonthLastDay - i, true);
        grid.appendChild(dayDiv);
    }

    // Adicionar dias do mês atual
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = today.getDate() === day &&
            today.getMonth() === state.currentMonth &&
            today.getFullYear() === state.currentYear;
        const dayDiv = createDayElement(day, false, isToday);
        grid.appendChild(dayDiv);
    }

    // Adicionar dias do próximo mês
    const remainingCells = 42 - (startingDayOfWeek + daysInMonth); // 6 semanas * 7 dias
    for (let day = 1; day <= remainingCells; day++) {
        const dayDiv = createDayElement(day, true);
        grid.appendChild(dayDiv);
    }
}

// Criar elemento de dia
function createDayElement(day, isOtherMonth, isToday = false) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';

    if (isOtherMonth) {
        dayDiv.classList.add('day-other-month');
    }

    if (isToday) {
        dayDiv.classList.add('today');
    }

    // Verificar se tem compromissos
    const dateKey = `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (state.appointments[dateKey] && state.appointments[dateKey].length > 0) {
        dayDiv.classList.add('has-events');
    }

    const dayNumber = document.createElement('span');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayDiv.appendChild(dayNumber);

    if (!isOtherMonth) {
        dayDiv.addEventListener('click', () => selectDate(day));
    }

    return dayDiv;
}

// Selecionar data
function selectDate(day) {
    state.selectedDate = new Date(state.currentYear, state.currentMonth, day);

    // Atualizar visual
    document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
    event.currentTarget.classList.add('selected');

    // Exibir compromissos
    displayAppointments();
}

// Exibir compromissos do dia selecionado
function displayAppointments() {
    const card = document.getElementById('appointmentsCard');
    const dateSpan = document.getElementById('selectedDate');
    const list = document.getElementById('appointmentsList');

    const dateKey = formatDateKey(state.selectedDate);
    dateSpan.textContent = formatDateDisplay(state.selectedDate);

    list.innerHTML = '';
    const appointments = state.appointments[dateKey] || [];

    if (appointments.length === 0) {
        list.innerHTML = '<p style="color: var(--text-muted); margin: 1rem 0;">Nenhum compromisso agendado.</p>';
    } else {
        appointments.forEach((apt, index) => {
            const aptDiv = document.createElement('div');
            aptDiv.style.cssText = 'padding: 1rem; background: var(--bg-card); border-radius: 8px; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;';
            aptDiv.innerHTML = `
        <div>
          <strong style="color: var(--lilac);">${apt.time}</strong> - ${apt.title}
        </div>
        <button class="btn btn-icon" onclick="deleteAppointment('${dateKey}', ${index})" style="background: #d32f2f; padding: 0.5rem; font-size: 0.9rem;">🗑️</button>
      `;
            list.appendChild(aptDiv);
        });
    }

    card.style.display = 'block';
}

// Adicionar compromisso
function addAppointment() {
    const title = document.getElementById('newAppointmentTitle').value.trim();
    const time = document.getElementById('newAppointmentTime').value;

    if (!title || !time) {
        alert('Por favor, preencha o título e horário do compromisso.');
        return;
    }

    const dateKey = formatDateKey(state.selectedDate);
    if (!state.appointments[dateKey]) {
        state.appointments[dateKey] = [];
    }

    state.appointments[dateKey].push({ title, time });
    state.appointments[dateKey].sort((a, b) => a.time.localeCompare(b.time));

    saveToStorage();
    displayAppointments();
    renderCalendar();

    // Limpar campos
    document.getElementById('newAppointmentTitle').value = '';
    document.getElementById('newAppointmentTime').value = '';
}

// Deletar compromisso
window.deleteAppointment = function (dateKey, index) {
    if (confirm('Deseja realmente excluir este compromisso?')) {
        state.appointments[dateKey].splice(index, 1);
        if (state.appointments[dateKey].length === 0) {
            delete state.appointments[dateKey];
        }
        saveToStorage();
        displayAppointments();
        renderCalendar();
    }
};

// Salvar gratidão
function saveGratitude() {
    const g1 = document.getElementById('gratitude1').value.trim();
    const g2 = document.getElementById('gratitude2').value.trim();
    const g3 = document.getElementById('gratitude3').value.trim();

    if (!g1 && !g2 && !g3) {
        alert('Por favor, preencha pelo menos um motivo de gratidão.');
        return;
    }

    const today = formatDateKey(new Date());
    state.gratitude[today] = [g1, g2, g3].filter(g => g);

    saveToStorage();
    alert('✨ Gratidão salva com sucesso!');
}

// Salvar reflexão
function saveReflection() {
    const r1 = document.getElementById('reflection1').value.trim();
    const r2 = document.getElementById('reflection2').value.trim();
    const r3 = document.getElementById('reflection3').value.trim();

    if (!r1 && !r2 && !r3) {
        alert('Por favor, preencha pelo menos uma área de melhoria.');
        return;
    }

    const today = formatDateKey(new Date());
    state.reflections[today] = [r1, r2, r3].filter(r => r);

    saveToStorage();
    alert('🌙 Reflexão salva com sucesso!');
}

// Carregar práticas do dia
function loadTodaysPractices() {
    const today = formatDateKey(new Date());

    // Carregar gratidão
    const gratitude = state.gratitude[today] || [];
    document.getElementById('gratitude1').value = gratitude[0] || '';
    document.getElementById('gratitude2').value = gratitude[1] || '';
    document.getElementById('gratitude3').value = gratitude[2] || '';

    // Carregar reflexão
    const reflections = state.reflections[today] || [];
    document.getElementById('reflection1').value = reflections[0] || '';
    document.getElementById('reflection2').value = reflections[1] || '';
    document.getElementById('reflection3').value = reflections[2] || '';
}

// Configurar event listeners
function setupEventListeners() {
    // Navegação do calendário
    document.getElementById('prevMonth').addEventListener('click', () => {
        state.currentMonth--;
        if (state.currentMonth < 0) {
            state.currentMonth = 11;
            state.currentYear--;
        }
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        state.currentMonth++;
        if (state.currentMonth > 11) {
            state.currentMonth = 0;
            state.currentYear++;
        }
        renderCalendar();
    });

    // Salvar práticas
    document.getElementById('saveGratitude').addEventListener('click', saveGratitude);
    document.getElementById('saveReflection').addEventListener('click', saveReflection);

    // Compromissos
    document.getElementById('addAppointment').addEventListener('click', addAppointment);

    // Modal de configurações
    document.getElementById('openSettings').addEventListener('click', openSettingsModal);
    document.getElementById('closeSettings').addEventListener('click', closeSettingsModal);
    document.getElementById('saveSettings').addEventListener('click', saveSettings);
    document.getElementById('requestPermission').addEventListener('click', requestNotificationPermission);

    // Fechar modal ao clicar fora
    document.getElementById('settingsModal').addEventListener('click', (e) => {
        if (e.target.id === 'settingsModal') {
            closeSettingsModal();
        }
    });
}

// Modal de configurações
function openSettingsModal() {
    document.getElementById('morningTime').value = state.settings.morningTime;
    document.getElementById('eveningTime').value = state.settings.eveningTime;
    document.getElementById('enableNotifications').checked = state.settings.notificationsEnabled;
    document.getElementById('settingsModal').classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('active');
}

function saveSettings() {
    state.settings.morningTime = document.getElementById('morningTime').value;
    state.settings.eveningTime = document.getElementById('eveningTime').value;
    state.settings.notificationsEnabled = document.getElementById('enableNotifications').checked;

    saveToStorage();
    updateDisplayedTimes();
    checkAndScheduleNotifications();

    alert('⚙️ Configurações salvas com sucesso!');
    closeSettingsModal();
}

function updateDisplayedTimes() {
    document.getElementById('gratitudeTime').textContent = state.settings.morningTime;
    document.getElementById('reflectionTime').textContent = state.settings.eveningTime;
}

// Sistema de notificações
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('Seu navegador não suporta notificações.');
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            alert('✅ Permissão de notificações concedida!');
            checkAndScheduleNotifications();
        } else {
            alert('❌ Permissão de notificações negada. Você pode alterá-la nas configurações do navegador.');
        }
    });
}

function checkAndScheduleNotifications() {
    if (!state.settings.notificationsEnabled) return;
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'granted') return;

    // Agendar verificações a cada minuto
    setInterval(checkNotificationTime, 60000);
    checkNotificationTime(); // Verificar imediatamente
}

function checkNotificationTime() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (currentTime === state.settings.morningTime) {
        showNotification(
            '🌅 Gratidão Matinal',
            'Bom dia! É hora de registrar seus três motivos de gratidão.',
            'gratitude'
        );
    }

    if (currentTime === state.settings.eveningTime) {
        showNotification(
            '🌙 Reflexão Noturna',
            'Boa noite! É hora de refletir sobre três áreas de melhoria do seu dia.',
            'reflection'
        );
    }
}

function showNotification(title, body, type) {
    if (Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: body,
            icon: type === 'gratitude' ? '🌅' : '🌙',
            badge: '📖',
            tag: type,
            requireInteraction: true
        });

        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    }
}

// Funções auxiliares
function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatDateDisplay(date) {
    return `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`;
}
