// 页面加载完成后执行
window.onload = function() {
    new Vue({
        el: '#app',
        data: {
            language: 'zh', // 默认语言为中文
            translations: {
                zh: {
                    logo: '春晓企服',
                    slogan: '让记账报税更简单',
                    heroTitle: '代理记账报价清单',
                    heroSubtitle: '专业、透明、高效的财税服务解决方案',
                    pricingTitle: '选择适合您的记账套餐',
                    priceUnit: '/年',
                    basicPlan: {
                        title: '最最基础版',
                        price: '¥2400',
                        description: '初创团队协作首选',
                        serviceDescription: '针对【小规模】、【无收入】、【无工资】企业；通常为新注册【无业务】或者【持股平台】类公司，可低成本维持企业税务正常的零申报服务'
                    },
                    standardPlan: {
                        title: '日常业务版',
                        price: '¥3600',
                        description: '最常用的记账版本',
                        serviceDescription: '【小规模】、【有收入或工资】，需要完整财务报表及日常【开票服务】的企业；通常为年收入500万以内的科技、文化、咨询管理类公司'
                    },
                    generalPlan: {
                        title: '一般纳税人版',
                        price: '¥6000',
                        description: '一般人套餐',
                        serviceDescription: '针对【一般纳税人】企业，需要按照一般纳税人记账报税要求操作的；一般零申报企业可按照3600元一年套餐执行，享受项目与最最基础版套餐一致'
                    },
                    recommendationTitle: '套餐推荐工具',
                    recommendationDescription: '请根据您企业的实际情况勾选以下选项，我们将为您推荐最适合的记账套餐',
                    recommendedTitle: '为您推荐的套餐',
                    checkboxItems: [
                        { label: '持股平台（不做任何经营，仅做持股使用）', value: 'holding' },
                        { label: '有员工，会发工资', value: 'has_employees' },
                        { label: '有员工，要缴纳社保和公积金', value: 'has_social_security' },
                        { label: '年收入不超过100万', value: 'income_below_1m' },
                        { label: '年收入在 200 万左右', value: 'income_around_2m' },
                        { label: '年收入在 500 万以上', value: 'income_above_5m' },
                        { label: '一般纳税人企业', value: 'general_taxpayer' },
                        { label: '有进出口业务', value: 'import_export' },
                        { label: '无收入、无人员，什么都没有，零申报', value: 'zero_declaration' }
                    ],
                    recommendedReasons: {
                        general: '您的企业是一般纳税人、年收入超过500万或有进出口业务，需要按照一般纳税人记账报税要求操作',
                        standard: '您的企业有员工、需要缴纳社保或有一定收入，需要完整的财务报表及日常开票服务',
                        basic: '您的企业是持股平台或无收入无人员的零申报企业，可低成本维持企业税务正常'
                    },
                    servicesTitle: '服务内容详情',
                    serviceItem: '服务项目',
                    serviceItems: [
                        '个税申报',
                        '增值税附加税申报',
                        '所得税申报',
                        '工商年报',
                        '税务汇算清缴',
                        '月度50张以内的凭证装订',
                        '报表编制',
                        '税控托管',
                        '每月25张以内的发票代开',
                        '3人以内的社保公积金扣缴',
                        '年度基数核定'
                    ],
                    faqTitle: '常见问题解答',
                    additionalServicesTitle: '额外服务',
                    additionalServices: [
                        '社保人数超过3人，可另行付费办理',
                        '科技型中小企业及高新认定委托可以另行付费办理'
                    ],
                    legalReminder: '新公司领照后，30 日内须办税务登记、15 日内建账，按期记账报税（无业务需零申报）！依据《税收征收管理法》《会计法》，未履行将面临罚款、列入非正常户、影响法人信用等后果。合规记账报税是企业经营的基础',
                    contactTitle: '联系我们',
                    contactDescription: '如果您对我们的服务有任何疑问，欢迎随时联系我们',
                    contactButton: '立即咨询',
                    consultTitle: '选择咨询方式',
                    phoneConsult: '拨打电话',
                    wechatConsult: '添加企业微信',
                    qrcodeAlt: '企业微信二维码',
                    scanQrcode: '扫码添加企业微信',
                    closeButton: '关闭',
                    footerText: '© 2026 专业财税服务. 保留所有权利.',
                    faqItems: [
                        {
                            question: '什么是代理记账？',
                            answer: '代理记账是指企业将本公司的会计核算工作全部委托给专业记账公司完成，本企业一般只设出纳岗位，负责日常收支业务和财产保管等工作。',
                            open: false
                        },
                        {
                            question: '为什么选择代理记账？',
                            answer: '代理记账可以节省企业成本，专业的记账公司拥有经验丰富的会计团队，能够提供准确、及时的财务报表，同时避免因财务人员变动带来的风险。',
                            open: false
                        },
                        {
                            question: '零申报企业需要记账吗？',
                            answer: '是的，即使是零申报企业也需要进行记账和报税。零申报企业按照2400元一年执行，享受项目与最最基础版套餐一致。',
                            open: false
                        },
                        {
                            question: '代理记账包含哪些服务？',
                            answer: '我们的代理记账服务包含个税申报、增值税附加税申报、所得税申报、工商年报、税务汇算清缴、凭证装订和报表编制等基础服务，以及税控托管、发票代开、社保公积金扣缴等增值服务。',
                            open: false
                        },
                        {
                            question: '如何选择适合自己的记账套餐？',
                            answer: '根据企业的实际情况选择：无收入、无人员社保的企业选择基础版（2400元/年）；有一些收入或者人员工资的企业选择常规业务版（3600元/年）；一般纳税人企业选择一般纳税人版（6000元/年起）。',
                            open: false
                        },
                        {
                            question: '社保人数超过3人怎么办？',
                            answer: '社保人数超过3人可以另行付费办理，具体费用可以咨询我们的客服人员。',
                            open: false
                        },
                        {
                            question: '科技型中小企业及高新认定委托可以办理吗？',
                            answer: '是的，科技型中小企业及高新认定委托可以另行付费办理，我们有专业的团队为您提供服务。',
                            open: false
                        },
                        {
                            question: '代理记账的流程是怎样的？',
                            answer: '1. 签订代理记账合同；2. 交接财务资料；3. 开始记账服务；4. 每月定期报税；5. 提供财务报表；6. 年度汇算清缴。',
                            open: false
                        }
                    ]
                },
                en: {
                    logo: 'Chun Xiao Business Services',
                    slogan: 'Making accounting and tax reporting easier',
                    heroTitle: 'Agent Accounting Quote List',
                    heroSubtitle: 'Professional, transparent, and efficient financial and tax service solutions',
                    pricingTitle: 'Choose the accounting package that suits you',
                    priceUnit: '/year',
                    basicPlan: {
                        title: 'Basic Version',
                        price: '¥2400',
                        description: 'Preferred for initial start-up team collaboration',
                        serviceDescription: 'For [small-scale], [no income], [No salary] enterprises; Usually for newly registered [no business] or [shareholding platform] companies, Can maintain normal zero reporting services for corporate taxes at a low cost.'
                    },
                    standardPlan: {
                        title: 'Daily Business Version',
                        price: '¥3600',
                        description: 'The most commonly used accounting version',
                        serviceDescription: '[Small-scale], [with income or salary], enterprises that require complete financial statements and daily [invoice issuance] services; Usually for technology, culture, consulting, and management companies with an annual income of less than 5 million.'
                    },
                    generalPlan: {
                        title: 'General Taxpayer Version',
                        price: '¥6000',
                        description: 'General taxpayer package',
                        serviceDescription: 'For [general taxpayer] enterprises, operated in accordance with the accounting and tax reporting requirements for general taxpayers; General zero reporting enterprises can follow the 3600 RMB per year package, enjoying the same services as the most basic version package.'
                    },
                    recommendationTitle: 'Package Recommendation Tool',
                    recommendationDescription: 'Please check the following options according to your company\'s actual situation, and we will recommend the most suitable accounting package for you',
                    recommendedTitle: 'Recommended package for you',
                    checkboxItems: [
                        { label: 'Holding platform (not operating, only for holding shares)', value: 'holding' },
                        { label: 'With employees, paying salaries', value: 'has_employees' },
                        { label: 'With employees, paying social security and provident fund', value: 'has_social_security' },
                        { label: 'Annual income not exceeding 1 million', value: 'income_below_1m' },
                        { label: 'Annual income around 2 million', value: 'income_around_2m' },
                        { label: 'Annual income above 5 million', value: 'income_above_5m' },
                        { label: 'General taxpayer enterprise', value: 'general_taxpayer' },
                        { label: 'With import and export business', value: 'import_export' },
                        { label: 'No income, no personnel, zero declaration', value: 'zero_declaration' }
                    ],
                    recommendedReasons: {
                        general: 'Your enterprise is a general taxpayer, has annual income above 5 million, or has import and export business, and needs to operate in accordance with general taxpayer accounting and tax reporting requirements',
                        standard: 'Your enterprise has employees, needs to pay social security, or has certain income, and needs complete financial statements and daily invoice issuance services',
                        basic: 'Your enterprise is a holding platform or a zero-declaration enterprise with no income and no personnel, which can maintain normal enterprise taxes at a low cost'
                    },
                    servicesTitle: 'Service Content Details',
                    serviceItem: 'Service Items',
                    serviceItems: [
                        'Individual tax declaration',
                        'Value-added tax and surcharge declaration',
                        'Income tax declaration',
                        'Annual business report',
                        'Tax final settlement',
                        'Voucher binding within 50 pieces per month',
                        'Report preparation',
                        'Tax control hosting',
                        'Invoice issuance within 25 pieces per month',
                        'Social security and provident fund deduction for less than 3 people',
                        'Annual base verification'
                    ],
                    faqTitle: 'Frequently Asked Questions',
                    additionalServicesTitle: 'Additional Services',
                    additionalServices: [
                        'If there are more than 3 social security participants, it can be handled for an additional fee',
                        'Technology-based small and medium-sized enterprises and high-tech certification entrustment can be handled for an additional fee'
                    ],
                    legalReminder: 'After a new company receives its license, it must complete tax registration within 30 days, establish accounts within 15 days, and conduct accounting and tax reporting on schedule (zero declaration is required for no business)! According to the "Tax Collection and Administration Law" and "Accounting Law", failure to comply will result in fines, inclusion in abnormal households, and impact on corporate credit. Compliance with accounting and tax reporting is the foundation of enterprise operation.',
                    contactTitle: 'Contact Us',
                    contactDescription: 'If you have any questions about our services, please feel free to contact us',
                    contactButton: 'Consult Now',
                    consultTitle: 'Choose Consultation Method',
                    phoneConsult: 'Make a Phone Call',
                    wechatConsult: 'Add Corporate WeChat',
                    qrcodeAlt: 'Corporate WeChat QR Code',
                    scanQrcode: 'Scan QR code to add corporate WeChat',
                    closeButton: 'Close',
                    footerText: '© 2026 Professional Financial Services. All rights reserved.',
                    faqItems: [
                        {
                            question: 'What is agency bookkeeping?',
                            answer: 'Agency bookkeeping refers to the enterprise entrusting all the accounting work of the company to a professional bookkeeping company, and the enterprise generally only sets up a cashier position, responsible for daily revenue and expenditure business and property custody work.',
                            open: false
                        },
                        {
                            question: 'Why choose agency bookkeeping?',
                            answer: 'Agency bookkeeping can save enterprise costs. Professional bookkeeping companies have experienced accounting teams that can provide accurate and timely financial statements, while avoiding risks caused by changes in financial personnel.',
                            open: false
                        },
                        {
                            question: 'Do zero-declaration enterprises need bookkeeping?',
                            answer: 'Yes, even zero-declaration enterprises need to perform bookkeeping and tax reporting. Zero-declaration enterprises are executed at 2400 yuan per year, enjoying the same services as the most basic package.',
                            open: false
                        },
                        {
                            question: 'What services does agency bookkeeping include?',
                            answer: 'Our agency bookkeeping services include individual tax declaration, value-added tax and surcharge declaration, income tax declaration, annual business report, tax final settlement, voucher binding and report preparation and other basic services, as well as tax control hosting, invoice issuance, social security and provident fund deduction and other value-added services.',
                            open: false
                        },
                        {
                            question: 'How to choose a suitable bookkeeping package?',
                            answer: 'Choose according to the actual situation of the enterprise: enterprises with no income and no personnel social security choose the basic version (2400 yuan/year); enterprises with some income or personnel wages choose the daily business version (3600 yuan/year); general taxpayer enterprises choose the general taxpayer version (starting from 6000 yuan/year).',
                            open: false
                        },
                        {
                            question: 'What if there are more than 3 social security participants?',
                            answer: 'If there are more than 3 social security participants, it can be handled for an additional fee. For specific costs, you can consult our customer service personnel.',
                            open: false
                        },
                        {
                            question: 'Can technology-based small and medium-sized enterprises and high-tech certification entrustment be handled?',
                            answer: 'Yes, technology-based small and medium-sized enterprises and high-tech certification entrustment can be handled for an additional fee. We have a professional team to provide services for you.',
                            open: false
                        },
                        {
                            question: 'What is the process of agency bookkeeping?',
                            answer: '1. Sign agency bookkeeping contract; 2. Handover financial materials; 3. Start bookkeeping services; 4. Monthly regular tax reporting; 5. Provide financial statements; 6. Annual final settlement.',
                            open: false
                        }
                    ]
                }
            },
            selectedPlan: 'basic', // 默认选择基础版套餐
            checkboxItems: [
                { label: '持股平台（不做任何经营，仅做持股使用）', value: 'holding' },
                { label: '有员工，会发工资', value: 'has_employees' },
                { label: '有员工，要缴纳社保和公积金', value: 'has_social_security' },
                { label: '年收入不超过100万', value: 'income_below_1m' },
                { label: '年收入在 200 万左右', value: 'income_around_2m' },
                { label: '年收入在 500 万以上', value: 'income_above_5m' },
                { label: '一般纳税人企业', value: 'general_taxpayer' },
                { label: '有进出口业务', value: 'import_export' },
                { label: '无收入、无人员，什么都没有，零申报', value: 'zero_declaration' }
            ],
            selectedOptions: [],
            recommendedPlan: '',
            recommendedPlanName: '',
            recommendedPlanPrice: '',
            recommendedReason: '',
            showConsultOptions: false,
            faqItems: []
        },
        methods: {
            // 选择套餐
            selectPlan(plan) {
                this.selectedPlan = plan;
                // 可以在这里添加选择套餐后的其他逻辑，比如显示不同的服务内容等
            },
            
            // 切换FAQ展开/折叠
            toggleFaq(index) {
                this.translations[this.language].faqItems[index].open = !this.translations[this.language].faqItems[index].open;
            },
            
            // 计算推荐套餐
            calculateRecommendation() {
                const selected = this.selectedOptions;
                const currentTranslations = this.translations[this.language];
                
                // 重置推荐结果
                this.recommendedPlan = '';
                this.recommendedPlanName = '';
                this.recommendedPlanPrice = '';
                this.recommendedReason = '';
                
                // 检查是否选择了一般纳税人、高收入或进出口业务选项
                if (selected.includes('general_taxpayer') || selected.includes('income_above_5m') || selected.includes('import_export')) {
                    this.recommendedPlan = 'general';
                    this.recommendedPlanName = currentTranslations.generalPlan.title;
                    this.recommendedPlanPrice = currentTranslations.generalPlan.price + '/' + (this.language === 'zh' ? '年' : 'year');
                    this.recommendedReason = currentTranslations.recommendedReasons.general;
                    return;
                }
                
                // 检查是否选择了有员工、社保、或中等收入选项
                if (selected.includes('has_employees') || selected.includes('has_social_security') || 
                    selected.includes('income_below_1m') || selected.includes('income_around_2m')) {
                    this.recommendedPlan = 'standard';
                    this.recommendedPlanName = currentTranslations.standardPlan.title;
                    this.recommendedPlanPrice = currentTranslations.standardPlan.price + '/' + (this.language === 'zh' ? '年' : 'year');
                    this.recommendedReason = currentTranslations.recommendedReasons.standard;
                    return;
                }
                
                // 检查是否只选择了持股平台或零申报
                if ((selected.length === 1 && (selected.includes('holding') || selected.includes('zero_declaration'))) || 
                    (selected.length === 2 && selected.includes('holding') && selected.includes('zero_declaration'))) {
                    this.recommendedPlan = 'basic';
                    this.recommendedPlanName = currentTranslations.basicPlan.title;
                    this.recommendedPlanPrice = currentTranslations.basicPlan.price + '/' + (this.language === 'zh' ? '年' : 'year');
                    this.recommendedReason = currentTranslations.recommendedReasons.basic;
                    return;
                }
            },
            
            // 拨打电话
            makePhoneCall() {
                window.location.href = 'tel:138-1035-9824';
                this.showConsultOptions = false;
            },
            
            // 切换语言
            switchLanguage(lang) {
                this.language = lang;
            }
        },
        
        // 监听选择选项的变化
        watch: {
            selectedOptions: {
                handler() {
                    this.calculateRecommendation();
                },
                deep: true
            }
        }
    });
    
    // 添加页面滚动动画效果
    addScrollAnimation();
    
    // 初始化微信分享
    initWechatShare();
    

};

