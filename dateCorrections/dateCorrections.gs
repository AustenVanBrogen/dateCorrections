function editCells() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const fileID = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues().flat();
  const spreadsheetData = sheet.getRange(2, 12, sheet.getLastRow(), 1).getValues();
  const targetValues = sheet.getRange(2, 12, sheet.getLastRow(), 1);
  let curValue;

  for(i=0; i < fileID.length-1; i++)
  {
     curValue = spreadsheetData[i][0];    
     if(curValue.getMonth() == 4)
    {
      curValue.setMonth(7);
    }
  }
  targetValues.setValues(spreadsheetData);
}