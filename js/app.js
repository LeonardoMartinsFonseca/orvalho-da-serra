// Telefone do lojista (Substitua pelo número real)
const WHATSAPP_NUMBER = "5535992225475"; 

// Mock do Banco de Dados de Produtos
const products = [
    {
        id: 1,
        name: "Queijo Minas Artesanal Maturado",
        description: "Maturado em prateleiras de madeira na altitude da serra. Casca amarelada e interior macio.",
        price: 85.00,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=500" // Placeholder
    },
    {
        id: 2,
        name: "Mel Silvestre Florada Nativa",
        description: "Colhido em áreas de preservação. Sabor intenso e propriedades terapêuticas únicas.",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1587049352847-4d4b1a457a40?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        name: "Doce de Leite na Panela de Cobre",
        description: "Receita de família centenária, cremoso, sem conservantes e feito lentamente ao fogo.",
        price: 38.00,
        image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=500"
    }
];

// Função para formatar moeda
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Função para gerar link do WhatsApp
const generateWhatsAppLink = (productName) => {
    const message = `Olá! Vim pelo catálogo digital. Gostaria de encomendar o produto: *${productName}*. Pode me ajudar?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Renderizar Produtos no DOM
const renderProducts = () => {
    const grid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">${formatCurrency(product.price)}</div>
                <a href="${generateWhatsAppLink(product.name)}" target="_blank" class="btn-primary">Comprar pelo WhatsApp</a>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
};

// Gerar QR Code Geral
const generateGeneralQRCode = () => {
    const defaultMessage = "Olá! Gostaria de conhecer mais os produtos da Orvalho da Serra.";
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
    
    new QRCode(document.getElementById("general-qrcode"), {
        text: link,
        width: 150,
        height: 150,
        colorDark : "#6B4226", // Cor da logo
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    generateGeneralQRCode();
});