import { helper } from '@ember/component/helper';

export function plural([count]) {
  switch (count) {
    case 0:
      return 'Pas de service selectionné';
    case 1:
      return '1 service selectionné';
  }
  return `${count} services sont selectionnés`;
}
export default helper(plural);
