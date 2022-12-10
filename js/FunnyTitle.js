<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.function">addEventListener('visibilitychange', function () {
     if (document.hidden) {
         function">$('[rel="icon"]').function">attr('href', "/img/trhx2.png");
         document.title = 'ヽ(●-`Д´-)ノ别走！';
         function">clearTimeout(titleTime);
     }
     else {
         function">$('[rel="icon"]').function">attr('href', "/img/trhx2.png");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎回来！' + OriginTitle;
         titleTime = function">setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
