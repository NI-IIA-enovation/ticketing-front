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
      icon: 'fa-home',
      name: 'dashboard',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: 'fa-building',
      name: 'goods',
      target: 'work',
      action: 'set',
      component: '/list-good'
    }, {
      position: 2,
      icon: 'fa-card',
      name: 'contacts',
      target: 'work',
      action: 'set',
      component: '/list-contact'
    }, {
      position: 3,
      icon: 'fa-calendar',
      name: 'agenda',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 4,
      icon: 'fa-shoppingbasket',
      name: 'marketplace',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 5,
      icon: 'fa-cog',
      name: 'settings',
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
      component: '#'
    }, {
      position: 1,
      icon: 'fa-building',
      name: 'Biens',
      target: 'work',
      action: 'set',
      component: 'GoodsCompoment'
    }, {
      position: 2,
      icon: 'fa-card',
      name: 'Contacts',
      target: 'work',
      action: 'set',
      component: '#'
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
      icon: 'fa-home',
      name: 'dashboard',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 1,
      icon: 'fa-building',
      name: 'goods',
      target: 'work',
      action: 'set',
      component: 'list-good'
    }, {
      position: 2,
      icon: 'fa-card',
      name: 'contacts',
      target: 'work',
      action: 'set',
      component: 'list-contact'
    }, {
      position: 3,
      icon: 'fa-calendar',
      name: 'agenda',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 4,
      icon: 'fa-shoppingbasket',
      name: 'marketplace',
      target: 'work',
      action: 'set',
      component: '#'
    }, {
      position: 5,
      icon: 'fa-cog',
      name: 'settings',
      target: 'work',
      action: 'set',
      component: '#'
      // tslint:disable-next-line: eofline
    }]
  }];