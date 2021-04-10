import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([val, value]) {

  return `${val}.00 ${value}`;
});
