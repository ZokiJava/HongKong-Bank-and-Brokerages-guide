/**
 * ==================================================================
 * site-content.js — 首页介绍内容统一配置中心
 * ==================================================================
 * 【使用说明】
 *   页面上的全部介绍文字与链接都集中定义在本文件的数据中，
 *   修改后刷新页面即可生效，无需改动 index.html 的结构。
 *
 *   · header          → 页头标题 / 副标题 / Logo 等
 *   · download        → 「下载指南文档 (PDF)」按钮文字与 PDF 路径
 *   · cards           → 各平台介绍卡片（核心优势 / 开户福利 / 邀请码 / 注册链接）
 *   · contact         → 底部联系方式区块内容与按钮文字
 *   · floatingLinks   → 右下角悬浮链接（hahaSIM / CSL）
 *
 *   注意：刷卡同步表内的高亮（<span class="highlight">）与链接（<a>）
 *   可直接以 HTML 标签形式写在字符串里，渲染时会原样输出。
 * ==================================================================
 */
(function () {
    'use strict';

    window.SITE_CONTENT = {
        /* ---------- 页头 ---------- */
        header: {
            homeUrl: 'https://t1.bbroot.com',
            logo: 'assets/ICON.jpg',
            logoAlt: '香港开户指南 - T1财经',
            logoTitle: 'T1财经 香港开户指南',
            heading: '香港开户指南|精选海外券商与香港数字银行开户福利',
            subtitle: '汇集香港银行、数字银行与券商开户渠道、专属邀请码与开户返现奖励，附香港电话卡（hahaSIM / CSL）办理与激活教程。更新日期：',
            updateDate: '2026-09-16'   // 页面加载后会自动刷新为当天日期
        },

        /* ---------- 下载按钮 ---------- */
        download: {
            text: '下载指南文档 (PDF)',
            file: './盈立复星众安平安开户指南.pdf',
            fileName: '盈立复星众安平安开户指南.pdf'
        },

        /* ---------- 平台介绍卡片 ---------- */
        cards: [
            {
                name: '盈立证券新加坡 (uSMART,SG)',
                borderColor: '#ff7043',   // 卡片顶部线条颜色
                tags: [
                    { text: '大券商 | 港美日新英股', background: '#ffebee', color: '#c62828' },
                    { text: '券商', background: '#ffebee', color: '#c62828' }
                ],
                sections: [
                    {
                        title: '✨ 核心优势：',
                        items: [
                            '大型券商，支持交易港、美、日、新、英等市场股票',
                            '无 CSR 要求，使用香港汇丰可免费入金出金',
                            '支持美股打新'
                        ]
                    },
                    {
                        title: '🎁 开户福利：',
                        items: [
                            '首次入金 ≥ 2000刀：<span class="highlight">可返 300 HKD</span>',
                            '额外获取 0.02股$特斯拉及 36刀等奖励'
                        ]
                    }
                ],
                inviteCode: '960j',
                register: {
                    text: '立即注册开户→',
                    url: 'https://m.usmartsg66.com/promo/overseas/bonus-dec.html?ICode=960j&langType=1&Id=',
                    background: '#ff7043'
                }
            },
            {
                name: '复星证券（星财富）',
                borderColor: '#c0ca33',
                tags: [
                    { text: '港股打新 | 优汇率', background: '#f9fbe7', color: '#827717' },
                    { text: '券商', background: '#ffebee', color: '#c62828' }
                ],
                sections: [
                    {
                        title: '✨ 核心优势：',
                        items: [
                            '支持港股 IPO 免费打新',
                            '换汇汇率极好，方便换成RMB出金'
                        ]
                    },
                    {
                        title: '🎁 开户福利：',
                        items: [
                            '首次入金 ≥ 10,000港币且维持三天：<span class="highlight">可返 300 HKD</span>',
                            '完成入金<span class="highlight">可享受一世免佣与实时行情</span>',
                            '返现福利无需交易，港卡出金免费'
                        ]
                    }
                ],
                inviteCode: 'UBETQ9',
                register: {
                    text: '立即注册开户→',
                    url: 'https://h5.fotechwealth.com/pages/startAccount.html?channel=040003&aeCode=B2&invitationCode=UBETQ9&langType=zhCn',
                    background: '#c0ca33'
                }
            },
            {
                name: '众安银行 (ZA Bank)',
                borderColor: '#26a69a',
                tags: [
                    { text: '香港数字银行 | 必开推荐', background: '#e0f2f1', color: '#00695c' },
                    { text: '银行', background: '#ffebee', color: '#c62828' }
                ],
                sections: [
                    {
                        title: '✨ 核心优势：',
                        items: [
                            '赴港必开的银行之一',
                            '门槛极低，活动及奖励多'
                        ]
                    },
                    {
                        title: '🎁 开户福利：',
                        items: [
                            '持有1,000HKD总结余过夜：<span class="highlight">返 300 HKD</span>',
                            '持有10,000HKD股票过夜：<span class="highlight">额外返 200 HKD</span>',
                            '填邀请码可额外获 <span class="highlight">30刀 + 1000HKD</span> 奖励'
                            
                        ]
                    }
                ],
                inviteCode: 'LN7258'
                // 众安银行没有独立注册网页，直接下载 ZA Bank App 开户即可
            },
            {
                name: '平安数字银行 (PAOB)',
                borderColor: '#ffa726',
                tags: [
                    { text: '零门槛 | 高额券包', background: '#fff3e0', color: '#ef6c00' },
                    { text: '银行', background: '#ffebee', color: '#c62828' }
                ],
                sections: [
                    {
                        title: '✨ 核心优势：',
                        items: [
                            '完全无门槛',
                            '该银行一共能纯赚一千港币左右'
                        ]
                    },
                    {
                        title: '🎁 开户福利：',
                        items: [
                            '通过邀请码注册即可：<span class="highlight">返 150 HKD</span>',
                            '开通股票交易：可使用港币 200×2 + 100×12 返现优惠卷'
                        ]
                    }
                ],
                inviteCode: 'M4HIX6'
                // 平安数字银行通过 PAOB App 开户，无独立网页注册入口
            },
        ],

        /* ---------- 底部联系方式 ---------- */
        contact: {
            title: '📞 更多服务与业务咨询',
            description: '如需办理 <strong>香港电话卡（CSL / hahasim）</strong> 或有任何开户疑问，欢迎通过下方方式联系我：',
            wechatId: 'KirinChew',
            buttons: [
                {
                    type: 'link',
                    label: 'Telegram 联系我',
                    url: 'https://t.me/KirinChew',
                    icon: '<svg style="width:18px;height:18px;vertical-align:text-bottom;margin-right:5px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.9 1.21-5.36 3.55-.5.35-.96.52-1.38.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.41-1.4-.87.03-.24.36-.48.98-.74 3.86-1.68 6.43-2.79 7.72-3.32 3.67-1.52 4.43-1.78 4.93-1.79.11 0 .36.03.49.15.11.1.15.23.16.34.01.07 0 .15-.01.21z"/></svg>'
                },
                {
                    type: 'wechat',
                    label: '微信: KirinChew',
                    icon: '<svg style="width:18px;height:18px;margin-right:5px" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,13.5C7.67,13.5 7,12.83 7,12C7,11.17 7.67,10.5 8.5,10.5C9.33,10.5 10,11.17 10,12C10,12.83 9.33,13.5 8.5,13.5M15.5,13.5C14.67,13.5 14,12.83 14,12C14,11.17 14.67,10.5 15.5,10.5C16.33,10.5 17,11.17 17,12C17,12.83 16.33,13.5 15.5,13.5M12,4.5C7.3,4.5 3.5,7.7 3.5,11.5C3.5,13.8 5,15.8 7.1,17L6.5,19.5L9.3,18.1C10.1,18.3 11,18.5 12,18.5C16.7,18.5 20.5,15.3 20.5,11.5C20.5,7.7 16.7,4.5 12,4.5Z"/></svg>'
                }
            ]
        },

        /* ---------- 右下角悬浮链接 ---------- */
        floatingLinks: [
            {
                text: '香港电话卡hahaSIM',
                icon: '➡️',
                href: './hahasim.html',
                className: 'hahasim',
                ariaLabel: '香港电话卡hahaSIM 激活教程'
            },
            {
                text: '香港电话卡CSL',
                icon: '➡️',
                href: './cslsim.html',
                className: 'csl',
                ariaLabel: '香港电话卡CSL 激活教程'
            }
        ]
    };

    /* ================== 渲染逻辑（一般无需修改） ================== */

    function renderHeader() {
        var el = document.getElementById('siteHeader');
        var h = window.SITE_CONTENT.header;
        var dl = window.SITE_CONTENT.download;
        if (!el || !h) return;
        el.innerHTML =
            '<h1><a href="' + h.homeUrl + '">' +
            '<img class="logo" src="' + h.logo + '" alt="' + h.logoAlt + '" title="' + h.logoTitle + '"></a>' +
            h.heading + '</h1>' +
            '<p class="subtitle">' + h.subtitle + '<span id="updateDate">' + h.updateDate + '</span></p>' +
            '<a class="download-btn" onclick="forceDownload(\'' + dl.file + '\', \'' + dl.fileName + '\')">' +
            '<svg style="width:18px;height:18px;margin-right:6px;" viewBox="0 0 24 24">' +
            '<path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>' +
            dl.text +
            '</a>';
    }

    function renderCards() {
        var el = document.getElementById('cardsGrid');
        if (!el) return;
        var html = '';
        window.SITE_CONTENT.cards.forEach(function (card) {
            html += '<div class="card" style="border-top-color:' + card.borderColor + ';">';
            html += '<h2>' + card.name + '</h2>';

            if (card.tags && card.tags.length) {
                html += '<div class="tags">';
                card.tags.forEach(function (tag) {
                    html += '<div class="tag" style="background:' + tag.background + '; color:' + tag.color + ';">' + tag.text + '</div>';
                });
                html += '</div>';
            }

            (card.sections || []).forEach(function (section) {
                html += '<div class="section-title">' + section.title + '</div>';
                html += '<ul>';
                section.items.forEach(function (item) {
                    html += '<li>' + item + '</li>';
                });
                html += '</ul>';
            });

            if (card.inviteCode) {
                html += '<div class="section-title">🔑 专属邀请码：</div>' +
                    '<div class="code-row">' +
                    '<div class="code-box" data-code="' + card.inviteCode + '">' + card.inviteCode + '</div>' +
                    '<button class="copy-btn" type="button" data-code="' + card.inviteCode + '">复制</button>' +
                    '</div>';
            }

            if (card.register) {
                html += '<a href="' + card.register.url + '" target="_blank" class="btn" style="background:' + card.register.background + ';">' + card.register.text + '</a>';
            }

            html += '</div>';
        });
        el.innerHTML = html;
    }

    function renderContact() {
        var el = document.getElementById('contactSection');
        if (!el) return;
        var c = window.SITE_CONTENT.contact;
        var html = '<h3>' + c.title + '</h3>' +
            '<p style="color:#666;">' + c.description + '</p>' +
            '<div class="contact-buttons">';

        c.buttons.forEach(function (btn) {
            if (btn.type === 'wechat') {
                html += '<button type="button" onclick="copyWeChat(this)" class="contact-btn wechat">' +
                    btn.icon + '<span>' + btn.label + '</span></button>';
            } else {
                html += '<a href="' + btn.url + '" target="_blank" class="contact-btn">' +
                    btn.icon + btn.label + '</a>';
            }
        });

        html += '</div>';
        el.innerHTML = html;
    }

    function renderFloating() {
        var el = document.getElementById('floatingStack');
        if (!el) return;
        var html = '';
        window.SITE_CONTENT.floatingLinks.forEach(function (link) {
            html += '<a class="floating-link ' + link.className + '" href="' + link.href +
                '" target="_blank" rel="noopener noreferrer" aria-label="' + link.ariaLabel + '">' +
                '<span>' + link.text + '</span><span class="floating-icon">' + link.icon + '</span></a>';
        });
        el.innerHTML = html;
    }

    renderHeader();
    renderCards();
    renderContact();
    renderFloating();
})();