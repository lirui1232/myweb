// 商品数据库 - 包含所有商品的详细信息
const productDatabase = {
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
    
    'mate60': {
        id: 'mate60',
        name: '华为Mate 60',
        subtitle: '全能旗舰，均衡之选',
        category: '智能手机',
        price: 5999,
        badge: '热销',
        images: [
            'images/mate60-detail.jpg',
            'images/mate60-back.jpg',
            'images/mate60-side.jpg'
        ],
        colors: [
            { name: '曜金黑', value: '#1a1a1a', image: 'images/mate60-detail.jpg' },
            { name: '冰霜银', value: '#c0c0c0', image: 'images/mate60-silver.jpg' }
        ],
        configs: [
            { name: '12GB+256GB', price: 5999 },
            { name: '12GB+512GB', price: 6499 }
        ],
        features: [
            { icon: '📡', title: '卫星通信', description: '双向北斗卫星消息，紧急情况下的生命通道' },
            { icon: '🎥', title: '超感知影像', description: '5000万像素超光变摄像头，全场景拍摄' },
            { icon: '🔋', title: '持久续航', description: '4750mAh大电池，66W有线快充，50W无线快充' },
            { icon: '🔄', title: 'HarmonyOS', description: '智慧体验，万物互联' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟9000S' },
            { name: '内存与存储', value: '12GB RAM + 256GB/512GB ROM' },
            { name: '显示屏', value: '6.69英寸OLED，120Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素超光变主摄 + 1200万像素超广角 + 1200万像素潜望式长焦' },
            { name: '电池', value: '4750mAh，支持66W有线快充，50W无线快充' },
            { name: '操作系统', value: 'HarmonyOS 4.0' },
            { name: '尺寸与重量', value: '161.4mm × 76mm × 7.95mm，约209g' },
            { name: '网络', value: '5G，北斗卫星消息' }
        ],
        related: ['mate60-pro', 'p60-pro', 'nova-12']
    },

    // 智能手机 - P系列
    'p60-pro': {
        id: 'p60-pro',
        name: '华为P60 Pro',
        subtitle: '影像旗舰，摄影利器',
        category: '智能手机',
        price: 5988,
        badge: '影像旗舰',
        images: [
            'images/p60-pro-detail.jpg',
            'images/p60-pro-back.jpg',
            'images/p60-pro-camera.jpg'
        ],
        colors: [
            { name: '洛可可白', value: '#f5f5f5', image: 'images/p60-pro-detail.jpg' },
            { name: '羽砂紫', value: '#9370db', image: 'images/p60-pro-purple.jpg' },
            { name: '翡冷翠', value: '#2e8b57', image: 'images/p60-pro-green.jpg' }
        ],
        configs: [
            { name: '8GB+256GB', price: 5988 },
            { name: '12GB+512GB', price: 6988 }
        ],
        features: [
            { icon: '📷', title: 'XMAGE影像', description: '超聚光夜视长焦，摄影新高度' },
            { icon: '🎨', title: '艺术美学', description: '凝光贝母工艺，独一无二的艺术品' },
            { icon: '⚡', title: '骁龙8+', description: '旗舰性能，流畅体验' },
            { icon: '🔄', title: 'HarmonyOS', description: '智慧体验，便捷操作' }
        ],
        specifications: [
            { name: '处理器', value: '骁龙8+ 4G' },
            { name: '内存与存储', value: '8GB/12GB RAM + 256GB/512GB ROM' },
            { name: '显示屏', value: '6.67英寸OLED，1-120Hz LTPO自适应刷新率' },
            { name: '摄像头', value: '后置：4800万像素超聚光主摄 + 1300万像素超广角 + 4800万像素超聚光夜视长焦' },
            { name: '电池', value: '4815mAh，支持88W有线快充，50W无线快充' },
            { name: '操作系统', value: 'HarmonyOS 3.1' },
            { name: '尺寸与重量', value: '161mm × 74.5mm × 8.3mm，约200g' },
            { name: '网络', value: '4G' }
        ],
        related: ['mate60-pro', 'p50-pro', 'nova-12']
    },

    'p50-pro': {
        id: 'p50-pro',
        name: '华为P50 Pro',
        subtitle: '万象双环，计算光学',
        category: '智能手机',
        price: 4488,
        badge: '经典旗舰',
        images: [
            'images/p50-pro-detail.jpg',
            'images/p50-pro-back.jpg',
            'images/p50-pro-camera.jpg'
        ],
        colors: [
            { name: '曜金黑', value: '#1a1a1a', image: 'images/p50-pro-detail.jpg' },
            { name: '可可茶金', value: '#d4af37', image: 'images/p50-pro-gold.jpg' },
            { name: '雪域白', value: '#f5f5f5', image: 'images/p50-pro-white.jpg' }
        ],
        configs: [
            { name: '8GB+256GB', price: 4488 },
            { name: '8GB+512GB', price: 4988 }
        ],
        features: [
            { icon: '🔍', title: '计算光学', description: 'XD Optics 计算光学，突破物理边界' },
            { icon: '🎯', title: '原色引擎', description: 'True-Chroma 原色引擎，色彩真实还原' },
            { icon: '⚡', title: '麒麟9000', description: '麒麟9000芯片，强劲性能' },
            { icon: '🔋', title: '4360mAh电池', description: '支持66W有线快充，50W无线快充' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟9000' },
            { name: '内存与存储', value: '8GB RAM + 256GB/512GB ROM' },
            { name: '显示屏', value: '6.6英寸OLED，120Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素原色摄像头 + 4000万像素原色摄像头 + 1300万像素超广角 + 6400万像素长焦' },
            { name: '电池', value: '4360mAh，支持66W有线快充，50W无线快充' },
            { name: '操作系统', value: 'HarmonyOS 2.0' },
            { name: '尺寸与重量', value: '158.8mm × 72.8mm × 8.5mm，约195g' },
            { name: '网络', value: '4G' }
        ],
        related: ['p60-pro', 'p40-pro', 'nova-11']
    },

    'p40-pro': {
        id: 'p40-pro',
        name: '华为P40 Pro',
        subtitle: '超感知徕卡电影影像',
        category: '智能手机',
        price: 3988,
        badge: '经典款',
        images: [
            'images/p40-pro-detail.jpg',
            'images/p40-pro-back.jpg',
            'images/p40-pro-camera.jpg'
        ],
        colors: [
            { name: '亮黑色', value: '#1a1a1a', image: 'images/p40-pro-detail.jpg' },
            { name: '深海蓝', value: '#000080', image: 'images/p40-pro-blue.jpg' },
            { name: '冰霜银', value: '#c0c0c0', image: 'images/p40-pro-silver.jpg' }
        ],
        configs: [
            { name: '8GB+128GB', price: 3988 },
            { name: '8GB+256GB', price: 4488 },
            { name: '8GB+512GB', price: 4988 }
        ],
        features: [
            { icon: '🎥', title: '徕卡电影影像', description: '超感知徕卡四摄，电影级拍摄体验' },
            { icon: '🔄', title: '四曲满溢屏', description: '四曲满溢屏设计，视觉无边界' },
            { icon: '⚡', title: '麒麟990 5G', description: '麒麟990 5G芯片，旗舰性能' },
            { icon: '🔋', title: '4200mAh电池', description: '支持40W有线快充，27W无线快充' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟990 5G' },
            { name: '内存与存储', value: '8GB RAM + 128GB/256GB/512GB ROM' },
            { name: '显示屏', value: '6.58英寸OLED，90Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素超感知摄像头 + 4000万像素电影摄像头 + 1200万像素超感光长焦 + 3D深感摄像头' },
            { name: '电池', value: '4200mAh，支持40W有线快充，27W无线快充' },
            { name: '操作系统', value: 'EMUI 10.1（可升级HarmonyOS）' },
            { name: '尺寸与重量', value: '158.2mm × 72.6mm × 8.95mm，约209g' },
            { name: '网络', value: '5G' }
        ],
        related: ['p50-pro', 'mate60', 'nova-10']
    },

    // 智能手机 - Nova系列
    'nova-12': {
        id: 'nova-12',
        name: '华为Nova 12',
        subtitle: '潮流设计，年轻之选',
        category: '智能手机',
        price: 2999,
        badge: '新品',
        images: [
            'images/nova-12-detail.jpg',
            'images/nova-12-back.jpg',
            'images/nova-12-colors.jpg'
        ],
        colors: [
            { name: '樱语粉', value: '#ffb6c1', image: 'images/nova-12-detail.jpg' },
            { name: '曜金黑', value: '#1a1a1a', image: 'images/nova-12-black.jpg' },
            { name: '冰霜蓝', value: '#87ceeb', image: 'images/nova-12-blue.jpg' }
        ],
        configs: [
            { name: '8GB+256GB', price: 2999 },
            { name: '12GB+512GB', price: 3499 }
        ],
        features: [
            { icon: '💖', title: '潮流设计', description: '轻薄机身，多彩配色，年轻人的选择' },
            { icon: '🤳', title: '前置双摄', description: '6000万像素前置人像镜头，自拍更出色' },
            { icon: '⚡', title: '麒麟8000', description: '流畅性能，日常使用无压力' },
            { icon: '🔋', title: '100W快充', description: '快速充电，告别电量焦虑' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟8000' },
            { name: '内存与存储', value: '8GB/12GB RAM + 256GB/512GB ROM' },
            { name: '显示屏', value: '6.7英寸OLED，120Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素主摄 + 800万像素超广角 + 200万像素微距' },
            { name: '电池', value: '4600mAh，支持100W有线快充' },
            { name: '操作系统', value: 'HarmonyOS 4.0' },
            { name: '尺寸与重量', value: '161.3mm × 74.7mm × 7.7mm，约191g' },
            { name: '网络', value: '5G' }
        ],
        related: ['mate60', 'p60-pro', 'nova-11']
    },

    'nova-11': {
        id: 'nova-11',
        name: '华为Nova 11',
        subtitle: '超感知影像系统，轻薄设计',
        category: '智能手机',
        price: 2499,
        badge: '热销',
        images: [
            'images/nova-11-detail.jpg',
            'images/nova-11-back.jpg',
            'images/nova-11-thin.jpg'
        ],
        colors: [
            { name: '绮境森林', value: '#228b22', image: 'images/nova-11-detail.jpg' },
            { name: '曜金黑', value: '#1a1a1a', image: 'images/nova-11-black.jpg' },
            { name: '雪域白', value: '#f5f5f5', image: 'images/nova-11-white.jpg' }
        ],
        configs: [
            { name: '8GB+128GB', price: 2499 },
            { name: '8GB+256GB', price: 2799 }
        ],
        features: [
            { icon: '📸', title: '超感知影像', description: '5000万像素超感知影像系统' },
            { icon: '⚡', title: '骁龙778G', description: '骁龙778G处理器，均衡性能' },
            { icon: '🔋', title: '66W快充', description: '支持66W华为超级快充' },
            { icon: '📱', title: '6.88mm轻薄', description: '极致轻薄设计，舒适握持感' }
        ],
        specifications: [
            { name: '处理器', value: '骁龙778G 4G' },
            { name: '内存与存储', value: '8GB RAM + 128GB/256GB ROM' },
            { name: '显示屏', value: '6.7英寸OLED，120Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素超感知摄像头 + 800万像素超广角微距摄像头' },
            { name: '电池', value: '4500mAh，支持66W有线快充' },
            { name: '操作系统', value: 'HarmonyOS 3.0' },
            { name: '尺寸与重量', value: '161.29mm × 74.96mm × 6.88mm，约168g' },
            { name: '网络', value: '4G' }
        ],
        related: ['nova-12', 'nova-10', 'p50-pro']
    },

    'nova-10': {
        id: 'nova-10',
        name: '华为Nova 10',
        subtitle: '前置6000万像素，星耀环设计',
        category: '智能手机',
        price: 2699,
        badge: '经典款',
        images: [
            'images/nova-10-detail.jpg',
            'images/nova-10-back.jpg',
            'images/nova-10-front.jpg'
        ],
        colors: [
            { name: '10号色', value: '#9370db', image: 'images/nova-10-detail.jpg' },
            { name: '曜金黑', value: '#1a1a1a', image: 'images/nova-10-black.jpg' },
            { name: '普罗旺斯', value: '#c71585', image: 'images/nova-10-purple.jpg' }
        ],
        configs: [
            { name: '8GB+128GB', price: 2699 },
            { name: '8GB+256GB', price: 2999 }
        ],
        features: [
            { icon: '🤳', title: '前置6000万', description: '6000万像素全焦段追焦双摄' },
            { icon: '⭐', title: '星耀环设计', description: '星耀环设计，辨识度极高' },
            { icon: '⚡', title: '骁龙778G', description: '骁龙778G 4G处理器' },
            { icon: '🔋', title: '66W快充', description: '支持66W华为超级快充' }
        ],
        specifications: [
            { name: '处理器', value: '骁龙778G 4G' },
            { name: '内存与存储', value: '8GB RAM + 128GB/256GB ROM' },
            { name: '显示屏', value: '6.67英寸OLED，120Hz刷新率' },
            { name: '摄像头', value: '后置：5000万像素超感知摄像头 + 800万像素超广角微距摄像头 + 200万像素景深摄像头' },
            { name: '电池', value: '4000mAh，支持66W有线快充' },
            { name: '操作系统', value: 'HarmonyOS 2.0' },
            { name: '尺寸与重量', value: '162.18mm × 73.91mm × 6.88mm，约168g' },
            { name: '网络', value: '4G' }
        ],
        related: ['nova-11', 'p40-pro', 'enjoy-70', 'enjoy-60']
    },

    // 平板电脑
    'matepad-pro': {
        id: 'matepad-pro',
        name: 'MatePad Pro',
        subtitle: '12.6英寸OLED，鸿蒙OS',
        category: '平板电脑',
        price: 4499,
        badge: '旗舰',
        images: [
            'images/matepad-pro-detail.jpg',
            'images/matepad-pro-back.jpg',
            'images/matepad-pro-pen.jpg'
        ],
        colors: [
            { name: '曜金黑', value: '#1a1a1a', image: 'images/matepad-pro-detail.jpg' },
            { name: '冰霜银', value: '#c0c0c0', image: 'images/matepad-pro-silver.jpg' }
        ],
        configs: [
            { name: '8GB+256GB', price: 4499 },
            { name: '12GB+512GB', price: 5499 }
        ],
        features: [
            { icon: '🖥️', title: 'OLED原色屏', description: '12.6英寸OLED全面屏，P3广色域' },
            { icon: '✍️', title: 'M-Pencil', description: '第二代M-Pencil，4096级压感' },
            { icon: '⚡', title: '麒麟9000', description: '麒麟9000系列芯片，强劲性能' },
            { icon: '🔋', title: '10050mAh电池', description: '大容量电池，支持40W快充' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟9000E' },
            { name: '内存与存储', value: '8GB/12GB RAM + 256GB/512GB ROM' },
            { name: '显示屏', value: '12.6英寸OLED，2560×1600分辨率' },
            { name: '摄像头', value: '后置：1300万像素主摄 + 800万像素广角 + 3D深感摄像头' },
            { name: '电池', value: '10050mAh，支持40W有线快充，27W无线快充' },
            { name: '操作系统', value: 'HarmonyOS 2.0' },
            { name: '尺寸与重量', value: '286.5mm × 184.7mm × 6.7mm，约609g' },
            { name: '配件支持', value: 'M-Pencil（第二代），智能磁吸键盘' }
        ],
        related: ['matepad-11', 'matebook-x-pro', 'smart-speaker']
    },

    'matepad-11': {
        id: 'matepad-11',
        name: 'MatePad 11',
        subtitle: '120Hz高刷屏，学习办公',
        category: '平板电脑',
        price: 2799,
        badge: '性价比',
        images: [
            'images/matepad-11-detail.jpg',
            'images/matepad-11-back.jpg',
            'images/matepad-11-pen.jpg'
        ],
        colors: [
            { name: '曜石黑', value: '#1a1a1a', image: 'images/matepad-11-detail.jpg' },
            { name: '海岛蓝', value: '#1e90ff', image: 'images/matepad-11-blue.jpg' }
        ],
        configs: [
            { name: '6GB+128GB', price: 2799 },
            { name: '8GB+256GB', price: 3299 }
        ],
        features: [
            { icon: '🔄', title: '120Hz高刷', description: '120Hz高刷新率屏幕，流畅顺滑' },
            { icon: '✍️', title: 'M-Pencil支持', description: '支持M-Pencil手写笔，笔记绘画' },
            { icon: '⚡', title: '骁龙865', description: '骁龙865处理器，性能强劲' },
            { icon: '🎵', title: '四声道四扬声器', description: '哈曼卡顿调音，沉浸式音效' }
        ],
        specifications: [
            { name: '处理器', value: '骁龙865' },
            { name: '内存与存储', value: '6GB/8GB RAM + 128GB/256GB ROM' },
            { name: '显示屏', value: '10.95英寸IPS，2560×1600分辨率，120Hz刷新率' },
            { name: '摄像头', value: '后置：1300万像素主摄；前置：800万像素' },
            { name: '电池', value: '7250mAh，支持22.5W快充' },
            { name: '操作系统', value: 'HarmonyOS 2.0' },
            { name: '尺寸与重量', value: '253.8mm × 165.3mm × 7.25mm，约485g' },
            { name: '配件支持', value: 'M-Pencil（第二代），智能磁吸键盘' }
        ],
        related: ['matepad-pro', 'matebook-14', 'smart-speaker']
    },

    // 畅享系列
    'enjoy-70': {
        id: 'enjoy-70',
        name: '华为畅享70',
        subtitle: '6000mAh大电池，超长续航',
        category: '智能手机',
        price: 1299,
        badge: '性价比',
        images: [
            'images/enjoy-70-detail.jpg',
            'images/enjoy-70-back.jpg',
            'images/enjoy-70-battery.jpg'
        ],
        colors: [
            { name: '曜金黑', value: '#1a1a1a', image: 'images/enjoy-70-detail.jpg' },
            { name: '雪域白', value: '#f5f5f5', image: 'images/enjoy-70-white.jpg' },
            { name: '翡冷翠', value: '#2e8b57', image: 'images/enjoy-70-green.jpg' }
        ],
        configs: [
            { name: '8GB+128GB', price: 1299 },
            { name: '8GB+256GB', price: 1499 }
        ],
        features: [
            { icon: '🔋', title: '6000mAh大电池', description: '超长续航，告别电量焦虑' },
            { icon: '🔄', title: '鸿蒙OS', description: 'HarmonyOS操作系统，流畅体验' },
            { icon: '⚡', title: '麒麟710A', description: '麒麟710A处理器，日常使用流畅' },
            { icon: '📱', title: '6.75英寸大屏', description: '大屏显示，视觉体验更佳' }
        ],
        specifications: [
            { name: '处理器', value: '麒麟710A' },
            { name: '内存与存储', value: '8GB RAM + 128GB/256GB ROM' },
            { name: '显示屏', value: '6.75英寸LCD，1600×720分辨率' },
            { name: '摄像头', value: '后置：5000万像素主摄 + 200万像素景深；前置：800万像素' },
            { name: '电池', value: '6000mAh，支持22.5W快充' },
            { name: '操作系统', value: 'HarmonyOS 4.0' },
            { name: '尺寸与重量', value: '168.3mm × 77.7mm × 8.93mm，约207g' },
            { name: '网络', value: '4G' }
        ],
        related: ['enjoy-60', 'enjoy-50z', 'nova-10', 'band-8']
    },

    // 在 productDatabase 对象中添加以下内容

'enjoy-60': {
    id: 'enjoy-60',
    name: '华为畅享60',
    subtitle: '大屏大电池，入门优选',
    category: '智能手机',
    price: 1199,
    badge: '性价比',
    images: [
        'images/enjoy-60-detail.jpg',
        'images/enjoy-60-back.jpg',
        'images/enjoy-60-battery.jpg'
    ],
    colors: [
        { name: '幻夜黑', value: '#1a1a1a', image: 'images/enjoy-60-detail.jpg' },
        { name: '晨曦金', value: '#d4af37', image: 'images/enjoy-60-gold.jpg' },
        { name: '冰霜蓝', value: '#87ceeb', image: 'images/enjoy-60-blue.jpg' }
    ],
    configs: [
        { name: '8GB+128GB', price: 1199 },
        { name: '8GB+256GB', price: 1399 }
    ],
    features: [
        { icon: '📱', title: '6.75英寸大屏', description: '大屏显示，观影游戏更沉浸' },
        { icon: '🔋', title: '5000mAh电池', description: '大容量电池，持久续航' },
        { icon: '⚡', title: '麒麟710', description: '麒麟710处理器，日常使用流畅' },
        { icon: '📸', title: '4800万影像', description: '4800万像素主摄，记录精彩瞬间' }
    ],
    specifications: [
        { name: '处理器', value: '麒麟710' },
        { name: '内存与存储', value: '8GB RAM + 128GB/256GB ROM' },
        { name: '显示屏', value: '6.75英寸LCD，1600×720分辨率' },
        { name: '摄像头', value: '后置：4800万像素主摄 + 200万像素景深；前置：800万像素' },
        { name: '电池', value: '5000mAh，支持22.5W快充' },
        { name: '操作系统', value: 'HarmonyOS 3.0' },
        { name: '尺寸与重量', value: '168.3mm × 77.7mm × 8.98mm，约199g' },
        { name: '网络', value: '4G' }
    ],
    related: ['enjoy-70', 'enjoy-50z', 'nova-10']
},

'enjoy-50z': {
    id: 'enjoy-50z',
    name: '华为畅享50z',
    subtitle: '入门级5G，性价比高',
    category: '智能手机',
    price: 999,
    badge: '入门优选',
    images: [
        'images/enjoy-50z-detail.jpg',
        'images/enjoy-50z-back.jpg',
        'images/enjoy-50z-5g.jpg'
    ],
    colors: [
        { name: '幻夜黑', value: '#1a1a1a', image: 'images/enjoy-50z-detail.jpg' },
        { name: '薄荷绿', value: '#98fb98', image: 'images/enjoy-50z-green.jpg' },
        { name: '星河蓝', value: '#1e90ff', image: 'images/enjoy-50z-blue.jpg' }
    ],
    configs: [
        { name: '6GB+128GB', price: 999 },
        { name: '8GB+128GB', price: 1199 }
    ],
    features: [
        { icon: '📶', title: '5G网络', description: '支持5G双模，网速更快更稳定' },
        { icon: '🔋', title: '5000mAh电池', description: '大容量电池，支持22.5W快充' },
        { icon: '⚡', title: '天玑700', description: '天玑700处理器，5G入门优选' },
        { icon: '📸', title: '三摄系统', description: '1300万像素主摄，满足日常拍摄' }
    ],
    specifications: [
        { name: '处理器', value: '天玑700' },
        { name: '内存与存储', value: '6GB/8GB RAM + 128GB ROM' },
        { name: '显示屏', value: '6.52英寸LCD，1600×720分辨率' },
        { name: '摄像头', value: '后置：1300万像素主摄 + 200万像素景深 + 200万像素微距；前置：500万像素' },
        { name: '电池', value: '5000mAh，支持22.5W快充' },
        { name: '操作系统', value: 'HarmonyOS 3.0' },
        { name: '尺寸与重量', value: '164.3mm × 75.8mm × 8.94mm，约187g' },
        { name: '网络', value: '5G' }
    ],
    related: ['enjoy-60', 'enjoy-70', 'band-8']
},

    // 笔记本电脑
    'matebook-x-pro': {
        id: 'matebook-x-pro',
        name: 'MateBook X Pro',
        subtitle: '3.1K原色全面屏，超级终端',
        category: '笔记本电脑',
        price: 9999,
        badge: '旗舰',
        images: [
            'images/matebook-x-pro-detail.jpg',
            'images/matebook-x-pro-keyboard.jpg',
            'images/matebook-x-pro-screen.jpg'
        ],
        colors: [
            { name: '深空灰', value: '#696969', image: 'images/matebook-x-pro-detail.jpg' },
            { name: '皓月银', value: '#c0c0c0', image: 'images/matebook-x-pro-silver.jpg' }
        ],
        configs: [
            { name: 'i7/16GB/1TB', price: 9999 },
            { name: 'i7/32GB/1TB', price: 11999 }
        ],
        features: [
            { icon: '🖥️', title: '3.1K原色屏', description: '14.2英寸3.1K原色全面屏，P3广色域' },
            { icon: '🔗', title: '超级终端', description: '多设备协同，智慧办公新体验' },
            { icon: '⚡', title: '13代酷睿', description: '第13代英特尔酷睿处理器，强劲性能' },
            { icon: '🔋', title: '长续航', description: '60Wh大电池，支持65W快充' }
        ],
        specifications: [
            { name: '处理器', value: '第13代英特尔酷睿 i7-1360P' },
            { name: '内存与存储', value: '16GB/32GB LPDDR5 + 1TB PCIe NVMe SSD' },
            { name: '显示屏', value: '14.2英寸，3120×2080分辨率，90Hz刷新率' },
            { name: '显卡', value: '英特尔锐炬Xe显卡' },
            { name: '电池', value: '60Wh，支持65W USB-C快充' },
            { name: '操作系统', value: 'Windows 11 家庭版' },
            { name: '尺寸与重量', value: '310.6mm × 221.4mm × 15.5mm，约1.38kg' },
            { name: '接口', value: 'Thunderbolt 4 × 2，USB-C × 1，3.5mm耳机孔' }
        ],
        related: ['matebook-14', 'matepad-pro', 'mate60-pro']
    },
    // 在 productDatabase 对象中添加华为MateBook 14

'matebook-14': {
    id: 'matebook-14',
    name: 'HUAWEI MateBook 14',
    subtitle: '2K触控全面屏，多屏协同，轻薄便携',
    category: '笔记本电脑',
    price: 5999,
    badge: '热销',
    images: [
        'images/matebook-14-detail.jpg',
        'images/matebook-14-screen.jpg',
        'images/matebook-14-keyboard.jpg',
        'images/matebook-14-side.jpg'
    ],
    colors: [
        { name: '深空灰', value: '#696969', image: 'images/matebook-14-detail.jpg' },
        { name: '皓月银', value: '#c0c0c0', image: 'images/matebook-14-silver.jpg' }
    ],
    configs: [
        { name: 'i5/16GB/512GB', price: 5999 },
        { name: 'i7/16GB/512GB', price: 6999 },
        { name: 'i7/16GB/1TB', price: 7499 }
    ],
    features: [
        { icon: '🖥️', title: '2K触控全面屏', description: '14英寸2K全面屏，支持十点触控，3:2生产力比例' },
        { icon: '🔗', title: '多屏协同', description: '手机、平板、电脑无缝协同，文件互传更便捷' },
        { icon: '⚡', title: '第13代酷睿', description: '第13代英特尔酷睿处理器，性能强劲' },
        { icon: '🔋', title: '长续航', description: '56Wh大电池，支持65W快充' }
    ],
    specifications: [
        { name: '处理器', value: '第13代英特尔酷睿 i5-1340P / i7-1360P' },
        { name: '内存与存储', value: '16GB LPDDR4x + 512GB/1TB PCIe NVMe SSD' },
        { name: '显示屏', value: '14英寸IPS，2160×1440分辨率，100% sRGB色域，支持触控' },
        { name: '显卡', value: '英特尔锐炬Xe显卡' },
        { name: '电池', value: '56Wh，支持65W USB-C快充' },
        { name: '操作系统', value: 'Windows 11 家庭版' },
        { name: '尺寸与重量', value: '307.5mm × 223.8mm × 15.9mm，约1.49kg' },
        { name: '接口', value: 'USB-C × 2（支持充电和数据传输），USB 3.2 Gen 1 × 1，HDMI × 1，3.5mm耳机孔' },
        { name: '无线连接', value: 'Wi-Fi 6，蓝牙5.1' },
        { name: '摄像头', value: '720P HD摄像头' },
        { name: '音频', value: '双扬声器，双麦克风' },
        { name: '键盘', value: '背光键盘，指纹电源键二合一' }
    ],
    related: ['matebook-x-pro', 'matepad-pro', 'mate60-pro']
},

    // 智能穿戴
    'watch-gt4': {
        id: 'watch-gt4',
        name: 'HUAWEI WATCH GT 4',
        subtitle: '科学减脂，强劲续航',
        category: '智能穿戴',
        price: 1488,
        badge: '热销',
        images: [
            'images/watch-gt4-detail.jpg',
            'images/watch-gt4-side.jpg',
            'images/watch-gt4-back.jpg'
        ],
        colors: [
            { name: '曜石黑', value: '#1a1a1a', image: 'images/watch-gt4-detail.jpg' },
            { name: '月光白', value: '#f5f5f5', image: 'images/watch-gt4-white.jpg' }
        ],
        configs: [
            { name: '46mm', price: 1488 },
            { name: '41mm', price: 1288 }
        ],
        features: [
            { icon: '❤️', title: '健康监测', description: '心率、血氧、压力全面监测' },
            { icon: '🏃', title: '100+运动模式', description: '专业运动指导，科学锻炼' },
            { icon: '🔋', title: '14天续航', description: '强劲续航，告别频繁充电' },
            { icon: '📱', title: '智能通知', description: '消息提醒，通话接听' }
        ],
        specifications: [
            { name: '显示屏', value: '1.43英寸AMOLED，466×466分辨率' },
            { name: '电池', value: '典型使用14天，重度使用8天' },
            { name: '防水等级', value: '5ATM，50米防水' },
            { name: '运动模式', value: '100+专业运动模式' },
            { name: '健康监测', value: '心率、血氧、睡眠、压力监测' },
            { name: '连接', value: '蓝牙5.2' },
            { name: '兼容性', value: 'Android 6.0+，iOS 9.0+' },
            { name: '尺寸与重量', value: '46.2mm × 46.2mm × 10.7mm，约48g' }
        ],
        related: ['watch-ultimate', 'band-8', 'mate60-pro']
    },
    
    // 在 productDatabase 对象中添加华为手环8

// 在 productDatabase 对象中添加 HUAWEI WATCH Ultimate

'watch-ultimate': {
    id: 'watch-ultimate',
    name: 'HUAWEI WATCH Ultimate',
    subtitle: '高端商务，全能旗舰，双向北斗卫星消息',
    category: '智能穿戴',
    price: 5999,
    badge: '旗舰',
    images: [
        'images/watch-ultimate-detail.jpg',
        'images/watch-ultimate-luxury.jpg',
        'images/watch-ultimate-satellite.jpg',
        'images/watch-ultimate-diving.jpg',
        'images/watch-ultimate-business.jpg'
    ],
    colors: [
        { name: '驰骋运动', value: '#1a1a1a', image: 'images/watch-ultimate-detail.jpg' },
        { name: '纵横海洋', value: '#000080', image: 'images/watch-ultimate-blue.jpg' },
        { name: '探险家', value: '#8b4513', image: 'images/watch-ultimate-brown.jpg' }
    ],
    configs: [
        { name: '标准版', price: 5999 },
        { name: '黄金版', price: 6999 },
        { name: '钻石版', price: 8999 }
    ],
    features: [
        { icon: '🛰️', title: '双向北斗卫星', description: '支持双向北斗卫星消息，无地面网络也能收发消息' },
        { icon: '🌊', title: '100米潜水', description: '100米专业潜水级防水，支持自由潜水、水肺潜水' },
        { icon: '💎', title: '高端材质', description: '钛金属表壳、蓝宝石玻璃镜面、陶瓷后壳' },
        { icon: '🔋', title: '14天续航', description: '智能模式14天，极限模式21天超长续航' },
        { icon: '❤️', title: '专业健康', description: 'ECG心电分析、动脉硬度检测、血氧监测' },
        { icon: '🧭', title: '专业探险', description: '五星双频定位，离线地图，轨迹返航' }
    ],
    specifications: [
        { name: '表壳材质', value: '纳米微晶陶瓷 + 钛金属' },
        { name: '表镜材质', value: '蓝宝石玻璃' },
        { name: '显示屏', value: '1.5英寸LTPO AMOLED，466×466分辨率' },
        { name: '处理器', value: '麒麟A2芯片' },
        { name: '内存', value: '32GB存储空间' },
        { name: '电池续航', value: '智能模式14天，极限模式21天' },
        { name: '充电方式', value: '无线快充，充电10分钟可使用1天' },
        { name: '防水等级', value: '100米防水，支持10ATM潜水' },
        { name: '卫星通信', value: '双向北斗卫星消息' },
        { name: '定位系统', value: '五星双频定位（GPS+北斗+GLONASS+Galileo+QZSS）' },
        { name: '健康监测', value: 'ECG心电分析、动脉硬度检测、血氧饱和度、心率、压力、睡眠监测' },
        { name: '运动模式', value: '100+专业运动模式，支持高尔夫、潜水、登山等专业运动' },
        { name: '通信功能', value: 'eSIM独立通话，蓝牙通话' },
        { name: '尺寸与重量', value: '49.5mm × 49.5mm × 13.5mm，约65g（不含表带）' },
        { name: '操作系统', value: 'HarmonyOS' },
        { name: '连接方式', value: '蓝牙5.2，Wi-Fi，NFC，eSIM' },
        { name: '兼容系统', value: 'Android 8.0+，iOS 12.0+' }
    ],
    related: ['watch-gt4', 'mate60-pro', 'band-8']
},
'band-8': {
    id: 'band-8',
    name: 'HUAWEI Band 8',
    subtitle: '全面屏，科学睡眠，超长续航',
    category: '智能穿戴',
    price: 249,
    badge: '热销',
    images: [
        'images/band-8-detail.jpg',
        'images/band-8-wrist.jpg',
        'images/band-8-sleep.jpg',
        'images/band-8-sports.jpg'
    ],
    colors: [
        { name: '曜石黑', value: '#1a1a1a', image: 'images/band-8-detail.jpg' },
        { name: '樱语粉', value: '#ffb6c1', image: 'images/band-8-pink.jpg' },
        { name: '翡冷翠', value: '#2e8b57', image: 'images/band-8-green.jpg' },
        { name: '晨曦金', value: '#d4af37', image: 'images/band-8-gold.jpg' }
    ],
    configs: [
        { name: '标准版', price: 249 },
        { name: 'NFC版', price: 299 }
    ],
    features: [
        { icon: '🖥️', title: '1.47英寸AMOLED', description: '超大全面屏，显示面积提升20%' },
        { icon: '💤', title: '科学睡眠', description: 'HUAWEI TruSleep™ 4.0，精准监测睡眠质量' },
        { icon: '🔋', title: '14天续航', description: '典型使用14天，告别频繁充电' },
        { icon: '❤️', title: '血氧监测', description: '全天候血氧饱和度监测，健康随时掌握' }
    ],
    specifications: [
        { name: '显示屏', value: '1.47英寸AMOLED，368×194分辨率' },
        { name: '电池续航', value: '典型使用14天，重度使用7天' },
        { name: '充电方式', value: '磁吸式快充，充电5分钟可使用2天' },
        { name: '防水等级', value: '5ATM，50米防水' },
        { name: '运动模式', value: '100+运动模式，支持自动识别运动类型' },
        { name: '健康监测', value: '心率监测、血氧监测、压力监测、睡眠监测' },
        { name: '连接方式', value: '蓝牙5.0' },
        { name: '兼容系统', value: 'Android 6.0+，iOS 9.0+' },
        { name: '尺寸与重量', value: '44.35mm × 25.8mm × 10.99mm，约16g（仅表体）' },
        { name: '表带材质', value: '硅胶表带，亲肤舒适' }
    ],
    related: ['watch-gt4', 'enjoy-70', 'enjoy-60', 'enjoy-50z']
},
    // 可以继续添加更多商品...
    // 在 productDatabase 对象中添加华为智慧屏 V5 Pro

'vision-v5-pro': {
    id: 'vision-v5-pro',
    name: '华为智慧屏 V5 Pro',
    subtitle: '巨幕旗舰，灵犀指向交互，鸿鹄画质',
    category: '智慧屏',
    price: 24999,
    badge: '旗舰',
    images: [
        'images/vision-v5-pro-detail.jpg',
        'images/vision-v5-pro-screen.jpg',
        'images/vision-v5-pro-remote.jpg',
        'images/vision-v5-pro-wall.jpg',
        'images/vision-v5-pro-gaming.jpg'
    ],
    colors: [
        { name: '曜石灰', value: '#696969', image: 'images/vision-v5-pro-detail.jpg' },
        { name: '月光银', value: '#c0c0c0', image: 'images/vision-v5-pro-silver.jpg' }
    ],
    configs: [
        { name: '85英寸', price: 24999 },
        { name: '75英寸', price: 19999 },
        { name: '65英寸', price: 14999 }
    ],
    features: [
        { icon: '🖱️', title: '灵犀指向遥控', description: '全球首创指向交互，像用手机一样操控大屏' },
        { icon: '🎨', title: 'SuperMiniLED', description: '千级分区背光，鸿鹄画质引擎，画面更细腻' },
        { icon: '🚀', title: '鸿鹄900芯片', description: '旗舰级智慧芯片，性能提升200%' },
        { icon: '🏠', title: '超级终端', description: '一碰投屏，多设备协同，智慧家庭中心' }
    ],
    specifications: [
        { name: '显示屏', value: '85英寸 Super MiniLED，4K UHD，120Hz刷新率' },
        { name: '背光技术', value: '千级分区背光，峰值亮度2000nits' },
        { name: '处理器', value: '鸿鹄900智慧芯片' },
        { name: '内存与存储', value: '6GB RAM + 64GB ROM' },
        { name: '操作系统', value: 'HarmonyOS 4.0' },
        { name: '音响系统', value: 'HUAWEI SOUND音响系统，8单元扬声器，70W功率' },
        { name: '摄像头', value: 'AI慧眼，2400万像素磁吸式摄像头，支持畅连通话' },
        { name: '接口', value: 'HDMI 2.1 × 3，USB 3.0 × 2，网口 × 1，AV输入 × 1，数字音频输出 × 1' },
        { name: '无线连接', value: 'Wi-Fi 6，蓝牙5.2' },
        { name: '能效等级', value: '三级能效' },
        { name: '安装方式', value: '支持壁挂和座装' },
        { name: '尺寸与重量', value: '含底座：1898×1162×386mm，约47.5kg；不含底座：1898×1089×46.8mm，约43.5kg' },
        { name: '特色功能', value: '灵犀指向交互、超级终端、AI健身、K歌功能、智能家居控制' }
    ],
    related: ['vision-s', 'vision-se', 'mate60-pro', 'smart-speaker']
},
};

// 商品分类映射
const productCategories = {
    'smartphones': ['mate60-pro', 'mate60', 'p60-pro', 'p50-pro', 'p40-pro', 'nova-12', 'nova-11', 'nova-10', 'enjoy-70'],
    'laptops-tablets': ['matebook-x-pro', 'matebook-14', 'matepad-pro', 'matepad-11'],
    'wearables': ['watch-gt4', 'watch-ultimate', 'band-8'],
    'smart-screen': ['vision-v5-pro', 'vision-s', 'vision-se'],
    'smart-home': ['smart-lock', 'smart-camera', 'smart-bulb', 'air-purifier', 'smart-speaker']
};