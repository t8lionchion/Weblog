const subtitles = document.querySelectorAll('.subtitle');

subtitles.forEach(subtitle => {
  const innerP = subtitle.querySelector('span p');
  const innermessage=subtitle.querySelector('span div');
  // 點擊該卡片顯示內容
  subtitle.addEventListener('click', (e) => {
    innerP.style.display = 'block';
    innermessage.style.display='block'
    e.stopPropagation(); // 防止冒泡觸發 document click
  });

  // 點擊其他區域就關閉該卡片內容
  document.addEventListener('click', (e) => {
    // 如果點到的不是該卡片本身，也不是它的子元素
    if (!subtitle.contains(e.target)) {
      innerP.style.display = '-webkit-box';
      innermessage.style.display='none'
    }
  });
});
/* 留言功能 */

/* 將所有留言板中的div.data-article-id抓出來 */
const subtitle=document.querySelectorAll("div[data-article-id]");
/* 建立空陣列 */
let arrayid=[];
let jsonid={};
/* 用迴圈找到所有留言版的data-article-id */
subtitle.forEach(allid=>{
  /* console.log(allid.dataset.articleId); */
  /* 將它們全部儲存在陣列中 */
  arrayid.push(allid.dataset.articleId);
  
});
/* 確認陣列格式沒有問題 */
/* console.log(arrayid); */
/* 將array轉為json */
  jsonid=JSON.stringify(arrayid);
/* 確認json格式沒有問題 */
/* console.log(jsonid); */
 /* 將他們存進local資料庫中 */
 localStorage.setItem("allmessageid",jsonid);


/* 渲染留言區function() */
function rendermessage(currentId, msgOutput){
  /* 等下打 */
  const msglist=JSON.parse(localStorage.getItem(currentId)) || [];
  msgOutput.innerHTML="";
  msglist.forEach((msg,index)=>{
    const card=document.createElement("div");
    /* 賦予其class避免跑版 */
    card.className="card mb-2";
    /* 寫裡面的下一層div */
    const cardbody=document.createElement("div");
    /* 同樣賦予其class */
    cardbody.className="card-body d-flex justify-content-between align-items-center";
    /* 再寫下一層 */
    const sp=document.createElement("span");
    sp.innerText=`留言者:${msg.name1}留言內容是:${msg.content}`;
    const btn=document.createElement("button");
    btn.className="btn btn-sm btn-danger";
    btn.innerText="刪除";

    /* 監聽刪除按鈕 */
    btn.addEventListener("click",()=>{
      msglist.splice(index,1);
      localStorage.setItem(currentId,JSON.stringify(msglist));
      rendermessage(currentId, msgOutput);
    })
    /* 組成畫面 */
    msgOutput.appendChild(card);
    card.appendChild(cardbody);
    cardbody.appendChild(sp);
    cardbody.appendChild(btn);
  });
};


/* 使用者留言時就會創建對應的留言區文件在localstorage中 */

/*定位使用者的留言區位置，方法是在使用者使用留言功能時創建對應位置的本地資料庫  */

subtitle.forEach(localmessageid=>{

  const currentId=localmessageid.dataset.articleId;
  const nameInput=localmessageid.querySelector(".nameInput");
  const msgInput=localmessageid.querySelector(".msgInput");
  const msgOutput=localmessageid.querySelector(".msgOutput");
  const btn=localmessageid.querySelector(".btn");
  btn.addEventListener("click",()=>{
    const nameI=nameInput.value.trim();
    const msgI=msgInput.value.trim();
    if(!nameI || !msgI){
      return;
    }
     /* 取好的值存進對應的本地資料庫 */
     /* 先準備key以方便對應文章的留言區 */
    const key=`${currentId}`;
    /* 先查看是否有之前的留言或是對應的文章資料庫 */
    const oldmessage=JSON.parse(localStorage.getItem(key)) || [];
    oldmessage.push({
      name1:nameI,
      content:msgI
    })

    localStorage.setItem(key,JSON.stringify(oldmessage));
    /* 清空輸入框 */
    nameInput.value="";
    msgInput.value="";
    /* 渲染留言區 */
    rendermessage(currentId, msgOutput)
  })
  /* 渲染所有留言區 */
  rendermessage(currentId, msgOutput);
});

