// Script para página de carrinho
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

    if (!itemsContainer || !cartArea || !cartEmpty || !totalEl) return;

    if (!cart || cart.length === 0) {
        cartArea.style.display = 'none';
        cartEmpty.style.display = 'block';
        totalEl.textContent = 'R$ 0,00';
        updateCartCount();
        return;
    }

    cartEmpty.style.display = 'none';
    cartArea.style.display = 'block';

    itemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.style.display = 'flex';
        itemEl.style.alignItems = 'center';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.padding = '12px 0';
        itemEl.style.borderBottom = '1px solid #eee';

        const left = document.createElement('div');
        left.style.display = 'flex';
        left.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = item.image || '';
        img.alt = item.name;
        img.style.width = '80px';
        img.style.height = '60px';
        img.style.objectFit = 'cover';
        img.style.marginRight = '12px';

        const info = document.createElement('div');
        info.innerHTML = `<strong>${item.name}</strong><div style="font-size:0.9rem;color:#666">${item.brand || ''}</div>`;

        left.appendChild(img);
        left.appendChild(info);

        const right = document.createElement('div');
        right.style.display = 'flex';
        right.style.alignItems = 'center';

        const price = document.createElement('div');
        price.style.marginRight = '12px';
        price.innerText = `R$ ${Number(item.price).toFixed(2).replace('.', ',')}`;

        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = '1';
        qtyInput.value = item.qty || 1;
        qtyInput.style.width = '64px';
        qtyInput.style.marginRight = '12px';
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
        removeBtn.className = 'btn-outline';
        removeBtn.innerText = 'Remover';
        removeBtn.addEventListener('click', function() {
            cart.splice(index, 1);
            saveCart(cart);
            renderCart();
        });

        right.appendChild(price);
        right.appendChild(qtyInput);
        right.appendChild(removeBtn);

        itemEl.appendChild(left);
        itemEl.appendChild(right);

        itemsContainer.appendChild(itemEl);

        total += (item.price || 0) * (item.qty || 1);
    });

    totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    updateCartCount();
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
    // Aqui você pode integrar com checkout real. Por enquanto, apenas simular.
    const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
    if (window.showToast) showToast(`Total da compra: R$ ${total.toFixed(2).replace('.', ',')}`, { success: true });
    else alert(`Total da compra: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado! Em breve entraremos em contato.`);
    saveCart([]);
    renderCart();
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();
    document.getElementById('clear-cart')?.addEventListener('click', clearCart);
    document.getElementById('checkout')?.addEventListener('click', checkout);
});
