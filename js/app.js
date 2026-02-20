// Telefone do lojista (Certifique-se de usar o código do país + DDD)
const WHATSAPP_NUMBER = "5535992225475"; 

// Mock do Banco de Dados de Produtos com caminhos locais
const products = [
    {
        id: 1,
        name: "Queijo Parmesão Artesanal",
        description: "Tradicional queijo da Mantiqueira, com maturação artesanal e sabor que remete às fazendas históricas da nossa serra.",
        price: 65.00,
        image: "assets/produtos/queijo.png" 
    },
    {
        id: 2,
        name: "Mel Silvestre Florada Nativa",
        description: "Puro e silvestre, colhido diretamente das matas preservadas da região, trazendo notas florais únicas.",
        price: 55.00,
        image: "assets/produtos/mel.png" 
    },
    {
        id: 3,
        name: "Champignon de Paris",
        description: "Cogumelos selecionados, cultivados nas encostas úmidas da Mantiqueira. Frescor e textura para a alta gastronomia.",
        price: 40.00,
        image: "assets/produtos/champignon.png"
    }
];

// Função para formatar moeda (Real Brasileiro)
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Função para gerar link dinâmico do WhatsApp
const generateWhatsAppLink = (productName) => {
    const message = `Olá! Gostaria de encomendar o produto: *${productName}*. Pode me ajudar com o pedido?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Renderizar Produtos no Catálogo
const renderProducts = () => {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ""; // Limpa o grid antes de renderizar
    
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

// Gerar QR Code para contato geral
const generateGeneralQRCode = () => {
    const defaultMessage = "Olá! Gostaria de conhecer mais os produtos da Orvalho da Serra.";
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
    
    new QRCode(document.getElementById("general-qrcode"), {
        text: link,
        width: 150,
        height: 150,
        colorDark : "#3D5A40", // Verde Pinheiro da Logo
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    generateGeneralQRCode();
});