// Toast simples não bloqueante
(function(){
    function ensureContainer(){
        let c = document.getElementById('ampla-toast-container');
        if (!c) {
            c = document.createElement('div');
            c.id = 'ampla-toast-container';
            c.style.position = 'fixed';
            c.style.right = '20px';
            c.style.bottom = '20px';
            c.style.zIndex = 99999;
            c.style.display = 'flex';
            c.style.flexDirection = 'column';
            c.style.gap = '10px';
            document.body.appendChild(c);
        }
        return c;
    }

    window.showToast = function(message, options = {}){
        const container = ensureContainer();
        const toast = document.createElement('div');
        toast.className = 'ampla-toast';
        toast.textContent = message;
        if (options.success) toast.classList.add('ampla-toast-success');
        if (options.error) toast.classList.add('ampla-toast-error');

        container.appendChild(toast);

        const duration = options.duration || 3000;
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(8px)';
            setTimeout(() => container.removeChild(toast), 300);
        }, duration);
    };
})();
