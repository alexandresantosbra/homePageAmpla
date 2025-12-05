// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação e envio do formulário
const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        
        if (!email || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Simulação de envio
        const submitButton = quoteForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        // Simular envio (substituir por chamada real à API)
        setTimeout(() => {
            alert('Orçamento solicitado com sucesso! Entraremos em contato em até 24 horas.');
            quoteForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Máscara para telefone
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            e.target.value = value;
        }
    });
}

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .service-card, .feature-item, .benefit-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Botões de call-to-action
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Orçamento') || this.textContent.includes('Solicitar')) {
            e.preventDefault();
            const quoteSection = document.querySelector('.quote-section');
            if (quoteSection) {
                quoteSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Botão flutuante de redes sociais - suporte para mobile e interatividade
const socialBalloon = document.querySelector('.social-balloon');
const socialIconMain = document.querySelector('.social-icon-main');
const socialItems = document.querySelectorAll('.social-item');

if (socialBalloon && socialIconMain) {
    let isOpen = false;
    
    // Efeito de clique no botão principal
    socialIconMain.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    socialIconMain.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.15) rotate(360deg)';
        setTimeout(() => {
            if (!isOpen) {
                this.style.transform = '';
            }
        }, 300);
    });
    
    const socialMenu = socialBalloon.querySelector('.social-menu');
    
    // Para desktop - hover
    socialBalloon.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
            isOpen = true;
            // Adiciona classe para animação
            socialIconMain.classList.add('active');
            if (socialMenu) {
                socialMenu.style.opacity = '1';
                socialMenu.style.visibility = 'visible';
                socialMenu.style.transform = 'translateY(-50%) translateX(0)';
                socialMenu.style.pointerEvents = 'all';
            }
        }
    });
    
    // Manter menu aberto quando mouse está sobre o menu ou botão
    socialBalloon.addEventListener('mouseleave', function(e) {
        if (window.innerWidth > 768) {
            // Verifica se o mouse está saindo para um elemento que não é o menu
            const relatedTarget = e.relatedTarget;
            // Aguarda um pouco antes de fechar para dar tempo de mover o mouse
            setTimeout(() => {
                if (!socialBalloon.matches(':hover') && (!relatedTarget || !socialBalloon.contains(relatedTarget))) {
                    if (!socialMenu || !socialMenu.matches(':hover')) {
                        isOpen = false;
                        socialIconMain.classList.remove('active');
                        if (socialMenu) {
                            socialMenu.style.opacity = '0';
                            socialMenu.style.visibility = 'hidden';
                            socialMenu.style.transform = 'translateY(-50%) translateX(20px)';
                            socialMenu.style.pointerEvents = 'none';
                        }
                    }
                }
            }, 100);
        }
    });
    
    // Manter menu aberto quando mouse entra no menu
    if (socialMenu) {
        socialMenu.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                isOpen = true;
                socialIconMain.classList.add('active');
                this.style.opacity = '1';
                this.style.visibility = 'visible';
                this.style.transform = 'translateY(-50%) translateX(0)';
                this.style.pointerEvents = 'all';
            }
        });
        
        socialMenu.addEventListener('mouseleave', function(e) {
            if (window.innerWidth > 768) {
                const relatedTarget = e.relatedTarget;
                // Aguarda um pouco antes de fechar
                setTimeout(() => {
                    if (!socialBalloon.matches(':hover') && (!relatedTarget || !socialBalloon.contains(relatedTarget))) {
                        isOpen = false;
                        socialIconMain.classList.remove('active');
                        this.style.opacity = '0';
                        this.style.visibility = 'hidden';
                        this.style.transform = 'translateY(-50%) translateX(20px)';
                        this.style.pointerEvents = 'none';
                    }
                }, 100);
            }
        });
    }
    
    // Para mobile - toque
    socialBalloon.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            isOpen = !isOpen;
            const socialMenu = this.querySelector('.social-menu');
            if (socialMenu) {
                if (isOpen) {
                    socialMenu.style.opacity = '1';
                    socialMenu.style.visibility = 'visible';
                    socialMenu.style.transform = 'translateY(-50%) translateX(0)';
                    socialMenu.style.pointerEvents = 'all';
                    socialIconMain.classList.add('active');
                } else {
                    socialMenu.style.opacity = '0';
                    socialMenu.style.visibility = 'hidden';
                    socialMenu.style.transform = 'translateY(-50%) translateX(20px)';
                    socialMenu.style.pointerEvents = 'none';
                    socialIconMain.classList.remove('active');
                }
            }
        }
    });
    
    // Efeito de hover nos itens de rede social
    socialItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-8px) scale(1.05)';
            // Efeito de vibração sutil
            this.style.animation = 'shake 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.animation = '';
        });
        
        // Efeito de clique
        item.addEventListener('mousedown', function() {
            this.style.transform = 'translateX(-8px) scale(0.95)';
        });
        
        item.addEventListener('mouseup', function() {
            this.style.transform = 'translateX(-8px) scale(1.05)';
        });
    });
    
    // Fechar ao clicar fora (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && isOpen && !socialBalloon.contains(e.target)) {
            isOpen = false;
            const socialMenu = socialBalloon.querySelector('.social-menu');
            if (socialMenu) {
                socialMenu.style.opacity = '0';
                socialMenu.style.visibility = 'hidden';
                socialMenu.style.transform = 'translateY(-50%) translateX(20px)';
                socialMenu.style.pointerEvents = 'none';
                socialIconMain.classList.remove('active');
            }
        }
    });
    
    // Efeito de atenção - pisca quando a página carrega
    setTimeout(() => {
        socialIconMain.style.animation = 'attention 1s ease 2';
    }, 2000);
}

// Adicionar animação de shake ao CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0) scale(1.05); }
        25% { transform: translateX(-3px) scale(1.05); }
        75% { transform: translateX(3px) scale(1.05); }
    }
    
    @keyframes attention {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    .social-icon-main.active {
        animation: none !important;
    }
`;
document.head.appendChild(style);

