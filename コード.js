function initSheet () {
  //現在アクティブなシートを取得
  let sheet = SpreadsheetApp.getActiveSheet();
  let names = ['syrah', 'cabernet', 'zinfandel'];
  let i;
  let startTime = new Date();
  //　現在時刻を取得。

  let scores = [];  
  sheet.clear();
  //シート上のデータをクリア

  //258ms
  // 多次元配列 [[syrah, 1], [zin, 30] ...]
  for (i = 1; i <= 10; i++) {
    scores.push([
      names[Math.floor(Math.random() * names.length)],
      Math.floor(Math.random() * 101)
    ]);
  }

  sheet.getRange(1,1, 10, 2).setValues(scores);
  Logger.log(new Date() - startTime);
}


function showResults () {
  let sheet = SpreadsheetApp.getActiveSheet();
  let scores = [];
  let results = [];

  scores = sheet.getRange(1,2, sheet.getLastRow(), 1).getValues();
  
  for (let i = 0; i < scores.length; i ++) {
    results.push([scores[i] >= 80 ? 'pass' : 'fail']);
  }
  // 一行目の三列目のポジションから、、、
  sheet.getRange(1,3, results.length, 1).setValues(results);
}


  // 7118ms
//   for (i = 1; i <= 1000; i++) {
//     sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
//     sheet.getRange(i, 2).setValue(Math.floor(Math.floor(Math.random() * 101)));
//   }


// function initSheet () {
//   let sheet = SpreadsheetApp.getActiveSheet();
//   //現在アクティブなシートを取得
//   sheet.clear();
//   //シート上のデータをクリア

//   sheet.getRange(1, 1).setValue('daisuke');
//   sheet.getRange(1, 2).setValue(82).setBackground('tomato');
// }

// const GETRESULT = (input) => {
//   if (input.map) {
//     return input.map(GETRESULT);
//   } else {
//   return input >= 80 ? 'pass' : 'fail';
//   // 条件演算子（if文のショートカット）
//   }
//   // if (input >= 80) {
//   //   return 'pass';
//   // } else {
//   //   return 'fail';
//   // }
// }