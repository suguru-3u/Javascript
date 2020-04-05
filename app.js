var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

a(user_hand);

if(c == 1){
  var user_hand = prompt('もう一度じゃんけんの手をグー、チョキ、パーから選んでください。');
}
if(user_hand == null){
  alert("またチャレンジしてね");
}

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null){
 alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}

function a(b){
  if(b != 'グー' || b != 'チョキ' || b != 'パー' );
    alert("グー・チョキ・パーのいずれかを入力してください");
    c = 1
    return c
  }



// 関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

// 関数２
function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}
