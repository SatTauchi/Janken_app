//0 Counter変数の定義
let counter = 0;
let com_counter = 0;
let ready = "";
ready = document.getElementById("com_icon").src="img/sazae_ready.jpeg";
$("#win").html(counter);
$("#lose").html(com_counter);
$("#com_icon").html(ready);


//1 Userの出す手の選択（グー）
$("#gu_btn").on("click", function(){

//2_1 COMの手を選択するための乱数（1~3）
     const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""
     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
     }
     if(r === 2) {
     view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
     }

//3 勝ち負けの判断処理 & Counter変数の処理
     let result =""
     if(r === 1) {
        result = "あいこ！もう１回"
    } else if (r === 2){
        result = "やったね！うふふふふ"; counter = counter + 1
    } else if (r === 3){
        result = "残念・・・来週も見てくださいね"; com_counter = com_counter + 1
    }
//4 結果表示
    $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
    $("#win").html(counter);
    $("#lose").html(com_counter);

//6 Counter変数を使って先に3勝した方を判定
    let final = ""
    if(counter === 3){
        final = "あなたの勝ち！！"; counter = 0; com_counter = 0;
    }
    if(com_counter === 3){
        final = "サザエさんの勝ち！！"; counter = 0; com_counter = 0;
    } 

    $("#final_judgement").html(final).css('color', 'red');

});


//1 Userの出す手の選択（チョキ）
$("#cho_btn").on("click", function(){
//2_1 COMの手を選択するための乱数（1~3）
     const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""
     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
     }
     if(r === 2) {
     view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
     }
  
//3 勝ち負けの判断処理
    let result =""
     if(r === 1) {
        result = "残念・・・来週も見てくださいね"; com_counter = com_counter + 1
    } else if (r === 2){
        result = "あいこ！もう１回"
    } else if (r === 3){
        result = "やったね！うふふふふ"; counter = counter + 1
    }
//4 結果表示
     $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
$("#win").html(counter);
$("#lose").html(com_counter);

//6 Counter変数を使って先に3勝した方を判定
let final = ""
if(counter === 3){
    final = "あなたの勝ち！！"; counter = 0; com_counter = 0;
}
if(com_counter === 3){
    final = "サザエさんの勝ち！！"; counter = 0; com_counter = 0;
} 

$("#final_judgement").html(final).css('color', 'red');

});

//1 Userの出す手の選択（パー）
$("#par_btn").on("click", function(){
//2_1 COMの手を選択するための乱数（1~3）
      const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""
     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
     }
     if(r === 2) {
     view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
     }
   
//3 勝ち負けの判断処理
     let result =""
      if(r === 1) {
         result = "やったね！うふふふふ"; counter = counter + 1
     } else if (r === 2){
         result = "残念・・・来週も見てくださいね"; com_counter = com_counter + 1
     } else if (r === 3){
         result = "あいこ！もう１回"
     }
//4 結果表示
      $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
$("#win").html(counter);
$("#lose").html(com_counter);

//6 Counter変数を使って先に3勝した方を判定
let final = ""
if(counter === 3){
    final = "あなたの勝ち！！"; counter = 0; com_counter = 0;
}
if(com_counter === 3){
    final = "サザエさんの勝ち！！"; counter = 0; com_counter = 0;
} 

$("#final_judgement").html(final).css('color', 'red');

 });
