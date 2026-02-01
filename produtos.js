// Dados dos produtos por categoria
const produtosData = {
    'blocos-cimento': {
        title: 'Blocos e Cimento',
        tag: 'Estrutural',
        description: 'Materiais estruturais de alta resistência para fundações e alvenaria. Oferecemos as melhores marcas do mercado com garantia de qualidade.',
        products: [
            {
                name: 'Cimento Portland CP II-E-32',
                brand: 'Votorantim',
                specs: ['Resistência: 32 MPa', 'Peso: 50kg', 'Tipo: Estrutural'],
                price: 28.90,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Cimento Portland CP II-F-32',
                brand: 'Cauê',
                specs: ['Resistência: 32 MPa', 'Peso: 50kg', 'Tipo: Estrutural'],
                price: 27.50,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Cimento Portland CP II-Z-32',
                brand: 'Itambé',
                specs: ['Resistência: 32 MPa', 'Peso: 50kg', 'Tipo: Estrutural'],
                price: 29.90,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Bloco de Concreto 14x19x39cm',
                brand: 'Tigre',
                specs: ['Dimensões: 14x19x39cm', 'Resistência: 4.0 MPa', 'Unidade'],
                price: 2.85,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Bloco de Concreto 9x19x39cm',
                brand: 'Tigre',
                specs: ['Dimensões: 9x19x39cm', 'Resistência: 4.0 MPa', 'Unidade'],
                price: 1.95,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Bloco Cerâmico 9x19x19cm',
                brand: 'Cerâmica São Paulo',
                specs: ['Dimensões: 9x19x19cm', 'Furo: 6 furos', 'Unidade'],
                price: 0.85,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Cimento Portland CP V-ARI',
                brand: 'Votorantim',
                specs: ['Alta Resistência Inicial', 'Peso: 50kg', 'Tipo: Estrutural'],
                price: 32.90,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Argamassa Colante AC III',
                brand: 'Votomassa',
                specs: ['Peso: 20kg', 'Rendimento: 5m²', 'Tipo: Colante'],
                price: 18.50,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            }
        ]
    },
    'aco-ferro': {
        title: 'Aço e Ferro',
        tag: 'Metálicos',
        description: 'Perfis metálicos, tubos e barras de aço para estruturas robustas. Qualidade certificada para sua obra.',
        products: [
            {
                name: 'Barra de Aço CA-50 12.5mm',
                brand: 'Gerdau',
                specs: ['Diâmetro: 12.5mm', 'Comprimento: 12m', 'CA-50'],
                price: 45.90,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Barra de Aço CA-50 10mm',
                brand: 'Gerdau',
                specs: ['Diâmetro: 10mm', 'Comprimento: 12m', 'CA-50'],
                price: 28.50,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Barra de Aço CA-50 8mm',
                brand: 'Gerdau',
                specs: ['Diâmetro: 8mm', 'Comprimento: 12m', 'CA-50'],
                price: 18.90,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Perfil I 6"',
                brand: 'ArcelorMittal',
                specs: ['Altura: 150mm', 'Comprimento: 12m', 'Peso: 22.4kg/m'],
                price: 125.00,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Tubo Quadrado 50x50x3mm',
                brand: 'ArcelorMittal',
                specs: ['Dimensões: 50x50mm', 'Espessura: 3mm', 'Comprimento: 6m'],
                price: 85.00,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Tela Soldada 2.10x5.40m',
                brand: 'Belgo',
                specs: ['Malha: 15x15cm', 'Bitola: 4.2mm', 'Área: 11.34m²'],
                price: 185.00,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80'
            }
        ]
    },
    'drywall-perfis': {
        title: 'Drywall e Perfis',
        tag: 'Acabamento',
        description: 'Sistemas completos para divisórias e acabamentos internos. Soluções modernas e eficientes.',
        products: [
            {
                name: 'Chapa de Gesso 15mm',
                brand: 'Knauf',
                specs: ['Espessura: 15mm', 'Dimensões: 1.20x2.40m', 'Tipo: Standard'],
                price: 28.90,
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Perfil Montante 70mm',
                brand: 'Knauf',
                specs: ['Altura: 70mm', 'Comprimento: 3m', 'Espessura: 0.95mm'],
                price: 12.50,
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Perfil Guia 70mm',
                brand: 'Knauf',
                specs: ['Altura: 70mm', 'Comprimento: 3m', 'Espessura: 0.95mm'],
                price: 10.90,
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Chapa RF 15mm',
                brand: 'Knauf',
                specs: ['Resistente à Umidade', 'Dimensões: 1.20x2.40m', 'Tipo: RF'],
                price: 35.90,
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&q=80'
            }
        ]
    },
    'pedras-naturais': {
        title: 'Pedras Naturais',
        tag: 'Revestimento',
        description: 'Revestimentos em pedra natural para projetos sofisticados. Elegância e durabilidade.',
        products: [
            {
                name: 'Pedra São Tomé',
                brand: 'Natural Stone',
                specs: ['Espessura: 2-4cm', 'Formato: Irregular', 'Origem: Nacional'],
                price: 85.00,
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Quartzito Branco',
                brand: 'Natural Stone',
                specs: ['Espessura: 2-3cm', 'Formato: Lajota', 'Origem: Nacional'],
                price: 120.00,
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Granito Cinza',
                brand: 'Natural Stone',
                specs: ['Espessura: 2cm', 'Formato: Retangular', 'Origem: Nacional'],
                price: 95.00,
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80'
            }
        ]
    },
    'tubos-manilhas': {
        title: 'Tubos e Manilhas',
        tag: 'Infraestrutura',
        description: 'Sistemas de drenagem e esgoto para infraestrutura completa. Qualidade e durabilidade.',
        products: [
            {
                name: 'Manilha de Concreto 60cm',
                brand: 'Tigre',
                specs: ['Diâmetro: 60cm', 'Comprimento: 1m', 'Classe: Normal'],
                price: 185.00,
                image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Tubo PVC 100mm',
                brand: 'Tigre',
                specs: ['Diâmetro: 100mm', 'Comprimento: 6m', 'Tipo: Esgoto'],
                price: 45.90,
                image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Tubo PVC 150mm',
                brand: 'Tigre',
                specs: ['Diâmetro: 150mm', 'Comprimento: 6m', 'Tipo: Esgoto'],
                price: 95.00,
                image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop&q=80'
            }
        ]
    },
    'concreto-especial': {
        title: 'Concreto Especial',
        tag: 'Premium',
        description: 'Soluções em concreto para projetos arquitetônicos exclusivos. Inovação e qualidade.',
        products: [
            {
                name: 'Concreto Arquitetônico',
                brand: 'Votorantim',
                specs: ['Resistência: 30 MPa', 'Acabamento: Liso', 'Tipo: Especial'],
                price: 450.00,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            },
            {
                name: 'Concreto Colorido',
                brand: 'Votorantim',
                specs: ['Resistência: 25 MPa', 'Cores Disponíveis', 'Tipo: Decorativo'],
                price: 520.00,
                image: 'https://images.unsplash.com/photo-1504307651254-35680f053423?w=400&h=300&fit=crop&q=80'
            }
        ]
    }
};

