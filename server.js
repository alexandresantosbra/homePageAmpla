import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '1mb' }));

// CORS - permitir requisições do navegador
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// armazenamento simples em arquivo (orders.json)
const ORDERS_FILE = './.orders.json';
function loadOrders() {
  try { 
    const data = fs.readFileSync(ORDERS_FILE, 'utf8');
    return data ? JSON.parse(data) : {}; 
  } catch (e) { 
    return {}; 
  }
}
function saveOrders(o) { 
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(o, null, 2)); 
}

// Rota para criar pagamento
app.post('/create-payment', async (req, res) => {
  try {
    const body = req.body;
    if (!body || !body.transaction_amount || !body.payer) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    // Gerar ID de pagamento
    const paymentId = 'pay_' + Date.now();
    
    // Simular QR code base64 (imagem PNG branca simples)
    const fakeQrBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    
    const paymentResponse = {
      id: paymentId,
      qr_code_base64: fakeQrBase64,
      qr_code: '000201FAKEPIXCODE123456789',
      expires_in: body.expiration || 3600
    };

    // Salvar ordem
    const orders = loadOrders();
    orders[paymentId] = {
      id: paymentId,
      payload: body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    saveOrders(orders);

    res.json({
      id: paymentId,
      qr_code_base64: paymentResponse.qr_code_base64,
      qr_code: paymentResponse.qr_code,
      expires_in: paymentResponse.expires_in
    });
  } catch (e) {
    console.error('Erro em /create-payment:', e);
    res.status(500).json({ error: 'Erro ao criar pagamento: ' + e.message });
  }
});

// Webhook para gateway notificar status
app.post('/webhook', (req, res) => {
  try {
    const data = req.body || {};
    const paymentId = data.id || data.payment_id || data.order_id;
    const status = data.status || data.payment_status || 'unknown';

    if (!paymentId) {
      return res.status(400).json({ error: 'missing id' });
    }

    const orders = loadOrders();
    if (orders[paymentId]) {
      orders[paymentId].status = (status === 'approved' || status === 'paid') ? 'paid' : status;
      orders[paymentId].updatedAt = new Date().toISOString();
      saveOrders(orders);
    } else {
      orders[paymentId] = { 
        id: paymentId, 
        status: status, 
        createdAt: new Date().toISOString() 
      };
      saveOrders(orders);
    }

    res.json({ ok: true });
  } catch (e) {
    console.error('Erro em /webhook:', e);
    res.status(500).json({ error: e.message });
  }
});

// Rota para checar status de pagamento
app.get('/payment-status/:id', (req, res) => {
  try {
    const id = req.params.id;
    const orders = loadOrders();
    const ord = orders[id];
    
    if (!ord) {
      return res.status(404).json({ error: 'Pedido não encontrado', id: id });
    }
    
    res.json({ id: id, status: ord.status });
  } catch (e) {
    console.error('Erro em /payment-status:', e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n✓ Payment server rodando em http://localhost:${PORT}`);
  console.log(`\n📝 Endpoints disponíveis:`);
  console.log(`  POST http://localhost:${PORT}/create-payment`);
  console.log(`  POST http://localhost:${PORT}/webhook`);
  console.log(`  GET  http://localhost:${PORT}/payment-status/:id\n`);
});
