import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  model() {
    return this.store.createRecord('contact', {
      nom: 'Mimiiii',
    });
  }

  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => this.transitionTo('test-list'));
  }
}