// Função para obter parâmetros da URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Variável global para armazenar todos os produtos (para busca)
let allProductsGlobal = [];

// ======= Favoritos - Funções (definidas antes de renderProducts) =======
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
        // Atualizar contador de favoritos
        if (typeof updateFavoritesCount === 'function') {
            updateFavoritesCount();
        } else if (window.updateFavoritesCount) {
            window.updateFavoritesCount();
        }
    } catch (e) {
        console.error('Erro ao salvar favoritos', e);
    }
}

function isProductFavorite(productName, categoryKey = '') {
    const favorites = getFavorites();
    return favorites.some(f => 
        f.name === productName && (categoryKey ? f.categoryKey === categoryKey : true)
    );
}

function addToFavorites(productName, categoryKey = '') {
    // Buscar produto completo
    let product = allProductsGlobal.find(p => 
        p.name === productName && (categoryKey ? p.categoryKey === categoryKey : true)
    );

    // Se não encontrar, procurar em produtosData
    if (!product) {
        for (const key of Object.keys(produtosData)) {
            const p = produtosData[key].products.find(item => item.name === productName);
            if (p) {
                product = { ...p, categoryKey: key, category: produtosData[key].title };
                break;
            }
        }
    }

    if (!product) {
        console.warn('Produto não encontrado para adicionar aos favoritos:', productName);
        return false;
    }

    const favorites = getFavorites();
    const exists = favorites.some(f => 
        f.name === productName && (categoryKey ? f.categoryKey === categoryKey : true)
    );

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

function toggleFavorite(productName, categoryKey = '') {
    const isFavorite = isProductFavorite(productName, categoryKey);
    
    if (isFavorite) {
        removeFromFavorites(productName, categoryKey);
        if (window.showToast) {
            showToast('Produto removido dos favoritos', { success: true });
        }
    } else {
        addToFavorites(productName, categoryKey);
        if (window.showToast) {
            showToast('Produto adicionado aos favoritos', { success: true });
        }
    }
    
    // Atualizar visual do botão
    const button = event.target.closest('.btn-product-favorite');
    if (button) {
        if (isFavorite) {
            button.classList.remove('active');
            button.setAttribute('data-tooltip', 'Adicionar aos Favoritos');
        } else {
            button.classList.add('active');
            button.setAttribute('data-tooltip', 'Remover dos Favoritos');
        }
    }
    
    // Recarregar produtos para atualizar todos os botões
    setTimeout(() => {
        const catalogo = getUrlParameter('catalogo');
        if (catalogo === 'completo') {
            filterFullCatalog();
        } else {
            filterProducts();
        }
    }, 100);
}

// Função para renderizar produtos
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente pesquisar com outros termos ou limpar os filtros.</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-detail-card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-content">
                <span class="product-detail-brand">${product.brand}</span>
                <h3 class="product-detail-name">${product.name}</h3>
                <div class="product-detail-specs">
                    <ul>
                        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-detail-price">
                    R$ ${product.price.toFixed(2).replace('.', ',')}
                    <span> / unidade</span>
                </div>
                <div class="product-detail-actions">
                    <button class="btn-product btn-product-favorite ${isProductFavorite(product.name, product.categoryKey || '') ? 'active' : ''}" 
                            onclick="toggleFavorite('${product.name.replace(/'/g, "\\'")}','${product.categoryKey || ''}')" 
                            data-tooltip="${isProductFavorite(product.name, product.categoryKey || '') ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}" 
                            aria-label="Favoritar produto">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="btn-product btn-product-add" onclick="addToCart('${product.name.replace(/'/g, "\\'")}','${product.categoryKey || ''}')" data-tooltip="Adicionar ao Carrinho" aria-label="Adicionar ao carrinho">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                    <button class="btn-product btn-product-primary" onclick="solicitarOrcamento('${product.name.replace(/'/g, "\\'")}')">
                        <i class="fas fa-shopping-cart"></i> Comprar
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Função para atualizar filtros
function updateFilters(products) {
    const brandSelect = document.getElementById('filter-brand');
    if (!brandSelect) return;
    
    // Limpar opções existentes (exceto se for catálogo completo)
    const catalogo = getUrlParameter('catalogo');
    if (catalogo !== 'completo') {
        const brands = [...new Set(products.map(p => p.brand))];
        brandSelect.innerHTML = '<option value="all">Todas as Marcas</option>';
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });
    }
}

