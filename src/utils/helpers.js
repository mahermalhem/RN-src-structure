const isNullOrEmpty = text => {
  if (text === null || text === undefined) {
    return true;
  } else {
    text = text.toString();
    return !text || text.toString().replace(/\s/g, '').length === 0;
  }
};

export {isNullOrEmpty};

export const BANNER_H = 350;
export const TOPNAVI_H = 50;


export function prepareBankList(lang,banksList) {
  var temp = [];
  banksList.forEach(element => {
    temp.push({
      label:
        lang == 'ar' ? element.bank_name_ar : element.bank_name_en,
      value: element.bank_id,
    });
  });
  return temp;
}

export function preparePurposesList(purposesList) {
  var temp = [];
  // for (const key in purposesList) {
  //   temp.push({
  //     label:
  //       purposesList[key],
  //     value: key,
  //   });
  //   //console.log(`${key}: ${purposesList[key]}`);
  // }
  for (let key in purposesList) {
    temp.push({
      label:purposesList[key],
      value: key,
    });
    console.log(key, purposesList[key]);
  }
  console.log(temp)
  return temp;
}
