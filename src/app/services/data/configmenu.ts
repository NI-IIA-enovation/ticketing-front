export class Configmenu {
  name: string;
  responsive: Array<string>;
  listmenu: Listmenu[];
}
export class Listmenu {
  position: number;
  icon: string;
  name: string;
  target: string;
  action: string;
  component: string;

}
export const dataconfig: Configmenu[] =
  [{
    name: 'footer',
    responsive: ['xs', 'sm', 'md'],
    listmenu: [{
      position: 0,
      icon: 'fa-add',
      name: 'Evénements',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: 'fa-add',
      name: 'Tarifs',
      target: 'work',
      action: 'set',
      component: '/list-event'
    }, {
      position: 2,
      icon: 'fa-add',
      name: 'Ventes',
      target: 'work',
      action: 'set',
      component: '/list-contact'
    }, {
      position: 3,
      icon: 'fa-add',
      name: 'Plan physique',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 4,
      icon: 'fa-add',
      name: 'Maquettes',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 6,
      icon: 'fa-add',
      name: 'Utilisateurs',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 7,
      icon: 'fa-add',
      name: 'Rapports',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 8,
      icon: 'fa-add',
      name: 'Paramètres',
      target: 'work',
      action: 'set',
      component: '#'
    }]
  }, {
    name: 'user',
    responsive: ['lg', 'xl'],
    listmenu: [{
      position: 0,
      icon: 'fa-user',
      name: 'Espace client',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: 'fa-cog',
      name: 'Mon profil',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 2,
      icon: 'fa-off',
      name: 'Déconnecter',
      target: 'logout',
      action: 'set',
      component: '#'
    }]
  }, {
    name: 'language',
    responsive: ['lg', 'xl'],
    listmenu: [{
      position: 0,
      icon: '',
      name: 'FR',
      target: 'fr',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: '',
      name: 'NL',
      target: 'nl',
      action: 'set',
      component: '#'
    }, {
      position: 2,
      icon: '',
      name: 'EN',
      target: 'en',
      action: 'set',
      component: '#'
    }, {
      position: 3,
      icon: '',
      name: 'DE',
      target: 'de',
      action: 'set',
      component: '#'
    }]
  },
  {
    name: 'header',
    responsive: ['xs', 'sm', 'md'],
    listmenu: [{
      position: 0,
      icon: 'fa-home',
      name: 'Dashboard',
      target: 'work',
      action: 'set',
      component: ''
    }, {
      position: 1,
      icon: 'fa-building',
      name: 'Biens',
      target: 'work',
      action: 'set',
      component: 'list-event'
    }, {
      position: 2,
      icon: 'fa-card',
      name: 'Contacts',
      target: 'work',
      action: 'set',
      component: 'list-contact'
    }, {
      position: 3,
      icon: 'fa-calendar',
      name: 'Agenda',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 4,
      icon: 'fa-shoppingbasket',
      name: 'Marketplace',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 5,
      icon: 'fa-cog',
      name: 'Settings',
      target: 'work',
      action: 'set',
      component: '#'
    }]
  },
  {
    name: 'star',
    responsive: ['lg', 'xl'],
    listmenu: [{
      position: 0,
      icon: 'fa-add',
      name: 'events.name',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: 'fa-add',
      name: 'tarifs.name',
      target: 'work',
      action: 'set',
      component: 'list-event'
    }, {
      position: 2,
      icon: 'fa-add',
      name: 'ventes.name',
      target: 'work',
      action: 'set',
      component: 'list-contact'
    }, {
      position: 3,
      icon: 'fa-add',
      name: 'maquettes.name',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 4,
      icon: 'fa-add',
      name: 'users.name',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 5,
      icon: 'fa-add',
      name: 'repports.name',
      target: 'work',
      action: 'set',
      component: '#'
      // tslint:disable-next-line: eofline
    }, {
      position: 6,
      icon: 'fa-add',
      name: 'parameter.name',
      target: 'work',
      action: 'set',
      component: '#'
      // tslint:disable-next-line: eofline
    }]
  }];