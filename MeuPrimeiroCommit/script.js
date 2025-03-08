document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value;

    const data = `Nome: ${nome}\nIdade: ${idade}\nGênero: ${genero}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'arquivo.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});
