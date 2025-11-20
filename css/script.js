// 华为商城主JavaScript文件

// 配置
const CONFIG = {
    basePath: window.location.hostname.includes('github.io') ? '/myweb/' : '',
    apiBaseUrl: 'https://api.example.com', // 实际项目中替换为真实API地址
    features: {
        cart: true,
        search: true,
        userAuth: true
    }
};

// 购物车功能
class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
        this.init();
    }
    
    // 从本地存储加载购物车
    loadFromStorage() {
        try {
            return JSON.parse(localStorage.getItem('huawei_cart')) || [];
        } catch (error) {
            console.error('加载购物车失败:', error);
            return [];
        }
    }
    
    // 保存到本地存储
    saveToStorage() {
        try {
            localStorage.setItem('huawei_cart', JSON.stringify(this.items));
        } catch (error) {
            console.error('保存购物车失败:', error);
        }
    }
    
    // 添加商品到购物车
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
    
    // 移除商品
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToStorage();
        this.updateUI();
    }
    
    // 更新商品数量
    updateQuantity(itemId, newQuantity) {
        if (newQuantity < 1) return;
        
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            this.saveToStorage();
            this.updateUI();
        }
    }
    
    // 获取购物车总数
    getTotalCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    // 获取总价
    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    // 清空购物车
    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateUI();
    }
    
    // 更新UI
    updateUI() {
        const totalCount = this.getTotalCount();
        
        // 更新所有购物车计数显示
        document.querySelectorAll('.cart-count').forEach(element => {
            element.textContent = totalCount;
        });
        
        // 如果有购物车页面，更新购物车内容
        if (typeof renderCart === 'function') {
            renderCart();
        }
    }
    
    // 显示添加到购物车通知
    showAddToCartNotification(product) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span>✅ 已添加到购物车</span>
                <p>${product.name}</p>
                <small>${product.color} | ${product.config}</small>
            </div>
        `;
        
        // 添加样式
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

// 用户认证功能
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

// 搜索功能
class SearchManager {
    constructor() {
        this.init();
    }
    
    init() {
        // 绑定搜索事件
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
            // 在实际项目中，这里会跳转到搜索结果页面
            console.log('执行搜索:', query);
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
    
    showSearchSuggestions(query) {
        // 在实际项目中，这里会从API获取搜索建议
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

// 移动端菜单功能
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

// 图片懒加载
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
        // 回退方案：滚动时加载图片
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

// 全局初始化
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
        
        // 添加CSS动画
        this.addGlobalStyles();
        
        // 绑定全局事件
        this.bindGlobalEvents();
        
        // 性能监控
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
                // 页面重新可见时刷新购物车
                this.cart.updateUI();
            }
        });
    }
    
    monitorPerformance() {
        // 性能监控
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
function updateCartCount() {
    if (window.huaweiStore && window.huaweiStore.cart) {
        window.huaweiStore.cart.updateUI();
    }
}

function addToCart(product, addOnly = false) {
    if (window.huaweiStore && window.huaweiStore.cart) {
        window.huaweiStore.cart.addItem(product);
        
        if (!addOnly) {
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 1000);
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 创建全局商店实例
    window.huaweiStore = new HuaweiStore();
    
    // 添加页面加载动画
    document.body.classList.add('fade-in');
    
    console.log('华为商城 - 构建万物互联的智能世界');
});
