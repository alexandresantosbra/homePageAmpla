// Script para página de carrinho
// Configure abaixo: URL do endpoint que receberá pedidos (webhook) ou email de fallback
const ORDER_ENDPOINT = ''; // ex: 'https://meusite.com/api/orders' -> deixar vazio para usar fallback por email/clipboard
const OWNER_EMAIL = 'verseries924@gmail.com'; // email do responsável para fallback por email
function getCart() {
    try {
        const raw = localStorage.getItem('ampla_cart');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem('ampla_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Falha ao salvar carrinho', e);
    }
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((s, it) => s + (it.qty || 0), 0);
    const els = document.querySelectorAll('#cart-count');
    els.forEach(el => el.textContent = count);
}

function renderCart() {
    const cart = getCart();
    const cartArea = document.getElementById('cart-area');
    const cartEmpty = document.getElementById('cart-empty');
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const subtotalEl = document.getElementById('cart-subtotal');
    const itemCountEl = document.getElementById('item-count');

    if (!itemsContainer || !cartArea || !cartEmpty || !totalEl) return;

    if (!cart || cart.length === 0) {
        cartArea.style.display = 'none';
        cartEmpty.style.display = 'flex';
        cartEmpty.style.flexDirection = 'column';
        cartEmpty.style.alignItems = 'center';
        cartEmpty.style.justifyContent = 'center';
        totalEl.textContent = 'R$ 0,00';
        updateCartCount();
        return;
    }

    cartEmpty.style.display = 'none';
    cartArea.style.display = 'block';

    itemsContainer.innerHTML = '';

    let total = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';

        const itemQty = item.qty || 1;
        totalItems += itemQty;
        const itemTotal = (item.price || 0) * itemQty;
        total += itemTotal;

        const img = document.createElement('img');
        img.className = 'cart-item-image';
        img.src = item.image || '';
        img.alt = item.name;

        const info = document.createElement('div');
        info.className = 'cart-item-info';
        info.innerHTML = `
            <h3>${item.name}</h3>
            <p class="cart-item-brand">${item.brand || 'Sem marca'}</p>
        `;

        const price = document.createElement('div');
        price.className = 'cart-item-price';
        price.innerText = `R$ ${Number(item.price).toFixed(2).replace('.', ',')}`;

        const controls = document.createElement('div');
        controls.className = 'cart-item-controls';

        const qtyInput = document.createElement('input');
        qtyInput.className = 'quantity-input';
        qtyInput.type = 'number';
        qtyInput.min = '1';
        qtyInput.value = itemQty;
        qtyInput.addEventListener('change', function() {
            const v = parseInt(this.value, 10);
            if (isNaN(v) || v < 1) {
                this.value = 1;
                return;
            }
            cart[index].qty = v;
            saveCart(cart);
            renderCart();
        });

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-remove';
        removeBtn.innerHTML = '<i class="fas fa-trash"></i> Remover';
        removeBtn.addEventListener('click', function() {
            cart.splice(index, 1);
            saveCart(cart);
            renderCart();
        });

        controls.appendChild(qtyInput);
        controls.appendChild(removeBtn);

        itemEl.appendChild(img);
        itemEl.appendChild(info);
        itemEl.appendChild(price);
        itemEl.appendChild(controls);

        itemsContainer.appendChild(itemEl);
    });

    if (subtotalEl) subtotalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    if (itemCountEl) itemCountEl.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    updateCartCount();
}

// === Recomendações (carregar de products.json e renderizar) ===
function loadRecommendations() {
    fetch('products.json')
        .then(r => r.json())
        .then(all => {
            try {
                const cart = getCart();
                const cartNames = cart.map(i => i.name);
                const candidates = all.filter(p => !cartNames.includes(p.name));
                // Embaralhar
                for (let i = candidates.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
                }
                const recs = candidates.slice(0, 4);
                renderRecommendations(recs);
            } catch (e) {
                console.error('Erro ao processar recomendações', e);
            }
        })
        .catch(err => {
            // falha silenciosa
            console.warn('Não foi possível carregar products.json', err);
        });
}

