/*
    Assignment I
    for the NTHU course "Basic Web Linguistic Application Development"
    Last Updated on Nov 6, 2017
*/

//定義在client/main.html的<body></body>之間所產生的網頁事件
Template.body.events({
  //當id是submitMsg的網頁物件被點選以後觸發
  "click #submitMsg": function(event) {
    //event.preventDefault()會關閉submit跟reset按鈕的HTML預設功能
    //對submit按鈕來說，在關閉預設功能後，點選時就不會重新讀取整個頁面了。
    event.preventDefault();
    
    //用document.getElementById()取得id是myMsg的物件裡的內容為字串，
    //並把此字串存到myMsg的變數裡
    var myMsg = document.getElementById("myMsg").value;
    
    //用document.getElementById()conversationBox的物件裡的內容為字串，
    //並把此字串存到currentCon的變數裡
    var currentCon = document.getElementById("conversationBox").value;
    
    //把新的訊息myMsg加到"\nYou: "的字串後面，而\n代表換行的符號，然後再把
    //整個字串附加到原本的對話內容currentCon之後，然後再儲存至currentCon
    //用新的對話內容取代舊的對話內容。
    currentCon = currentCon + "\nYou: " + myMsg;

    //建立一個變數numQ，儲存關鍵字串"How much is"
    var numQ = "How much is";
    
    //利用字串的indexOf()功能，測試myMsg裡是否含有關鍵字串"How much is"
    //如果有含關鍵字串，就會得到關鍵字串的開始位置數字。如果沒有關鍵字串，就會得到-1。
    //把測試的結果儲存至numQPos。
    var numQPos = myMsg.indexOf(numQ);

    //利用測試的結果進行不同的動作。
    //當numQPos > -1，代表myMsg中含有關鍵字串，這時候我們來試著從myMsg中取出方程式
    if(numQPos > -1)
    {
      //我們需要在myMsg句尾有或沒有問號的情況下都能取出方程式
      
      //首先，利用indexOf()測試myMsg裡面是否有問號。有的話會是問號的位置
      //沒有的話則是-1。結果會儲存在qMark變數裡。另外也建立一個formula變數
      //並定義為空字串，稍後用來儲存方程式字串
      var qMark = myMsg.indexOf("?"), formula = "";
      
      //如果發現myMsg裡有問號的話…
      if(qMark > -1)
      {
        //利用substring()功能從myMsg中取出方程式，其中起點是關鍵字串"How much is"
        //的長度(也就是substring的起點在關鍵字串之後)，而終點就是qMark，也就是
        //問號開始之前
        formula = myMsg.substring(numQ.length, qMark);
      }
      //如果myMsg沒有找到問號
      else
      {
        //我們就只需要起點，也就是關鍵字串numQ的長度
        formula = myMsg.substring(numQ.length);
      }
      
      //創造一個變數叫做calResult，儲存使用eval()功能計算方程式formula的結果
      var calResult = eval(formula);
      
      //把計算結果附加到"\nELIZA: It is "之後，再把整個訊息附加到所有對話
      //currentCon之後，再代替原本的currentCon
      currentCon = currentCon + "\nELIZA: It is " + calResult;
    }
    //當myMsg訊息中沒有找到關鍵字串"How much is "的時候...
    else
    {
      //建立一個failMsg變數儲存預設的訊息"ELIZA: Sorry, I cannot understand."
      var failMsg = "ELIZA: Sorry, I cannot understand.";
      //把failMsg附加至一個斷行符號之後，再附加至原本的對話currentCon
      //再取代原始的currentCon
      currentCon = currentCon + "\n" + failMsg;
    }

    //結尾的時候，利用document.getElementById()把id是myMsg的網頁物件的內容
    //設定為空字串
    document.getElementById("myMsg").value = "";
    //最後，把新的所有對話訊息currentCon設定為id是conversationBox的網頁物件
    //的內容，然後大功告成！
    document.getElementById("conversationBox").value = currentCon;
  },
  "click #resetMsg": function(event) {
    event.preventDefault();
  }
});