// Função para buscar produtos
function searchProducts(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
        return null; // Retorna null se não houver termo de busca
    }
    
    const term = searchTerm.toLowerCase().trim();
    const results = [];
    
    Object.keys(produtosData).forEach(categoryKey => {
        const categoryData = produtosData[categoryKey];
        categoryData.products.forEach(product => {
            // Buscar no nome
            if (product.name.toLowerCase().includes(term)) {
                results.push({
                    ...product,
                    category: categoryData.title,
                    categoryKey: categoryKey
                });
                return;
            }
            
            // Buscar na marca
            if (product.brand.toLowerCase().includes(term)) {
                results.push({
                    ...product,
                    category: categoryData.title,
                    categoryKey: categoryKey
                });
                return;
            }
            
            // Buscar nas especificações
            const specsText = product.specs.join(' ').toLowerCase();
            if (specsText.includes(term)) {
                results.push({
                    ...product,
                    category: categoryData.title,
                    categoryKey: categoryKey
                });
            }
        });
    });
    
    return results;
}

// Função para filtrar produtos
function filterProducts() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput?.value || '';
    
    // Se houver busca, usar resultados da busca
    if (searchTerm.trim() !== '') {
        const searchResults = searchProducts(searchTerm);
        if (searchResults) {
            applyFiltersAndSort(searchResults, true);
            return;
        }
    }
    
    const category = getUrlParameter('categoria') || 'blocos-cimento';
    const categoryData = produtosData[category];
    if (!categoryData) return;
    
    let filtered = [...categoryData.products];
    
    // Filtro por marca
    const brandFilter = document.getElementById('filter-brand')?.value;
    if (brandFilter && brandFilter !== 'all') {
        filtered = filtered.filter(p => p.brand === brandFilter);
    }
    
    // Ordenação
    applySort(filtered);
    renderProducts(filtered);
    updateSearchInfo(filtered.length);
}

