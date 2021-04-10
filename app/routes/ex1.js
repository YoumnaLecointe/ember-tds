import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import Services from 'tds/classes/Services';
import { action, set } from '@ember/object';

export default class Ex1Route extends Route {
  model() {
    return new Services(datas);
  }
  @action toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
