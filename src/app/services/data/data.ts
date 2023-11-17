export class event {
    id: number;
    manifistations: string;
    date_Heure: string;
    group: string;
    saison: string;
    emplacement: string;
    status: string;
    public constructor(init?: Partial<event>) {
      Object.assign(this, init);
  }
  }
  export class tarif {
    id: number;
    tarif: string;
    date_Heure: string;
    status: string;
    public constructor(init?: Partial<event>) {
      Object.assign(this, init);
  }
  }
export class Action{
name: string;
target: string;
icon: string;
}
export const actiondata: Array<Action> = [
   {
      name: 'edit',
      target: 'Edit',
      icon: 'fa-pencil'
   },
   {
      name: 'view',
      target: 'View',
      icon: 'fa-eye'
   }
];
export const dataTarif: Array<tarif> =
[{
  id: 1,
  tarif: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  status: 'En cours',
},
{
  id: 2,
  tarif: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  status: 'En cours',
},
{
  id: 3,
  tarif: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  status: 'En cours',
},
{
  id: 4,
  tarif: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  status: 'En cours',
},
{
  id: 5,
  tarif: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  status: 'En cours',
}
// tslint:disable-next-line: eofline
];
export const data: Array<event> =
[{
  id: 1,
  manifistations: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  group: 'Amical',
  saison: '2023/2024',
  emplacement: 'Stade Agadir',
  status: 'En cours',
},
{
  id: 2,
  manifistations: 'Marrakech de rire ',
  date_Heure: '31/03/24 23:00',
  group: 'Commedy',
  saison: '2023/2024',
  emplacement: 'Marrakech',
  status: 'Visible',
},
{
  id: 3,
  manifistations: 'show man talis',
  date_Heure: '31/03/24 11:00',
  group: 'Show',
  saison: '2023/2024',
  emplacement: 'Casablanca mega',
  status: 'En cours',
},
{
  id: 4,
  manifistations: 'Wac vs RCA',
  date_Heure: '31/03/24 10:00',
  group: 'Qualification can 2025',
  saison: '2023/2024',
  emplacement: 'Mohammedia stade',
  status: 'Visible',
},
{
  id: 5,
  manifistations: 'Mar vs Tun',
  date_Heure: '31/03/24 20:00',
  group: 'Qualification can 2025',
  saison: '2023/2024',
  emplacement: 'Stade Agadir',
  status: 'Visible',
},
{
  id: 6,
  manifistations: 'Mar vs RDC',
  date_Heure: '31/03/24 20:00',
  group: 'Qualification can 2025',
  saison: '2023/2024',
  emplacement: 'Stade Agadir',
  status: 'Non visible',
},
// tslint:disable-next-line: eofline
];