function renderRecommendations(products) {
    const grid = document.getElementById('recommended-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!products || products.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray-medium);">Sem recomendações no momento.</div>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card-recommend';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-brand">${product.brand || 'Sem marca'}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">R$ ${Number(product.price).toFixed(2).replace('.', ',')}</div>
        `;

        const actions = document.createElement('div');
        actions.className = 'recommend-actions';

        const addBtn = document.createElement('button');
        addBtn.className = 'btn-outline';
        addBtn.innerHTML = '<i class="fas fa-plus"></i>';
        addBtn.setAttribute('aria-label', 'Adicionar ao carrinho');
        addBtn.title = 'Adicionar ao carrinho';
        addBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addRecommendedToCart(product);
        });

        const buyBtn = document.createElement('button');
        buyBtn.className = 'btn-primary';
        buyBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Comprar';
        buyBtn.setAttribute('aria-label', 'Comprar');
        buyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addRecommendedToCart(product);
        });

        actions.appendChild(addBtn);
        actions.appendChild(buyBtn);

        card.appendChild(actions);
        grid.appendChild(card);
    });
}

function addRecommendedToCart(product) {
    try {
        const cart = getCart();
        const idx = cart.findIndex(i => i.name === product.name);
        if (idx > -1) {
            cart[idx].qty = (cart[idx].qty || 1) + 1;
        } else {
            cart.push({
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                qty: 1,
                categoryKey: product.categoryKey || ''
            });
        }
        saveCart(cart);
        renderCart();
        loadRecommendations();
        if (window.showToast) showToast(`${product.name} adicionado ao carrinho.`, { success: true });
        else console.log(`${product.name} adicionado ao carrinho.`);
    } catch (e) {
        console.error('Falha ao adicionar recomendado', e);
    }
}

function clearCart() {
    if (!confirm('Deseja limpar todo o carrinho?')) return;
    saveCart([]);
    renderCart();
}

function checkout() {
    const cart = getCart();
    if (!cart || cart.length === 0) {
        if (window.showToast) showToast('Seu carrinho está vazio.', { error: true });
        else alert('Seu carrinho está vazio.');
        return;
    }

    const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);

    const payload = {
        createdAt: new Date().toISOString(),
        site: window.location.hostname || window.location.href,
        total: Number(total.toFixed(2)),
        items: cart.map(i => ({ name: i.name, brand: i.brand, price: i.price, qty: i.qty, categoryKey: i.categoryKey || '' }))
    };

    const json = JSON.stringify(payload, null, 2);

    // Se houver endpoint configurado, enviar via POST
    if (ORDER_ENDPOINT && ORDER_ENDPOINT.trim() !== '') {
        fetch(ORDER_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(resp => {
            if (!resp.ok) throw new Error('Erro ao enviar pedido');
            return resp.json().catch(() => null);
        }).then(() => {
            if (window.showToast) showToast(`Pedido enviado com sucesso! Total: R$ ${total.toFixed(2).replace('.', ',')}`, { success: true });
            else alert(`Pedido enviado com sucesso! Total: R$ ${total.toFixed(2).replace('.', ',')}`);
            saveCart([]);
            renderCart();
        }).catch(err => {
            console.error('Envio de pedido falhou', err);
            if (confirm('Falha ao enviar pedido ao servidor. Deseja copiar o JSON para a área de transferência?')) {
                if (navigator.clipboard) navigator.clipboard.writeText(json);
                if (window.showToast) showToast('JSON copiado para a área de transferência.', { info: true });
            } else {
                if (window.showToast) showToast('Pedido não enviado.', { error: true });
            }
        });
        return;
    }

    // Fallback: abrir cliente de email com JSON no corpo caso OWNER_EMAIL esteja definido
    if (OWNER_EMAIL && OWNER_EMAIL.includes('@')) {
        const subject = `Novo pedido - ${new Date().toLocaleString()}`;
        const mailto = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(json)}`;
        window.location.href = mailto;
        if (window.showToast) showToast('Abrindo cliente de email. Revise e envie o pedido.', { info: true });
        return;
    }

    // Último recurso: copiar JSON para área de transferência
    if (confirm('Nenhum endpoint configurado. Deseja copiar o JSON do pedido para a área de transferência?')) {
        if (navigator.clipboard) navigator.clipboard.writeText(json).then(() => {
            if (window.showToast) showToast('JSON copiado para a área de transferência.', { success: true });
        });
    }
}

// START: integração de pagamento (chama nosso servidor local /create-payment)
async function startCheckoutPayment(payer) {
    const cart = getCart();
    if (!cart || cart.length === 0) {
        if (window.showToast) showToast('Seu carrinho está vazio.', { error: true });
        else alert('Seu carrinho está vazio.');
        return;
    }
    const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);

    const payload = {
        transaction_amount: Number(total.toFixed(2)),
        description: 'Compra Ampla - ' + (cart.length) + ' itens',
        payment_method_id: 'pix',
        payer: payer || { email: '', first_name: '', last_name: '', identification: { type: 'CPF', number: '' } },
        expiration: 3600
    };

    // chamar nosso servidor
    try {
        const resp = await fetch('http://localhost:3000/create-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!resp.ok) throw new Error('Falha ao criar pagamento');
        const data = await resp.json();

        // Mostrar modal simples com QR e código
        showPaymentModal(data);

        // iniciar polling para status
        pollPaymentStatus(data.id, 15, 4000);
    } catch (e) {
        console.error(e);
        if (window.showToast) showToast('Falha ao iniciar pagamento.', { error: true });
        else alert('Falha ao iniciar pagamento.');
    }
}