// 添加页面滚动动画效果
function addScrollAnimation() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// 初始化微信分享
function initWechatShare() {
    // 这里可以添加微信分享的代码，使用微信JS-SDK
    // 由于需要企业微信公众号的配置，这里只添加基础结构
    if (typeof wx !== 'undefined') {
        // 微信JS-SDK配置
        wx.config({
            debug: false,
            appId: '', // 需要填写企业微信公众号的appId
            timestamp: '',
            nonceStr: '',
            signature: '',
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        });
        
        wx.ready(function() {
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title: '代理记账报价清单',
                link: window.location.href,
                imgUrl: '', // 需要填写分享图标
                success: function() {
                    // 分享成功后的回调
                },
                cancel: function() {
                    // 取消分享后的回调
                }
            });
            
            // 分享给朋友
            wx.onMenuShareAppMessage({
                title: '代理记账报价清单',
                desc: '专业、透明、高效的财税服务解决方案',
                link: window.location.href,
                imgUrl: '', // 需要填写分享图标
                type: '',
                dataUrl: '',
                success: function() {
                    // 分享成功后的回调
                },
                cancel: function() {
                    // 取消分享后的回调
                }
            });
        });
    }
}

// 添加联系按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // 这里可以添加联系我们的逻辑，比如弹出联系方式或者跳转到联系页面
            alert('感谢您的咨询！请拨打我们的服务热线：400-123-4567，或添加微信：service123456');
        });
    }
});

// 添加套餐卡片点击效果
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            // 移除所有卡片的active类
            pricingCards.forEach(c => c.classList.remove('active'));
            // 为当前点击的卡片添加active类
            this.classList.add('active');
        });
    });
});

// 添加响应式菜单功能（如果需要）
function initResponsiveMenu() {
    // 这里可以添加响应式菜单的代码
}



