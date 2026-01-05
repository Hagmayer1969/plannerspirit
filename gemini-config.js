// ========================================
// Gemini API Configuration
// ========================================
// IMPORTANTE: Substitua 'SUA_CHAVE_API_AQUI' pela sua chave real da API do Gemini
// Para obter uma chave: https://makersuite.google.com/app/apikey

const GEMINI_API_KEY = 'SUA_CHAVE_API_AQUI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// ========================================
// AI Summary Generation
// ========================================
async function generateAISummary(gratitudes, goals, improvements, monthName, lessonTitle) {
    const prompt = `Você é um assistente espiritual especializado em Inteligência Espiritual baseado no livro de Kris Vallotton.

Analise os seguintes registros do mês de ${monthName}, que tem como lição principal: "${lessonTitle}".

**Gratidões registradas:**
${gratitudes.length > 0 ? gratitudes.map((g, i) => `${i + 1}. ${g}`).join('\n') : 'Nenhuma gratidão registrada.'}

**Alvos e objetivos definidos:**
${goals.length > 0 ? goals.map((g, i) => `${i + 1}. ${g}`).join('\n') : 'Nenhum alvo registrado.'}

**Áreas de melhoria identificadas:**
${improvements.length > 0 ? improvements.map((i, idx) => `${idx + 1}. ${i}`).join('\n') : 'Nenhuma melhoria registrada.'}

Por favor, gere um resumo personalizado e inspirador que:

1. **Padrões de Gratidão**: Identifique temas recorrentes nas gratidões e o que eles revelam sobre o foco espiritual da pessoa.

2. **Análise de Objetivos**: Avalie os alvos definidos e como eles se alinham com a lição mensal de "${lessonTitle}".

3. **Crescimento Pessoal**: Analise as áreas de melhoria e sugira conexões com princípios de inteligência espiritual.

4. **Insights Espirituais**: Forneça 2-3 insights profundos baseados nos padrões observados.

5. **Próximos Passos**: Sugira 2-3 ações práticas para o próximo mês, alinhadas com o crescimento espiritual observado.

Mantenha o tom encorajador, espiritual e prático. Use linguagem clara e acessível. O resumo deve ter entre 300-400 palavras.`;

    const requestBody = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
        }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Resposta inválida da API');
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateAISummary, GEMINI_API_KEY };
}
