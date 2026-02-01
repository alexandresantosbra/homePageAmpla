// Script para página de favoritos
// Gerencia a exibição e manipulação dos produtos favoritos

// Funções de localStorage para favoritos
function getFavorites() {
    try {
        const raw = localStorage.getItem('ampla_favorites');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Erro ao carregar favoritos', e);
        return [];
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem('ampla_favorites', JSON.stringify(favorites));
    } catch (e) {
        console.error('Erro ao salvar favoritos', e);
    }
}

function addToFavorites(product) {
    const favorites = getFavorites();
    const exists = favorites.some(f => f.name === product.name && 
        (product.categoryKey ? f.categoryKey === product.categoryKey : true));
    
    if (!exists) {
        favorites.push({
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            specs: product.specs || [],
            categoryKey: product.categoryKey || '',
            category: product.category || ''
        });
        saveFavorites(favorites);
        return true;
    }
    return false;
}

function removeFromFavorites(productName, categoryKey = '') {
    const favorites = getFavorites();
    const filtered = favorites.filter(f => 
        !(f.name === productName && (categoryKey ? f.categoryKey === categoryKey : true))
    );
    saveFavorites(filtered);
    return filtered.length !== favorites.length;
}

function isFavorite(productName, categoryKey = '') {
    const favorites = getFavorites();
    return favorites.some(f => 
        f.name === productName && (categoryKey ? f.categoryKey === categoryKey : true)
    );
}