function showPaymentModal(data) {
    // criar modal simples
    let modal = document.getElementById('payment-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'payment-modal';
        modal.style.position = 'fixed';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.background = 'rgba(0,0,0,0.4)';
        modal.innerHTML = `<div id="payment-modal-card" style="background:#fff;padding:20px;border-radius:8px;max-width:420px;width:95%">
            <h3>Finalize o pagamento (PIX)</h3>
            <div id="payment-qr" style="text-align:center;margin:10px 0"></div>
            <div id="payment-code" style="word-break:break-all;background:#f6f6f6;padding:8px;border-radius:6px;margin-top:8px;font-family:monospace;margin-bottom:12px;"></div>
            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;"><button id="copy-pix-code" class="btn-primary" style="margin-right:auto;">Copiar Chave PIX</button><button id="close-payment-modal" class="btn-outline">Fechar</button></div>
        </div>`;
        document.body.appendChild(modal);
        document.getElementById('close-payment-modal').addEventListener('click', () => { modal.remove(); });
    }

    const qrContainer = document.getElementById('payment-qr');
    const codeContainer = document.getElementById('payment-code');
    qrContainer.innerHTML = '';
    if (data.qr_code_base64) {
        const img = document.createElement('img');
        img.src = 'data:image/png;base64,' + data.qr_code_base64;
        img.style.maxWidth = '100%';
        qrContainer.appendChild(img);
    } else {
        qrContainer.innerText = 'QR indisponível';
    }
    codeContainer.innerText = data.qr_code || '';
    
    // Botão para copiar chave PIX
    const copyBtn = document.getElementById('copy-pix-code');
    if (copyBtn && data.qr_code) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(data.qr_code).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = '✓ Copiado!';
                setTimeout(() => { copyBtn.innerText = originalText; }, 2000);
            }).catch(err => {
                alert('Falha ao copiar: ' + err);
            });
        });
    }
}

function pollPaymentStatus(id, attempts = 20, interval = 5000) {
    let tries = 0;
    const t = setInterval(async () => {
        tries++;
        try {
            const r = await fetch(`http://localhost:3000/payment-status/${encodeURIComponent(id)}`);
            if (!r.ok) throw new Error('Status error');
            const s = await r.json();
            if (s.status === 'paid' || s.status === 'approved') {
                clearInterval(t);
                // remover modal e redirecionar para sucesso
                document.getElementById('payment-modal')?.remove();
                window.location.href = 'payment_success.html?id=' + encodeURIComponent(id);
            }
        } catch (e) {
            console.warn('poll error', e);
        }
        if (tries >= attempts) clearInterval(t);
    }, interval);
}
// END: integração de pagamento

if (typeof window !== 'undefined') {
    window.startCheckoutPayment = startCheckoutPayment;
    window.showPaymentModal = showPaymentModal;
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();
    // carregar recomendações após render do carrinho
    loadRecommendations();
    document.getElementById('clear-cart')?.addEventListener('click', clearCart);
    document.getElementById('checkout')?.addEventListener('click', checkout);
    // botão visível para iniciar PIX
    document.getElementById('pix-checkout')?.addEventListener('click', function() {
        const modal = document.getElementById('pix-payment-modal');
        if (modal) modal.style.display = 'flex';
    });

    // cancelar modal
    document.getElementById('pix-payment-cancel')?.addEventListener('click', function() {
        const modal = document.getElementById('pix-payment-modal');
        if (modal) modal.style.display = 'none';
    });

    // submit do formulário de pagamento
    document.getElementById('pix-payment-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const payer = {
            email: document.getElementById('payer-email')?.value || '',
            first_name: document.getElementById('payer-first')?.value || '',
            last_name: document.getElementById('payer-last')?.value || '',
            identification: { type: 'CPF', number: (document.getElementById('payer-cpf')?.value || '').replace(/\D/g,'') }
        };
        // fechar modal e iniciar pagamento
        const modal = document.getElementById('pix-payment-modal');
        if (modal) modal.style.display = 'none';
        startCheckoutPayment(payer);
    });

    // Se a URL tiver ?autocheckout=1, tentar finalizar automaticamente
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('autocheckout') === '1') {
            // aguardar renderização curta antes de chamar checkout
            setTimeout(() => {
                checkout();
            }, 400);
        }
    } catch (e) {
        // ignore
    }
    // Mostrar notificação se um produto foi salvo e passado via query param ?saved=
    try {
        const params = new URLSearchParams(window.location.search);
        const saved = params.get('saved');
        if (saved) {
            const name = decodeURIComponent(saved);
            if (window.showToast) showToast(`${name} salvo nos produtos.`, { success: true });
            else alert(`${name} salvo nos produtos.`);
            // remover param da URL sem recarregar
            params.delete('saved');
            const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
            window.history.replaceState({}, document.title, newUrl);
        }
    } catch (e) {
        // ignore
    }
});