// Função para aplicar filtros e ordenação
function applyFiltersAndSort(products, isSearch = false) {
    let filtered = [...products];
    
    // Filtro por marca (se não for busca)
    if (!isSearch) {
        const brandFilter = document.getElementById('filter-brand')?.value;
        if (brandFilter && brandFilter !== 'all' && brandFilter !== 'all-categories') {
            if (brandFilter.startsWith('category-')) {
                const categoryKey = brandFilter.replace('category-', '');
                filtered = filtered.filter(p => p.categoryKey === categoryKey);
            } else {
                filtered = filtered.filter(p => p.brand === brandFilter);
            }
        }
    }
    
    // Ordenação
    applySort(filtered);
    renderProducts(filtered);
    updateSearchInfo(filtered.length);
}

// Função para aplicar ordenação
function applySort(products) {
    const sortFilter = document.getElementById('filter-sort')?.value;
    if (sortFilter === 'price-asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-desc') {
        products.sort((a, b) => b.price - a.price);
    } else {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }
}

// Função para atualizar informações de busca
function updateSearchInfo(count) {
    const searchInfo = document.getElementById('search-results-info');
    const searchCount = document.getElementById('search-count');
    const searchInput = document.getElementById('search-input');
    
    if (searchInfo && searchCount) {
        if (searchInput && searchInput.value.trim() !== '') {
            searchCount.textContent = count;
            searchInfo.style.display = 'block';
        } else {
            searchInfo.style.display = 'none';
        }
    }
}

// Função para carregar categoria ou catálogo completo
function loadCategory() {
    const catalogo = getUrlParameter('catalogo');
    const category = getUrlParameter('categoria');
    
    // Coletar todos os produtos para busca global
    allProductsGlobal = [];
    Object.keys(produtosData).forEach(categoryKey => {
        const categoryData = produtosData[categoryKey];
        categoryData.products.forEach(product => {
            allProductsGlobal.push({
                ...product,
                category: categoryData.title,
                categoryKey: categoryKey
            });
        });
    });
    
    // Se for catálogo completo
    if (catalogo === 'completo') {
        loadFullCatalog();
        setupSearch();
        return;
    }
    
    // Se for uma categoria específica
    const categoryKey = category || 'blocos-cimento';
    const categoryData = produtosData[categoryKey];
    
    if (!categoryData) {
        window.location.href = 'index.html';
        return;
    }
    
    // Atualizar header
    document.getElementById('category-title').textContent = categoryData.title;
    document.getElementById('category-tag').textContent = categoryData.tag;
    document.getElementById('category-description').textContent = categoryData.description;
    document.getElementById('breadcrumb-category').textContent = categoryData.title;
    
    // Atualizar filtros
    updateFilters(categoryData.products);
    
    // Renderizar produtos
    renderProducts(categoryData.products);
    updateSearchInfo(categoryData.products.length);
    
    // Adicionar event listeners
    document.getElementById('filter-brand')?.addEventListener('change', filterProducts);
    document.getElementById('filter-sort')?.addEventListener('change', filterProducts);
    
    // Configurar busca
    setupSearch();
}

// Função para configurar a barra de pesquisa
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    
    if (!searchInput) return;
    
    // Event listener para busca em tempo real
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const term = this.value.trim();
        
        // Mostrar/ocultar botão de limpar
        if (searchClear) {
            searchClear.style.display = term ? 'flex' : 'none';
        }
        
        // Debounce da busca
        searchTimeout = setTimeout(() => {
            performSearch(term);
        }, 300);
    });
    
    // Botão de limpar busca
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            performSearch('');
        });
    }
    
    // Buscar ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value.trim());
        }
    });
}

