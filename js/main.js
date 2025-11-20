// 华为商城核心功能
(function() {
    'use strict';
    
    // 配置
    const CONFIG = {
        basePath: window.location.hostname.includes('github.io') ? '/myweb/' : '',
        apiBaseUrl: 'https://api.example.com'
    };

    // 购物车类
    class ShoppingCart {
        constructor() {
            this.items = this.loadFromStorage();
            this.init();
        }

        loadFromStorage() {
            try {
                return JSON.parse(localStorage.getItem('huawei_cart')) || [];
            } catch (error) {
                console.error('加载购物车失败:', error);
                return [];
            }
        }

        saveToStorage() {
            try {
                localStorage.setItem('huawei_cart', JSON.stringify(this.items));
            } catch (error) {
                console.error('保存购物车失败:', error);
            }
        }

        addItem(product) {
            const existingItem = this.items.find(item => 
                item.id === product.id && 
                item.color === product.color && 
                item.config === product.config
            );

            if (existingItem) {
                existingItem.quantity += product.quantity || 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: product.quantity || 1,
                    addedAt: new Date().toISOString()
                });
            }

            this.saveToStorage();
            this.updateUI();
            this.showAddToCartNotification(product);
        }

        removeItem(itemId) {
            this.items = this.items.filter(item => item.id !== itemId);
            this.saveToStorage();
            this.updateUI();
        }

        updateQuantity(itemId, newQuantity) {
            if (newQuantity < 1) return;
            
            const item = this.items.find(item => item.id === itemId);
            if (item) {
                item.quantity = newQuantity;
                this.saveToStorage();
                this.updateUI();
            }
        }

        getTotalCount() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        }

        getTotalPrice() {
            return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        clear() {
            this.items = [];
            this.saveToStorage();
            this.updateUI();
        }

        updateUI() {
            const totalCount = this.getTotalCount();
            
            // 更新购物车计数显示
            document.querySelectorAll('.cart-count').forEach(element => {
                element.textContent = totalCount;
            });

            // 如果有购物车页面，更新内容
            if (typeof renderCart === 'function') {
                renderCart();
            }
        }

        showAddToCartNotification(product) {
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <span>✅ 已添加到购物车</span>
                    <p>${product.name}</p>
                    <small>${product.color} | ${product.config}</small>
                </div>
            `;
            
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border: 2px solid #c7000a;
                border-radius: 8px;
                padding: 1rem;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideIn 0.3s ease-out;
                max-width: 300px;
            `;

            document.body.appendChild(notification);

            // 3秒后自动移除
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }

        init() {
            this.updateUI();
        }
    }

    // 用户认证类
    class UserAuth {
        constructor() {
            this.currentUser = this.getCurrentUser();
            this.init();
        }

        getCurrentUser() {
            try {
                return JSON.parse(localStorage.getItem('huawei_user'));
            } catch (error) {
                return null;
            }
        }

        login(userData) {
            localStorage.setItem('huawei_user', JSON.stringify(userData));
            this.currentUser = userData;
            this.updateNavigation();
        }

        logout() {
            localStorage.removeItem('huawei_user');
            this.currentUser = null;
            this.updateNavigation();
            window.location.href = 'index.html';
        }

        updateNavigation() {
            const loginButtons = document.querySelectorAll('.login-btn');
            
            if (this.currentUser) {
                loginButtons.forEach(btn => {
                    btn.textContent = this.currentUser.username || '用户中心';
                    btn.href = 'account.html';
                });
            } else {
                loginButtons.forEach(btn => {
                    btn.textContent = '登录';
                    btn.href = 'login.html';
                });
            }
        }

        init() {
            this.updateNavigation();
        }
    }

    // 搜索管理类
    class SearchManager {
        constructor() {
            this.init();
        }

        init() {
            const searchInputs = document.querySelectorAll('input[type="search"], .search-box input');
            searchInputs.forEach(input => {
                input.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.performSearch(input.value);
                    }
                });
            });
        }

        handleSearch(event) {
            const query = event.target.value.trim();
            if (query.length > 2) {
                this.showSearchSuggestions(query);
            } else {
                this.hideSearchSuggestions();
            }
        }

        performSearch(query) {
            if (query.trim()) {
                console.log('执行搜索:', query);
                // 实际项目中这里会跳转到搜索结果页面
            }
        }

        showSearchSuggestions(query) {
            console.log('显示搜索建议:', query);
        }

        hideSearchSuggestions() {
            // 隐藏搜索建议
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
    }

    // 移动菜单类
    class MobileMenu {
        constructor() {
            this.init();
        }

        init() {
            const hamburger = document.querySelector('.hamburger-menu');
            const navList = document.querySelector('.nav-list');
            
            if (hamburger && navList) {
                hamburger.addEventListener('click', () => {
                    navList.classList.toggle('active');
                    hamburger.classList.toggle('active');
                });

                // 点击外部关闭菜单
                document.addEventListener('click', (e) => {
                    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
                        navList.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            }
        }
    }

    // 图片懒加载类
    class LazyLoader {
        constructor() {
            this.init();
        }

        init() {
            if ('IntersectionObserver' in window) {
                this.initWithObserver();
            } else {
                this.initWithoutObserver();
            }
        }

        initWithObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                observer.observe(img);
            });
        }

        initWithoutObserver() {
            window.addEventListener('scroll', this.throttle(this.checkImages.bind(this), 100));
            this.checkImages();
        }

        loadImage(img) {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
            }
        }

        checkImages() {
            document.querySelectorAll('img[data-src]').forEach(img => {
                if (this.isInViewport(img)) {
                    this.loadImage(img);
                }
            });
        }

        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    }

    // 华为商店主类
    class HuaweiStore {
        constructor() {
            this.cart = new ShoppingCart();
            this.auth = new UserAuth();
            this.search = new SearchManager();
            this.mobileMenu = new MobileMenu();
            this.lazyLoader = new LazyLoader();
            this.init();
        }

        init() {
            console.log('华为商城初始化完成');
            this.addGlobalStyles();
            this.bindGlobalEvents();
            this.monitorPerformance();
        }

        addGlobalStyles() {
            const styles = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                
                .cart-notification {
                    animation: slideIn 0.3s ease-out;
                }
                
                .fade-in {
                    animation: fadeIn 0.5s ease-in;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;

            const styleSheet = document.createElement('style');
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }

        bindGlobalEvents() {
            // 全局错误处理
            window.addEventListener('error', (e) => {
                console.error('全局错误:', e.error);
            });

            // 页面可见性改变
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    this.cart.updateUI();
                }
            });
        }

        monitorPerformance() {
            if ('performance' in window) {
                window.addEventListener('load', () => {
                    const perfData = performance.timing;
                    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`页面加载时间: ${loadTime}ms`);
                });
            }
        }
    }

    // 全局函数
    window.updateCartCount = function() {
        if (window.huaweiStore && window.huaweiStore.cart) {
            window.huaweiStore.cart.updateUI();
        }
    };

    window.addToCart = function(product, addOnly = false) {
        if (window.huaweiStore && window.huaweiStore.cart) {
            window.huaweiStore.cart.addItem(product);
            
            if (!addOnly) {
                setTimeout(() => {
                    window.location.href = 'cart.html';
                }, 1000);
            }
        }
    };

    // 初始化
    document.addEventListener('DOMContentLoaded', function() {
        window.huaweiStore = new HuaweiStore();
        document.body.classList.add('fade-in');
        console.log('华为商城 - 构建万物互联的智能世界');
    });

})();

