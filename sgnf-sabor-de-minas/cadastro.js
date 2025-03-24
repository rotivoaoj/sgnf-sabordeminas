const formulario = document.getElementById('formulario');
 
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const notaFiscal = {
            numeroNota: document.getElementById('numeroNota').value,
            dataEmissao: document.getElementById('dataEmissao').value,
            dataVencimento: document.getElementById('dataVencimento').value,
            tipoPagamento: document.getElementById('tipoPagamento').value,
            statusPagamento: document.getElementById('statusPagamento').value,
            fornecedor: document.getElementById('fornecedor').value,
            valorNota: parseFloat(document.getElementById('valorNota').value).toFixed(2)
        };
    
                // Armazenar no localStorage
        let notas = JSON.parse(localStorage.getItem('notasFiscais')) || [];
        notas.push(notaFiscal);
        localStorage.setItem('notasFiscais', JSON.stringify(notas));
    
        formulario.reset();
        alert('Nota Fiscal cadastrada com sucesso!');            

    });

window.onload = verificarVencimentos;