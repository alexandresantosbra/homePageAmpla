// Helper para testes: adiciona itens de exemplo ao carrinho e redireciona para cart.html
function simulatePurchase(autoCheckout = false) {
    const sample = [
        { name: 'Cimento Portland CP II-E-32', brand: 'Votorantim', price: 28.9, image: '', qty: 2, categoryKey: 'blocos-cimento' },
        { name: 'Barra de Aço CA-50 12.5mm', brand: 'Gerdau', price: 45.9, image: '', qty: 3, categoryKey: 'aco-ferro' }
    ];
    try {
        localStorage.setItem('ampla_cart', JSON.stringify(sample));
    } catch (e) {
        console.error('Falha ao salvar amostra no localStorage', e);
    }

    const target = 'cart.html' + (autoCheckout ? '?autocheckout=1' : '');
    window.location.href = target;
}

// Tornar global para uso em inline onclick
window.simulatePurchase = simulatePurchase;
