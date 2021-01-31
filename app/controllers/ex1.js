import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';

  MAX = 100;

  get size() {
    return this.MAX - this.content.length;
  }

  // eslint-disable-next-line getter-return
  get style() {
    if (this.size > 50) {
      return 'alert-warning';
    } else if (this.size > 20) {
      return 'alert-danger';
    } else {
      return 'alert-dark';
    }
  }

  @action clear() {
    this.content = '';
  }
}
