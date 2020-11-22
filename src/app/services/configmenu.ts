export class Configmenu{
    name: string;
    responsive: string;
    listmenu: Listmenu;
constructor(){
this.listmenu = new Listmenu();
}
  }
export class Listmenu{
    position: number;
    icon: string;
    name: string;
    target: string;
    action: string;
    component: string;

  }
export const dataconfig =
[{
name: 'footer',
responsive: 'xs',
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
          }]},
          {
            name: 'header',
            responsive: 'xs',
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
                      }]},
{
name: 'star',
responsive: 'xl',
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
            }]}]