// Renderizar favoritos
function renderFavorites() {
    const favorites = getFavorites();
    const emptyState = document.getElementById('favoritos-empty');
    const contentState = document.getElementById('favoritos-content');
    const grid = document.getElementById('favoritos-grid');
    const totalSpan = document.getElementById('favoritos-total');

    if (!favorites || favorites.length === 0) {
        emptyState.style.display = 'block';
        contentState.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    contentState.style.display = 'block';
    totalSpan.textContent = favorites.length;

    // Limpar grid
    grid.innerHTML = '';

    // Renderizar cada favorito
    favorites.forEach((product, index) => {
        const card = createFavoriteCard(product, index);
        grid.appendChild(card);
    });
}

function createFavoriteCard(product, index) {
    const card = document.createElement('div');
    card.className = 'favorito-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const specsHTML = product.specs && product.specs.length > 0
        ? `<ul class="favorito-card-specs">
            ${product.specs.slice(0, 3).map(spec => `<li>${spec}</li>`).join('')}
           </ul>`
        : '';

    card.innerHTML = `
        <div class="favorito-card-image-wrapper">
            <img src="${product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'}" 
                 alt="${product.name}" 
                 class="favorito-card-image"
                 onerror="this.src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'">
            ${product.category ? `<div class="favorito-card-badge">${product.category}</div>` : ''}
            <button class="favorito-card-remove" onclick="handleRemoveFavorite('${product.name.replace(/'/g, "\\'")}', '${product.categoryKey || ''}')" title="Remover dos favoritos">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="favorito-card-content">
            <div class="favorito-card-brand">${product.brand || 'Ampla'}</div>
            <h3 class="favorito-card-title">${product.name}</h3>
            ${specsHTML}
            <div class="favorito-card-footer">
                <div class="favorito-card-price">${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="favorito-card-actions">
                    <button class="favorito-card-btn favorito-card-btn-secondary" onclick="addToCartFromFavorite('${product.name.replace(/'/g, "\\'")}', '${product.categoryKey || ''}')">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                    <button class="favorito-card-btn favorito-card-btn-primary" onclick="goToProduct('${product.name.replace(/'/g, "\\'")}', '${product.categoryKey || ''}')">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

function handleRemoveFavorite(productName, categoryKey) {
    if (confirm(`Deseja remover "${productName}" dos favoritos?`)) {
        const card = event.target.closest('.favorito-card');
        if (card) {
            card.classList.add('removing');
            setTimeout(() => {
                removeFromFavorites(productName, categoryKey);
                renderFavorites();
                updateFavoritesCount();
                if (window.showToast) {
                    showToast('Produto removido dos favoritos', { success: true });
                }
            }, 400);
        }
    }
}

function clearAllFavorites() {
    if (confirm('Deseja remover todos os produtos dos favoritos?')) {
        saveFavorites([]);
        renderFavorites();
        updateFavoritesCount();
        if (window.showToast) {
            showToast('Todos os favoritos foram removidos', { success: true });
        }
    }
}

function addToCartFromFavorite(productName, categoryKey) {
    // Buscar produto completo
    fetch('products.json')
        .then(r => r.json())
        .then(allProducts => {
            let product = allProducts.find(p => 
                p.name === productName && (categoryKey ? p.categoryKey === categoryKey : true)
            );

            if (!product) {
                // Tentar buscar nos dados locais
                if (window.produtosData) {
                    for (const key of Object.keys(window.produtosData)) {
                        const p = window.produtosData[key].products.find(item => item.name === productName);
                        if (p) {
                            product = { ...p, categoryKey: key, category: window.produtosData[key].title };
                            break;
                        }
                    }
                }
            }

            if (product && window.addToCart) {
                window.addToCart(productName, categoryKey);
                if (window.showToast) {
                    showToast(`${productName} adicionado ao carrinho`, { success: true });
                }
            } else {
                // Fallback: adicionar direto ao carrinho usando localStorage
                const cart = getCart();
                const existingIndex = cart.findIndex(i => i.name === productName);
                
                const favoriteProduct = getFavorites().find(f => f.name === productName);
                if (favoriteProduct) {
                    if (existingIndex > -1) {
                        cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
                    } else {
                        cart.push({
                            name: favoriteProduct.name,
                            brand: favoriteProduct.brand,
                            price: favoriteProduct.price,
                            image: favoriteProduct.image,
                            qty: 1,
                            categoryKey: favoriteProduct.categoryKey || ''
                        });
                    }
                    saveCart(cart);
                    updateCartCount();
                    if (window.showToast) {
                        showToast(`${productName} adicionado ao carrinho`, { success: true });
                    }
                }
            }
        })
        .catch(err => {
            console.warn('Erro ao carregar products.json, usando fallback', err);
            // Fallback direto
            const cart = getCart();
            const favoriteProduct = getFavorites().find(f => f.name === productName);
            if (favoriteProduct) {
                const existingIndex = cart.findIndex(i => i.name === productName);
                if (existingIndex > -1) {
                    cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
                } else {
                    cart.push({
                        name: favoriteProduct.name,
                        brand: favoriteProduct.brand,
                        price: favoriteProduct.price,
                        image: favoriteProduct.image,
                        qty: 1,
                        categoryKey: favoriteProduct.categoryKey || ''
                    });
                }
                saveCart(cart);
                updateCartCount();
                if (window.showToast) {
                    showToast(`${productName} adicionado ao carrinho`, { success: true });
                }
            }
        });
}

function goToProduct(productName, categoryKey) {
    if (categoryKey) {
        window.location.href = `produtos.html?categoria=${categoryKey}`;
    } else {
        window.location.href = 'produtos.html?catalogo=completo';
    }
}

// Funções auxiliares do carrinho (se não existirem globalmente)
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
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderFavorites();
    updateCartCount();
    updateFavoritesCount();

    // Botão limpar todos
    const clearBtn = document.getElementById('clear-all-favorites');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAllFavorites);
    }
    
    // Atualizar contador de favoritos periodicamente
    setInterval(updateFavoritesCount, 2000);
});

// Função para atualizar contador de favoritos no header
function updateFavoritesCount() {
    const favorites = getFavorites();
    const count = favorites.length;
    const favoritesCountEl = document.getElementById('favorites-count');
    if (favoritesCountEl) {
        favoritesCountEl.textContent = count;
    }
}

// Exportar funções para uso global
window.getFavorites = getFavorites;
window.addToFavorites = addToFavorites;
window.removeFromFavorites = removeFromFavorites;
window.isFavorite = isFavorite;

