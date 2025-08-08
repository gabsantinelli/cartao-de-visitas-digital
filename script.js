// Minha lógica para o seletor de tema animado (toggle switch)

// 1. Pego os elementos do HTML que preciso manipular
const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

// Função para aplicar o tema com base no estado do checkbox
function applyTheme(isLight) {
    if (isLight) {
        // Se for para ser claro, adiciono a classe e salvo a preferência
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        // Se for para ser escuro, removo a classe e a preferência
        body.classList.remove('light-theme');
        localStorage.removeItem('theme');
    }
}

// 2. Ao carregar a página, verifico se já existe um tema salvo
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light-theme') {
    themeToggle.checked = true; // Marco o checkbox se o tema salvo for claro
    applyTheme(true);
} else {
    themeToggle.checked = false; // Garanto que o checkbox comece desmarcado para o tema escuro
    applyTheme(false);
}

// 3. Adiciono um "ouvinte" de evento de 'change' para o checkbox.
// Ele será acionado toda vez que o estado do checkbox mudar.
themeToggle.addEventListener('change', () => {
    // A propriedade '.checked' retorna 'true' se estiver marcado (tema claro)
    // e 'false' se não (tema escuro).
    applyTheme(themeToggle.checked);
});