// 产品页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 系列标签切换
    initSeriesTabs();
    
    // 产品图片懒加载
    initLazyLoading();
    
    // 价格动画
    initPriceAnimation();
});

// 系列标签切换功能
function initSeriesTabs() {
    const seriesTabs = document.querySelectorAll('.series-tab');
    const seriesSections = document.querySelectorAll('.product-series');
    
    seriesTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有激活状态
            seriesTabs.forEach(t => t.classList.remove('active'));
            // 添加当前激活状态
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            
            // 滚动到对应系列
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// 价格动画效果
function initPriceAnimation() {
    const prices = document.querySelectorAll('.price');
    
    prices.forEach(price => {
        price.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.color = '#c7000a';
        });
        
        price.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = '#c7000a';
        });
    });
}

// 购物车功能
function addToCart(productId, productName, price) {
    // 这里可以实现添加到购物车的逻辑
    console.log(`添加商品到购物车: ${productName}, 价格: ${price}`);
    
    // 显示添加成功提示
    showToast(`已添加 ${productName} 到购物车`);
}

// 提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}