/**
 * ==================================================================
 * 各银行返利 / 开户活动数据集中配置
 * ==================================================================
 * 【使用说明】
 *   只需修改下方 REFERRAL_DATA 中各字段的值，
 *   首页卡片 / 常见问题 FAQ 会自动同步显示，无需再改 HTML。
 *
 * 【修改后需同步的地方】
 *   搜索引擎抓取的是原始 HTML，以下内容不会随 JS 自动更新，
 *   建议一并修改 index.html 中 <head> 部分的：
 *     1. <meta name="description" content="...">         中的金额
 *     2. <meta property="og:description" content="...">   中的金额
 *     3. JSON-LD (FAQPage / WebSite) <script> 中的金额
 *
 * 【当前各银行数据与 readme.md 存在不一致，请核实】
 *   盈立：index.html=300 RMB        readme.md=150 RMB
 *   平安：index.html=150 HKD        readme.md=200 HKD
 *   众安：页面官方链接 l.za.group/qFE47  readme=l.za.group/FuEIv
 * ==================================================================
 */
(function () {
    'use strict';

    window.REFERRAL_DATA = {

        /* ---------- 1. 盈立证券新加坡 (uSMART, SG) ---------- */
        usmart: {
            name: '盈立证券新加坡 (uSMART, SG)',
            rebate: '300 RMB',                  // 首次入金 ≥ 2000 美元 返现
            extra: '额外获取 0.02股$特斯拉及 36刀等奖励',
            code: '960j',                        // 邀请码
            registerUrl: 'https://m.usmartsg66.com/promo/overseas/bonus-dec.html?ICode=960j&langType=1&Id='
        },

        /* ---------- 2. 复星证券（星财富 / Fortune Wealth） ---------- */
        futu: {
            name: '复星证券（星财富）',
            rebate: '100 HKD',                   // 首次入金 ≥ 10,000 HKD 返现
            extraExtra: '200 HKD',               // 留存 30 天额外返现
            maxRebate: '300 HKD',                // 最高合计返现（FAQ 使用）
            code: 'UBETQ9',                      // 邀请码
            registerUrl: 'https://h5.fotechwealth.com/pages/startAccount.html?channel=040003&aeCode=B2&invitationCode=UBETQ9&langType=zhCn'
        },

        /* ---------- 3. 众安银行 (ZA Bank) ---------- */
        za: {
            name: '众安银行 (ZA Bank)',
            rebate: '300 HKD',                   // 达标返现
            extra: '30刀 + 660+ HKD',            // 填邀请码叠加奖励
            total: '1300+HKD',                   // 累计最高收益（FAQ 使用）
            code: 'LN7258',                      // 邀请码
            officialUrl: 'https://l.za.group/qFE47' // 官方奖励说明链接
        },

        /* ---------- 4. 平安数字银行 (PAOB) ---------- */
        paob: {
            name: '平安数字银行 (PAOB)',
            rebate: '150 HKD',                   // 邀请码注册返现
            extraCoupons: '200×2 + 100×12',      // 开通股票交易返现券
            total: '约 1,000 HKD',               // 预计总收益
            code: 'M4HIX6'                       // 邀请码
        }
    };

    /* ================ 渲染逻辑（一般无需修改） ================ */
    function getValue(path, data) {
        var keys = String(path).split('.');
        var v = data;
        for (var i = 0; i < keys.length && v != null; i++) {
            v = v[keys[i]];
        }
        return v;
    }

    function applyReferralData() {
        var data = window.REFERRAL_DATA || {};

        // 1. 文本/邀请码：<div data-referral="za.rebate">...</div>
        var els = document.querySelectorAll('[data-referral]');
        for (var i = 0; i < els.length; i++) {
            var path = els[i].getAttribute('data-referral');
            var v = getValue(path, data);
            if (v == null) continue;
            els[i].textContent = String(v);               // 更新显示文本
            if (path.split('.').pop() === 'code') {
                els[i].setAttribute('data-code', String(v)); // 邀请码同步到剪贴板属性
            }
        }

        // 2. 复制按钮：<button data-referral-code="za.code"> 仅同步 data-code
        var codeBtns = document.querySelectorAll('[data-referral-code]');
        for (var j = 0; j < codeBtns.length; j++) {
            var cv = getValue(codeBtns[j].getAttribute('data-referral-code'), data);
            if (cv != null) codeBtns[j].setAttribute('data-code', String(cv));
        }

        // 3. 链接：<a data-referral-href="za.officialUrl">
        var links = document.querySelectorAll('[data-referral-href]');
        for (var k = 0; k < links.length; k++) {
            var h = getValue(links[k].getAttribute('data-referral-href'), data);
            if (h) links[k].setAttribute('href', h);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyReferralData);
    } else {
        applyReferralData();
    }
})();