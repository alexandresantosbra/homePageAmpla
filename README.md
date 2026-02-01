# Homepage Ampla - Materiais de Construção

Homepage moderna e responsiva para a empresa Ampla, especializada em materiais de construção civil.

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Adaptável a todos os dispositivos
- **Seções Incluídas**:
  - Header com navegação fixa
  - Hero section com call-to-action
  - Grid de produtos (6 categorias)
  - Seção de serviços com cards
  - Seção "Por que escolher a Ampla"
  - Formulário de solicitação de orçamento
  - Footer completo

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Todos os estilos estão no arquivo `styles.css`
3. A interatividade está no arquivo `script.js`

## 📁 Estrutura de Arquivos

```
homepage/
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos CSS completos
├── script.js       # JavaScript para interatividade
└── README.md       # Este arquivo
```

## 🎨 Paleta de Cores

- **Teal Primário**: #0D9488
- **Teal Escuro**: #0F766E
- **Laranja**: #F97316
- **Cinza Escuro**: #1F2937
- **Verde**: #10B981

## ✨ Funcionalidades

- Scroll suave entre seções
- Validação de formulário
- Máscara de telefone automática
- Animações de entrada para elementos
- Design responsivo para mobile, tablet e desktop

## 📝 Notas

- As imagens estão usando URLs do Unsplash como placeholder. Substitua pelas imagens reais da empresa.
- O formulário atualmente mostra um alerta ao enviar. Integre com seu backend para processamento real.
- Todos os textos estão em português brasileiro.

## 🔧 Personalização

Para personalizar a homepage:

1. **Cores**: Edite as variáveis CSS no início do arquivo `styles.css`
2. **Conteúdo**: Modifique os textos diretamente no `index.html`
3. **Imagens**: Substitua as URLs do Unsplash pelas suas próprias imagens
4. **Formulário**: Configure o endpoint de envio no arquivo `script.js`

## 🛒 Envio de Pedidos (Checkout)

O projeto inclui um carrinho de compras (`cart.js`) que salva itens em `localStorage` e uma função de `checkout()` que gera um JSON com o pedido.

- Configurações em `cart.js`:
  - `ORDER_ENDPOINT` — URL do webhook/endpoint que receberá o pedido via `POST` com `Content-Type: application/json`. Exemplo: `https://meusite.com/api/orders`. Deixe vazio para usar fallback por email.
  - `OWNER_EMAIL` — email do responsável que será usado para abrir o cliente de email (`mailto:`) com o JSON do pedido no corpo.

- Comportamento:
  - Se `ORDER_ENDPOINT` estiver definido, o site envia um `POST` com o payload JSON `{ createdAt, site, total, items }`.
  - Em caso de falha no envio, o usuário pode copiar o JSON para a área de transferência.
  - Se `ORDER_ENDPOINT` estiver vazio e `OWNER_EMAIL` definido, o cliente de email é aberto com o JSON no corpo.
  - Se nenhum dos dois estiver configurado, o site oferece copiar o JSON para o clipboard.

- Testes rápidos:
  1. Adicione itens ao carrinho na interface.
  2. Defina `ORDER_ENDPOINT` em `cart.js` apontando para um servidor de desenvolvimento (ex.: `https://webhook.site/xxxx`).
  3. Clique em `Finalizar` e verifique o recebimento do JSON no endpoint.

Se quiser, eu configuro um webhook de exemplo (usando `webhook.site`) e atualizo `cart.js` com o endpoint temporário para testes.

---

Desenvolvido com ❤️ para Ampla

