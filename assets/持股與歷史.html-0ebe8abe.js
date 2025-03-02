import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as h,a as t,b as e,d as a,w as l,e as c}from"./app-c6df38e6.js";const _="/StockSheet/images/台股訂閱版/摺疊_歷史.gif",u="/StockSheet/images/台股訂閱版/摺疊_儀表板.gif",p={},f=t("h2",{id:"共同部分",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#共同部分","aria-hidden":"true"},"#"),e(" 共同部分")],-1),g=t("h3",{id:"資料並未更新",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#資料並未更新","aria-hidden":"true"},"#"),e(" 資料並未更新")],-1),m=t("p",null,"若交易紀錄頁面有更新但 「持股」「歷史」頁面卻沒有更新的話",-1),x={class:"hint-container tip"},b={class:"hint-container-title"},B=c('<h3 id="區別方式" tabindex="-1"><a class="header-anchor" href="#區別方式" aria-hidden="true">#</a> 區別方式</h3><table><thead><tr><th>持股</th><th>未平倉</th><th>仍持有的股票</th></tr></thead><tbody><tr><td>歷史</td><td>已平倉</td><td>出清 ( 賣光 ) 的股票</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">配合交易紀錄的「平倉欄位」來做區分</p><p>參考 <a href="%E4%BA%A4%E6%98%93%E7%B4%80%E9%8C%84#%E5%B9%B3%E5%80%89">交易紀錄 &gt; 平倉</a></p></div><h3 id="可直折疊分類" tabindex="-1"><a class="header-anchor" href="#可直折疊分類" aria-hidden="true">#</a> 可直折疊分類</h3><div style="text-align:center;"><p>當同一檔股票設有多種分類時可以摺疊或展開<br><img src="'+_+'" alt="" loading="lazy"></p><p>儀表板對應的部分也會跟著摺疊或展開<br><img src="'+u+'" alt="image" height="400"></p></div><h2 id="持股" tabindex="-1"><a class="header-anchor" href="#持股" aria-hidden="true">#</a> 持股</h2><p>在此分頁的「股數」都應該要 &gt; 0<br> 與儀表板的「持股」未實現損益表 ( 藍色 ) 長條圖同步</p><h4 id="持股欄位說明" tabindex="-1"><a class="header-anchor" href="#持股欄位說明" aria-hidden="true">#</a> 持股欄位說明</h4>',8),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"欄位名稱"),t("th",null,"說明")])],-1),E=t("tr",null,[t("td",{style:{"text-align":"center"}},"日期"),t("td",null,"該股票最後一次交易的日期")],-1),k=t("td",{style:{"text-align":"center"}},"買入均價",-1),v=t("strong",null,"不",-1),S=t("tr",null,[t("td",{style:{"text-align":"center"}},"交易成本"),t("td",null,[e("是"),t("mark",null,"已交易"),e("所有交易成本的合計")])],-1),N=t("tr",null,[t("td",{style:{"text-align":"center"}},"平均成本"),t("td",null,"全部股數的平均買入價 ( 包含股票股利 )")],-1),V=t("tr",null,[t("td",{style:{"text-align":"center"}},"收入"),t("td",null,"若有多次交易且仍尚未平倉時會出現的收入")],-1),C=t("tr",null,[t("td",{style:{"text-align":"center"}},"未實現損益(率)"),t("td",null,[e("假設股票以現價全數賣出後的實際損益 ( "),t("mark",null,"有扣除"),e("交易成本 )")])],-1),w=t("tr",null,[t("td",{style:{"text-align":"center"}},"產業/ETF"),t("td",null,"依據證交所的產業與分類")],-1),A=t("h2",{id:"歷史",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#歷史","aria-hidden":"true"},"#"),e(" 歷史")],-1),L=t("p",null,[e("在此分頁的「股數」都應該要 = 0"),t("br"),e(" 與儀表板「歷史」已實現損益表 ( 黃色 ) 長條圖同步")],-1),R=t("p",null,"因為已經完成買入和賣出的動作，因此欄位名稱就是字面上的意思就不特地說明拉~",-1);function T(z,D){const d=n("Badge"),r=n("RouterLink"),s=n("font");return o(),h("div",null,[f,g,m,t("div",x,[t("p",b,[e("請按【儀表板】的 "),a(d,null,{default:l(()=>[e("更新儀表板")]),_:1})]),t("p",null,[e("參考 "),a(r,{to:"/guide/feature/%E4%B8%80%E9%8D%B5%E6%9B%B4%E6%96%B0.html"},{default:l(()=>[e("功能 > 一鍵更新")]),_:1})])]),B,t("table",null,[y,t("tbody",null,[E,t("tr",null,[k,t("td",null,[e("實際買入價格的平均 ( "),a(s,{color:"red"},{default:l(()=>[v]),_:1}),e("包含股票股利 )")])]),S,N,V,C,w])]),A,L,R])}const q=i(p,[["render",T],["__file","持股與歷史.html.vue"]]);export{q as default};
