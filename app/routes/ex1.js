import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import Services from 'tds/classes/Services';

export default class Ex1Route extends Route {
  model() {
    return new Services(datas);
  }
}
