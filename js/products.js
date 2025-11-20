// 产品相关功能

// 产品数据管理
class ProductManager {
    constructor() {
        this.products = {};
        this.categories = {};
        this.init();
    }
    
    async init() {
        await this.loadProductData();
        this.setupEventListeners();
    }
    
    async loadProductData() {
        try {
            // 在实际项目中，这里会从API加载数据
            // const response = await fetch('/api/products');
            // this.products = await response.json();
            
            // 模拟数据
            this.products = {
                'mate60-pro': {
                    id: 'mate60-pro',
                    name: '华为Mate 60 Pro',
                    category: '智能手机',
                    price: 6999,
                    images: ['/myweb/images/22.jpg'],
                    colors: [
                        { name: '雅川青', value: '#2a6f8f', image: '/myweb/images/22.jpg' },
                        { name: '白沙银', value: '#e8e8e8', image: '/myweb/images/22.jpg' }
                    ],
                    configs: [
                        { name: '12GB+512GB', price: 6999 },
                        { name: '12GB+1TB', price: 7999 }
                    ]
                }
                // 可以添加更多产品...
            };
            
            console.log('产品数据加载完成');
        } catch (error) {
            console.error('加载产品数据失败:', error);
        }
    }
    
    setupEventListeners() {
        // 产品筛选
        this.setupProductFilters();
        
        // 产品排序
        this.setupProductSorting();
        
        // 产品搜索
        this.setupProductSearch();
    }
    
    setupProductFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn, .category-tab');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.filterProducts(filter);
            });
        });
    }
    
    setupProductSorting() {
        const sortSelect = document.querySelector('.sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortProducts(e.target.value);
            });
        }
    }
    
    setupProductSearch() {
        const searchInput = document.querySelector('.product-search');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.searchProducts(e.target.value);
            }, 300));
        }
    }
    
    filterProducts(category) {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // 更新活跃的筛选按钮
        document.querySelectorAll('.filter-btn, .category-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-filter="${category}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    sortProducts(criteria) {
        const productGrid = document.querySelector('.products-grid');
        if (!productGrid) return;
        
        const products = Array.from(productGrid.children);
        
        products.sort((a, b) => {
            const priceA = this.getProductPrice(a);
            const priceB = this.getProductPrice(b);
            
            switch (criteria) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'name':
                    return this.getProductName(a).localeCompare(this.getProductName(b));
                default:
                    return 0;
            }
        });
        
        // 重新排列产品
        products.forEach(product => productGrid.appendChild(product));
    }
    
    searchProducts(query) {
        const productCards = document.querySelectorAll('.product-card');
        const searchTerm = query.toLowerCase();
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDesc = card.querySelector('p').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    getProductPrice(productElement) {
        const priceText = productElement.querySelector('.price').textContent;
        const priceMatch = priceText.match(/¥(\d+)/);
        return priceMatch ? parseInt(priceMatch[1]) : 0;
    }
    
    getProductName(productElement) {
        return productElement.querySelector('h3').textContent;
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 获取产品详情
    getProduct(productId) {
        return this.products[productId];
    }
    
    // 获取分类产品
    getProductsByCategory(category) {
        return Object.values(this.products).filter(product => 
            product.category === category
        );
    }
    
    // 获取推荐产品
    getRecommendedProducts(productId, limit = 4) {
        const currentProduct = this.products[productId];
        if (!currentProduct) return [];
        
        return Object.values(this.products)
            .filter(product => 
                product.id !== productId && 
                product.category === currentProduct.category
            )
            .slice(0, limit);
    }
}

// 产品比较功能
class ProductComparator {
    constructor() {
        this.compareList = [];
        this.maxCompareItems = 4;
        this.init();
    }
    
    init() {
        this.loadFromStorage();
        this.setupCompareUI();
    }
    
    loadFromStorage() {
        try {
            this.compareList = JSON.parse(localStorage.getItem('product_compare')) || [];
        } catch (error) {
            this.compareList = [];
        }
    }
    
    saveToStorage() {
        localStorage.setItem('product_compare', JSON.stringify(this.compareList));
    }
    
    addToCompare(product) {
        if (this.compareList.length >= this.maxCompareItems) {
            this.showNotification('比较列表已满（最多4个产品）', 'warning');
            return false;
        }
        
        if (this.compareList.find(item => item.id === product.id)) {
            this.showNotification('产品已在比较列表中', 'info');
            return false;
        }
        
        this.compareList.push(product);
        this.saveToStorage();
        this.updateCompareUI();
        this.showNotification('已添加到比较列表', 'success');
        return true;
    }
    
    removeFromCompare(productId) {
        this.compareList = this.compareList.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateCompareUI();
    }
    
    clearCompare() {
        this.compareList = [];
        this.saveToStorage();
        this.updateCompareUI();
    }
    
    setupCompareUI() {
        // 添加比较按钮到产品卡片
        this.addCompareButtons();
        this.updateCompareUI();
    }
    
    addCompareButtons() {
        document.querySelectorAll('.product-card').forEach(card => {
            const compareBtn = document.createElement('button');
            compareBtn.className = 'compare-btn';
            compareBtn.innerHTML = '⚖️ 比较';
            compareBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(255,255,255,0.9);
                border: none;
                border-radius: 4px;
                padding: 5px 10px;
                font-size: 0.8rem;
                cursor: pointer;
                z-index: 10;
            `;
            
            compareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = card.getAttribute('data-product-id');
                const product = window.productManager.getProduct(productId);
                if (product) {
                    this.addToCompare(product);
                }
            });
            
            card.style.position = 'relative';
            card.appendChild(compareBtn);
        });
    }
    
    updateCompareUI() {
        // 更新比较小部件
        this.updateCompareWidget();
    }
    
    updateCompareWidget() {
        let widget = document.getElementById('compare-widget');
        
        if (!widget && this.compareList.length > 0) {
            widget = document.createElement('div');
            widget.id = 'compare-widget';
            widget.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #c7000a;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 1000;
                cursor: pointer;
            `;
            
            widget.addEventListener('click', () => {
                this.showCompareModal();
            });
            
            document.body.appendChild(widget);
        }
        
        if (widget) {
            widget.innerHTML = `
                <div>比较列表 (${this.compareList.length}/4)</div>
                <small>点击查看比较</small>
            `;
            
            if (this.compareList.length === 0) {
                widget.remove();
            }
        }
    }
    
    showCompareModal() {
        // 显示比较模态框
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto;">
                <h3>产品比较</h3>
                <div id="compare-content">
                    ${this.generateCompareTable()}
                </div>
                <button onclick="this.closest('div').parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem;">关闭</button>
                <button onclick="productComparator.clearCompare(); this.closest('div').parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem; margin-left: 1rem; background: #ff4444; color: white; border: none;">清空列表</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    generateCompareTable() {
        if (this.compareList.length === 0) {
            return '<p>比较列表为空</p>';
        }
        
        let html = '<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">';
        
        // 表头
        html += '<tr>';
        html += '<th style="border: 1px solid #ddd; padding: 0.5rem;">特性</th>';
        this.compareList.forEach(product => {
            html += `<th style="border: 1px solid #ddd; padding: 0.5rem;">${product.name}</th>`;
        });
        html += '</tr>';
        
        // 价格行
        html += '<tr>';
        html += '<td style="border: 1px solid #ddd; padding: 0.5rem;">价格</td>';
        this.compareList.forEach(product => {
            html += `<td style="border: 1px solid #ddd; padding: 0.5rem;">¥${product.price}</td>`;
        });
        html += '</tr>';
        
        // 分类行
        html += '<tr>';
        html += '<td style="border: 1px solid #ddd; padding: 0.5rem;">分类</td>';
        this.compareList.forEach(product => {
            html += `<td style="border: 1px solid #ddd; padding: 0.5rem;">${product.category}</td>`;
        });
        html += '</tr>';
        
        html += '</table>';
        
        return html;
    }
    
    showNotification(message, type = 'info') {
        // 简单的通知实现
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}

// 产品视图功能
class ProductView {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupViewToggle();
        this.setupWishlist();
    }
    
    setupViewToggle() {
        const viewToggle = document.querySelector('.view-toggle');
        if (viewToggle) {
            const buttons = viewToggle.querySelectorAll('button');
            const productGrid = document.querySelector('.products-grid');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const viewType = btn.getAttribute('data-view');
                    
                    // 更新活跃按钮
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // 切换视图
                    if (viewType === 'list') {
                        productGrid.classList.add('list-view');
                    } else {
                        productGrid.classList.remove('list-view');
                    }
                });
            });
        }
    }
    
    setupWishlist() {
        // 心愿单功能
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const productId = btn.getAttribute('data-product-id');
                this.toggleWishlist(productId, btn);
            });
        });
    }
    
    toggleWishlist(productId, button) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            // 移除
            wishlist.splice(index, 1);
            button.classList.remove('active');
            this.showNotification('已从心愿单移除', 'info');
        } else {
            // 添加
            wishlist.push(productId);
            button.classList.add('active');
            this.showNotification('已添加到心愿单', 'success');
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        this.updateWishlistCount();
    }
    
    updateWishlistCount() {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const countElements = document.querySelectorAll('.wishlist-count');
        
        countElements.forEach(element => {
            element.textContent = wishlist.length;
        });
    }
    
    showNotification(message, type) {
        console.log(`${type}: ${message}`);
    }
}

// 初始化产品相关功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建产品管理器实例
    window.productManager = new ProductManager();
    window.productComparator = new ProductComparator();
    window.productView = new ProductView();
    
    console.log('产品功能初始化完成');
});

// 全局产品相关函数
function filterProducts(category) {
    if (window.productManager) {
        window.productManager.filterProducts(category);
    }
}

function sortProducts(criteria) {
    if (window.productManager) {
        window.productManager.sortProducts(criteria);
    }
}

function addToCompare(productId) {
    if (window.productManager && window.productComparator) {
        const product = window.productManager.getProduct(productId);
        if (product) {
            window.productComparator.addToCompare(product);
        }
    }
}
