function main() {
  //スプレッドシート系
  //シートの取得
  var sheet_id = prop.sheet_id
  var sheet_name = "フォームの回答１";
  var spreadsheet = SpreadsheetApp.openById(sheet_id);
  var sheet = spreadsheet.getSheetByName(sheet_name);

  // メールタイトル設定
  var MailTitle = "hogehoge";

  // スプレッドシートの最終行まで取得。よく使う
  var lastRow = ss.getLastRow();

  // 繰り返し処理を実施
  for(var i=2; i<=lastRow; i++){
    if (ss.getRange(i, 3).getValue() == "送信対象"){
      var rangeA = ss.getRange('A' + i).getValue(); //送信対象のA列を最終行まで取得していく。それを ' rangeA ' という変数に格納
      var rangeB = ss.getRange('B' + i).getValue(); //送信対象のB列を最終行まで取得していく。それを ' rangeB ' という変数に格納

      // メール本文を変数で定義。rangeBの変数は送信時の宛名を入れておく
      // todayは送信時の日付と時間を表現させる
      var MailText = rangeB+"さん"+"\n\nお疲れ様です。\n本日"+today+"時点でのメールを送ります。\n";
    }


    GmailApp.sendEmail(rangeA,
                       MailTitle,
                       MailText)
  }
}
