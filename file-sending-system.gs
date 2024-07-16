function main() {
  //スプレッドシート系
  //シートの取得
  var sheet_id = prop.sheet_id
  var sheet_name = "フォームの回答１";
  var spreadsheet = SpreadsheetApp.openById(sheet_id);
  var sheet = spreadsheet.getSheetByName(sheet_name);
}