// Função para executar a busca
function performSearch(term) {
    const catalogo = getUrlParameter('catalogo');
    
    if (!term || term.trim() === '') {
        // Se não houver termo, recarregar categoria/catálogo normal
        if (catalogo === 'completo') {
            filterFullCatalog();
        } else {
            filterProducts();
        }
        updateSearchInfo(0);
        return;
    }
    
    const results = searchProducts(term);
    
    if (results && results.length > 0) {
        // Se for catálogo completo, renderizar agrupado por categoria
        if (catalogo === 'completo') {
            applySort(results);
            renderFullCatalog(results);
            updateSearchInfo(results.length);
        } else {
            // Se for categoria específica, renderizar normalmente
            applyFiltersAndSort(results, true);
        }
    } else {
        if (catalogo === 'completo') {
            renderFullCatalog([]);
        } else {
            renderProducts([]);
        }
        updateSearchInfo(0);
    }
}

// Função para carregar catálogo completo
function loadFullCatalog() {
    // Atualizar header
    document.getElementById('category-title').textContent = 'Catálogo Completo';
    document.getElementById('category-tag').textContent = 'Todos os Produtos';
    document.getElementById('category-description').textContent = 'Explore todos os nossos produtos organizados por categoria. Encontre exatamente o que precisa para sua obra.';
    document.getElementById('breadcrumb-category').textContent = 'Catálogo Completo';
    
    // Atualizar label do filtro
    const filterLabel = document.getElementById('filter-label');
    if (filterLabel) {
        filterLabel.textContent = 'Filtrar por Categoria/Marca:';
    }
    
    // Coletar todos os produtos de todas as categorias
    let allProducts = [];
    Object.keys(produtosData).forEach(categoryKey => {
        const categoryData = produtosData[categoryKey];
        categoryData.products.forEach(product => {
            allProducts.push({
                ...product,
                category: categoryData.title,
                categoryTag: categoryData.tag,
                categoryKey: categoryKey
            });
        });
    });
    
    // Atualizar filtros
    const brandSelect = document.getElementById('filter-brand');
    if (brandSelect) {
        brandSelect.innerHTML = '<option value="all-categories">Todas as Categorias</option>';
        
        // Adicionar categorias como opções
        Object.keys(produtosData).forEach(categoryKey => {
            const categoryData = produtosData[categoryKey];
            const option = document.createElement('option');
            option.value = `category-${categoryKey}`;
            option.textContent = categoryData.title;
            brandSelect.appendChild(option);
        });
        
        // Adicionar todas as marcas
        const brands = [...new Set(allProducts.map(p => p.brand))];
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });
    }
    
    // Armazenar produtos globalmente
    allProductsGlobal = allProducts;
    
    // Renderizar todos os produtos
    renderFullCatalog(allProducts);
    updateSearchInfo(allProducts.length);
    
    // Adicionar event listeners
    document.getElementById('filter-brand')?.addEventListener('change', filterFullCatalog);
    document.getElementById('filter-sort')?.addEventListener('change', filterFullCatalog);
    
    // Configurar busca
    setupSearch();
}

