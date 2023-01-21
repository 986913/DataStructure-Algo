/**
 * @param {number[]} bills
 * @return {boolean}
 */

/*
  只需要维护三种金额的数量，5，10和20。有如下三种情况：
    情况一：账单是5，直接收下。
    情况二：账单是10，消耗一个5，增加一个10
    情况三：账单是20，优先消耗一个10和一个5，如果不够，再消耗三个5
*/

var lemonadeChange = function (bills) {
  let $5Count = 0;
  let $10Count = 0;

  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];

    //情况一
    if (bill === 5) {
      $5Count += 1;
    } else if (bill === 10) {
      //情况二;
      if ($5Count > 0) {
        $5Count -= 1;
        $10Count += 1;
      } else return false;
    } else {
      //情况三: bill === 20
      if ($10Count > 0 && $5Count > 0) {
        $10Count -= 1;
        $5Count -= 1;
      } else if ($5Count >= 3) {
        $5Count -= 3;
      } else return false;
    }
  }

  return true;
};
