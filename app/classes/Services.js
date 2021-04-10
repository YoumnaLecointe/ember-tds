import { tracked } from '@glimmer/tracking';

export default class Services {
  services = [];
  promo = [];
  @tracked code = '';

  constructor(serv, promos) {
    this.services = serv;
    this.promo = promos;
  }

  get countActive() {
    console.log(
      'Service actif : ' + this.services.filterBy('active', true).length
    );
    return this.services.filterBy('active', true).length;
  }

  get sumActive() {
    var resultat = 0;
    this.services.filterBy('active', true).forEach(function (service) {
      resultat += service.price;
    });
    return resultat;
  }

  get promoValue() {
    let check = document.getElementById('promoCheck');
    let remise = document.getElementById('remise');
    if (check.checked) {
      remise.innerHTML = 'Code promo invalide';
      if (this.code in this.promo) {
        remise.innerHTML = 'Promo:' + this.promo[this.code] * this.sumActive + ' $';
        return this.promo[this.code] * this.sumActive;
      }
    }
    return 0;
  }
  get remise() {
    return this.sumActive * this.promoValue;
  }
}