// Função para renderizar catálogo completo
function renderFullCatalog(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente pesquisar com outros termos ou limpar os filtros.</p>
            </div>
        `;
        return;
    }
    
    // Agrupar por categoria
    const productsByCategory = {};
    products.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    });
    
    // Renderizar cada categoria
    Object.keys(productsByCategory).forEach(categoryName => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.innerHTML = `
            <h2 class="category-section-title">${categoryName}</h2>
            <div class="category-products-grid"></div>
        `;
        
        const productsGrid = categorySection.querySelector('.category-products-grid');
        productsByCategory[categoryName].forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
        });
        
        grid.appendChild(categorySection);
    });
}

// Função para criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-detail-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        <div class="product-detail-content">
            <span class="product-detail-brand">${product.brand}</span>
            <h3 class="product-detail-name">${product.name}</h3>
            <div class="product-detail-specs">
                <ul>
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="product-detail-price">
                R$ ${product.price.toFixed(2).replace('.', ',')}
                <span> / unidade</span>
            </div>
            <div class="product-detail-actions">
                <button class="btn-product btn-product-favorite ${isProductFavorite(product.name, product.categoryKey || '') ? 'active' : ''}" 
                        onclick="toggleFavorite('${product.name.replace(/'/g, "\\'")}','${product.categoryKey || ''}')" 
                        data-tooltip="${isProductFavorite(product.name, product.categoryKey || '') ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}" 
                        aria-label="Favoritar produto">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="btn-product btn-product-add" onclick="addToCart('${product.name.replace(/'/g, "\\'")}','${product.categoryKey || ''}')" data-tooltip="Adicionar ao Carrinho" aria-label="Adicionar ao carrinho">
                    <i class="fas fa-cart-plus"></i>
                </button>
                <button class="btn-product btn-product-primary" onclick="solicitarOrcamento('${product.name.replace(/'/g, "\\'")}')">
                    <i class="fas fa-shopping-cart"></i> Comprar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Função para filtrar catálogo completo
function filterFullCatalog() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput?.value || '';
    
    // Se houver busca, usar resultados da busca
    if (searchTerm.trim() !== '') {
        const searchResults = searchProducts(searchTerm);
        if (searchResults) {
            applyFiltersAndSort(searchResults, true);
            return;
        }
    }
    
    let filtered = [...allProductsGlobal];
    
    // Filtro por marca ou categoria
    const brandFilter = document.getElementById('filter-brand')?.value;
    if (brandFilter && brandFilter !== 'all' && brandFilter !== 'all-categories') {
        if (brandFilter.startsWith('category-')) {
            const categoryKey = brandFilter.replace('category-', '');
            filtered = filtered.filter(p => p.categoryKey === categoryKey);
        } else {
            filtered = filtered.filter(p => p.brand === brandFilter);
        }
    }
    
    // Ordenação
    applySort(filtered);
    renderFullCatalog(filtered);
    updateSearchInfo(filtered.length);
}

// Funções auxiliares
function solicitarOrcamento(productName) {
    // Redirecionar para página de pagamento/carrinho com auto-abertura do modal
    window.location.href = 'cart.html?autoPay=1';
}

// Função verDetalhes removida: botão de detalhes não é exibido no catálogo.

// ======= Carrinho - armazenamento em localStorage =======
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

function addToCart(name, categoryKey = '') {
    // Procurar produto primeiro em allProductsGlobal
    let product = allProductsGlobal.find(p => p.name === name && (categoryKey ? p.categoryKey === categoryKey : true));

    // Se não encontrar, procurar em produtosData
    if (!product) {
        for (const key of Object.keys(produtosData)) {
            const p = produtosData[key].products.find(item => item.name === name);
            if (p) {
                product = { ...p, categoryKey: key, category: produtosData[key].title };
                break;
            }
        }
    }

    if (!product) {
        alert('Produto não encontrado para adicionar ao carrinho.');
        return;
    }

    const cart = getCart();
    const existingIndex = cart.findIndex(i => i.name === product.name);
    if (existingIndex > -1) {
        cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
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
    // Feedback não bloqueante
    const count = cart.reduce((s, it) => s + (it.qty || 0), 0);
    if (window.showToast) {
        showToast(`${product.name} salvo nos produtos. Itens: ${count}`, { success: true });
    } else {
        alert(`${product.name} salvo nos produtos. Itens no carrinho: ${count}`);
    }
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((s, it) => s + (it.qty || 0), 0);
    const els = document.querySelectorAll('#cart-count');
    els.forEach(el => el.textContent = count);
}

// Atualizar contadores ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    if (typeof updateFavoritesCount === 'function') {
        updateFavoritesCount();
    } else if (window.updateFavoritesCount) {
        window.updateFavoritesCount();
    }
});

// Carregar quando a página estiver pronta
document.addEventListener('DOMContentLoaded', loadCategory);

// Expor funções usadas por handlers inline em HTML (quando o script é carregado como module)
if (typeof window !== 'undefined') {
    window.addToCart = addToCart;
    window.solicitarOrcamento = solicitarOrcamento;
    window.updateCartCount = updateCartCount;
    window.toggleFavorite = toggleFavorite;
    window.isProductFavorite = isProductFavorite;
    window.getFavorites = getFavorites;
    window.addToFavorites = addToFavorites;
    window.removeFromFavorites = removeFromFavorites;
}

