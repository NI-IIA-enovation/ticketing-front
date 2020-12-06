export class PeriodicElement {
    id: number;
    name: string;
    city: string;
    room: string;
    bathroom: string;
    area: string;
    info: string;
    user: string;
    notif: number;
    visite: number;
    deadline: string;
    priority: string;
    status: string;
    action: Action[];
  }
export class Action{
name: string;
component: string;
icon: string;
}

export const data =
[{
  id: 1,
  name: 'Maison bleue 1',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: '4 chambres -2 salles de bain - 75m',
  user: 'Alex',
  notif: 5,
 visite: 19,
  deadline: '20 SEPT-10 OCT.',
  priority: 'Elevée',
  status: 'Visite en cours',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 2,
  name: 'Maison bleue 2',
  city: 'Wavre',
  room: '1 chambres',
  bathroom: '2 salles de bain',
  area: '120m',
  info: '2 chambres -2 salles de bain - 90m',
  user: 'Alex',
  notif: 11,
 visite: 6,
  deadline: '01 OCT-11 NOV.',
  priority: 'Normal',
  status: 'Recherche',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 3,
  name: 'Maison bleue 3',
  city: 'Terveren',
  room: '3 chambres',
  bathroom: '2 salles de bain',
  area: '122m',
  info: '1 chambres -4 salles de bain - 80m',
  user: 'Alex',
  notif: 8,
 visite: 18,
  deadline: '09 DEC-02 JAN.',
  priority: 'Elevée',
  status: 'En vente',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 4,
  name: 'Maison bleue 4',
  city: 'Bruxelle',
  room: '4 chambres',
  bathroom: '1 salles de bain',
  area: '100m',
  info: '2 chambres -3 salles de bain - 75m',
  user: 'Alex',
  notif: 13,
 visite: 4,
  deadline: '10 DEC-07 JAN.',
  priority: 'Normal',
  status: 'Visite en cours',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 5,
  name: 'Maison bleue 5',
  city: 'Overijse',
  room: '1 chambres',
  bathroom: '2 salles de bain',
  area: '110m',
  info: '1 chambres -2 salles de bain - 50m',
  user: 'Alex',
  notif: 15,
 visite: 18,
  deadline: '9/5/2020',
  priority: 'Elevée',
  status: 'Visite en cours',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 6,
  name: 'Maison Stronghold 6',
  city: 'Overijse',
  room: '6 chambres',
  bathroom: '2 salles de bain',
  area: '90m',
  info: 'Norfolk',
  user: 'Alex',
  notif: 14,
 visite: 12,
  deadline: '4/5/2020',
  priority: 'Elevée',
  status: 'Recherche',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 7,
  name: 'Maison Aerified',
  city: 'Overijse',
  room: '1 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Charleston',
  user: 'Alex',
  notif: 11,
 visite: 7,
  deadline: '7/19/2020',
  priority: 'Elevée',
  status: 'Recherche',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 8,
  name: 'Maison Daltfresh',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Denver',
  user: 'Alex',
  notif: 14,
 visite: 17,
  deadline: '5/7/2020',
  priority: 'Elevée',
  status: 'Recherche',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 9,
  name: 'Maison Daltfresh',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Springfield',
  user: 'Alex',
  notif: 5,
 visite: 13,
  deadline: '9/6/2020',
  priority: 'info',
  status: 'Missouri',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 10,
  name: 'Maison Home Ing',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'El Paso',
  user: 'Alex',
  notif: 7,
 visite: 10,
  deadline: '3/28/2020',
  priority: 'gov',
  status: 'Texas',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 11,
  name: 'Maison Quo Lux',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Lexington',
  user: 'Alex',
  notif: 15,
 visite: 3,
  deadline: '3/25/2020',
  priority: 'info',
  status: 'Kentucky',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 12,
  name: 'Maison Zamit',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Katy',
  user: 'Alex',
  notif: 20,
 visite: 9,
  deadline: '2/24/2020',
  priority: 'net',
  status: 'Texas',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 13,
  name: 'Maison Prodder',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Charlotte',
  user: 'Alex',
  notif: 20,
 visite: 14,
  deadline: '2/6/2020',
  priority: 'edu',
  status: 'North Carolina',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 14,
  name: 'Maison Sub-Ex',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Washington',
  user: 'Alex',
  notif: 17,
 visite: 5,
  deadline: '5/21/2020',
  priority: 'info',
  status: 'District of Columbia',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
},
{
  id: 15,
  name: 'Maison Fixflex',
  city: 'Overijse',
  room: '2 chambres',
  bathroom: '2 salles de bain',
  area: '75m',
  info: 'Charlottesville',
  user: 'Alex',
  notif: 4,
 visite: 5,
  deadline: '6/15/2020',
  priority: 'biz',
  status: 'Virginia',
  action: [
     {
        name: 'edit',
        component: 'GoodEdit',
        icon: 'fa-pencil'
     },
     {
        name: 'view',
        component: 'Goodview',
        icon: 'fa-eye'
     }
  ]
}
]