import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c,a as t,b as e,d as n,w as a,e as d}from"./app-c6df38e6.js";const h={},_=t("h3",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),p=t("p",null,"因為各券商手續費折讓比例與計算時的進位方式不同，為了更加準確的計算持有成本而設計「可輸入不同卷商功能」與為了計算精準誤差盡量趨近 0 而設計了手續費可選擇計算時的「進位方式」",-1),u=t("h3",{id:"如何知道手續費計算方式是麼進位",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#如何知道手續費計算方式是麼進位","aria-hidden":"true"},"#"),e(" 如何知道手續費計算方式是麼進位?")],-1),f=d('<h1 id="_1-元的誤差" tabindex="-1"><a class="header-anchor" href="#_1-元的誤差" aria-hidden="true">#</a> 1 元的誤差</h1><p>在以下幾種情況在計算過程中會有 1 元的誤差</p><ul><li><a href="#%E9%80%B2%E4%BD%8D%E5%95%8F%E9%A1%8C">進位問題</a></li><li><a href="#%E9%9B%B6%E8%82%A1">零股</a></li></ul><h2 id="調整方式" tabindex="-1"><a class="header-anchor" href="#調整方式" aria-hidden="true">#</a> 調整方式</h2><div class="hint-container tip"><p class="hint-container-title">在【交易紀錄】的「W欄-零股差價 1 元」選擇「扣1」</p></div><h3 id="進位問題" tabindex="-1"><a class="header-anchor" href="#進位問題" aria-hidden="true">#</a> 進位問題</h3><div class="hint-container tip"><p class="hint-container-title">這是屬於手續費進位問題</p></div><p>在「未實現損益」與「已實現損益」</p><p>因為是多筆加總，因此加總後可能會有誤差屬正常現象</p>',9),b={class:"hint-container info"},m=t("p",{class:"hint-container-title"},"舉例",-1),x=t("p",null,[e("買進，已經四捨五入"),t("br"),e(" 賣出，也四捨五入")],-1),v=t("p",null,"但實際損益的公式是全部一起算才四捨五入",-1),B=t("p",null,[e("買 1000 股 68.5 元 + 手續費 = "),t("code",null,"68524"),e(" 元")],-1),E=t("p",null,[e("賣 1000 股 71.1 元 + 手續費 = "),t("code",null,"70862"),e(" 元")],-1),g=t("hr",null,null,-1),k=t("h4",{id:"實際上",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#實際上","aria-hidden":"true"},"#"),e(" 實際上")],-1),w=t("p",null,[e("買進 = "),t("code",null,"68524.4"),e(" 元")],-1),y=t("p",null,[e("賣出 = "),t("code",null,"70861.6"),e(" 元")],-1),N=t("code",null,"2337.2",-1),V=t("code",null,"1",-1),A=d('<h3 id="零股" tabindex="-1"><a class="header-anchor" href="#零股" aria-hidden="true">#</a> 零股</h3><p>經詢問券商後，確認零股的部分這 1 元的差異是因為<br> 零股在交易時會因多次交易造成價差，且無法確定哪次交易會產生 1 元價差</p><div class="hint-container info"><p class="hint-container-title">舉例</p><p>對 A 檔股票下單 20.5 元 買 500 股<br> 搓合的過程可能是分三次成交<br> 100 股 + 250 股 + 150 股 = 500 股<br> 最後加總<br> 並在這過程中將會產生的價差 (原理同未實現損益)</p></div>',3);function C(D,L){const s=o("RouterLink"),i=o("Badge");return r(),c("div",null,[_,p,u,t("p",null,[e("參考 "),n(s,{to:"/fqa/2022-11-16.html"},{default:a(()=>[e("常見問題 > 如何知道券商手續費的計算進位方式?")]),_:1})]),f,t("div",b,[m,x,v,B,E,t("p",null,[e("計算差額 = "),n(i,{type:"warning"},{default:a(()=>[e("2338")]),_:1}),e(" 元")]),g,k,w,y,t("p",null,[e("計算差額 = "),N,e(" 元 > 四捨五入 "),n(i,{type:"danger"},{default:a(()=>[e("2337")]),_:1}),e(" 元")]),n(i,{type:"warning"},{default:a(()=>[e("2338")]),_:1}),e(" 元與 "),n(i,{type:"danger"},{default:a(()=>[e("2337")]),_:1}),e(" 元這裡就會產生 "),V,e("元 的誤差")]),A])}const F=l(h,[["render",C],["__file","2022-11-17.html.vue"]]);export{F as default};