// 产品管理功能
(function() {
    'use strict';

    // 产品管理器类
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
                // 模拟数据 - 实际项目中从API加载
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
            this.setupProductFilters();
            this.setupProductSorting();
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

    // 产品比较器类
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
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }

    // 产品视图类
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
        window.productManager = new ProductManager();
        window.productComparator = new ProductComparator();
        window.productView = new ProductView();

        console.log('产品功能初始化完成');
    });

    // 全局产品相关函数
    window.filterProducts = function(category) {
        if (window.productManager) {
            window.productManager.filterProducts(category);
        }
    };

    window.sortProducts = function(criteria) {
        if (window.productManager) {
            window.productManager.sortProducts(criteria);
        }
    };

    window.addToCompare = function(productId) {
        if (window.productManager && window.productComparator) {
            const product = window.productManager.getProduct(productId);
            if (product) {
                window.productComparator.addToCompare(product);
            }
        }
    };

})();

// 商品数据库
window.productDatabase = {
    // 智能手机 - Mate系列
    'mate60-pro': {
        id: 'mate60-pro',
        name: '华为Mate 60 Pro',
        subtitle: '超可靠玄武架构，卫星通话，全焦段超清影像',
        category: '智能手机',
        price: 6999,
        badge: '新品上市',
        images: [
            'images/mate60-pro-detail.jpg',
            'images/mate60-pro-back.jpg',
            'images/mate60-pro-side.jpg',
            'images/mate60-pro-feature.jpg'
        ],
        colors: [
            { name: '雅川青', value: '#2e8b57', image: 'images/mate60-pro-detail.jpg' },
            { name: '白沙银', value: '#c0c0c0', image: 'images/mate60-pro-silver.jpg' },
            { name: '南糯紫', value: '#9370db', image: 'images/mate60-pro-purple.jpg' },
            { name: '雅丹黑', value: '#1a1a1a', image: 'images/mate60-pro-black.jpg' }
        ],
        configs: [
            { name: '12GB+512GB', price: 6999 },
            { name: '12GB+1TB', price: 7999 }
        ],
        features: [
            { icon: '🛰️', title: '卫星通话', description: '支持北斗卫星消息，无地面网络信号时也能发送和接收消息' },
            { icon: '📸', title: '超光变影像', description: 'XMAGE影像系统，十档物理光圈，全焦段超清影像' },
            { icon: '⚡', title: '麒麟9000S', description: '麒麟9000S芯片，超可靠玄武架构，性能卓越' },
            { icon: '🔋', title: '超长续航', description: '5000mAh大电池，88W有线快充，50W无线快充' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟9000S' },
            { name: '内存与存储', value: '12GB RAM + 512GB/1TB ROM' },
            { name: '显示屏', value: '6.82英寸OLED，1-120Hz LTPO自适应刷新率' },
            { name: '摄像头', value: '后置：5000万像素超光变主摄 + 1200万像素超广角 + 4800万像素超微距长焦' },
            { name: '电池', value: '5000mAh，支持88W有线快充，50W无线快充，20W无线反向充电' },
            { name: '操作系统', value: 'HarmonyOS 4.0' },
            { name: '尺寸与重量', value: '163.65mm × 79mm × 8.1mm，约225g' },
            { name: '网络', value: '5G，北斗卫星消息' }
        ],
        related: ['mate60', 'p60-pro', 'watch-ultimate']
    },
    // ... 其他产品数据保持不变
};

// 商品分类映射
window.productCategories = {
    'smartphones': ['mate60-pro', 'mate60', 'p60-pro', 'p50-pro', 'p40-pro', 'nova-12', 'nova-11', 'nova-10', 'enjoy-70'],
    'laptops-tablets': ['matebook-x-pro', 'matebook-14', 'matepad-pro', 'matepad-11'],
    'wearables': ['watch-gt4', 'watch-ultimate', 'band-8'],
    'smart-screen': ['vision-v5-pro', 'vision-s', 'vision-se'],
    'smart-home': ['smart-lock', 'smart-camera', 'smart-bulb', 'air-purifier', 'smart-speaker']
};
