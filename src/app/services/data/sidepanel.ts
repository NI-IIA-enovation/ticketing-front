export class Sidepanel{
    name: string;
    title: string;
    description: string;
    List: List[];
  }
export class List{
    date: string;
    name: string;
    letter: string;
    description: string;
    color: string;
    target: string;
    action: string;
    icon: string;

  }
export const dataconfig: Sidepanel[] =
[{
name: 'AppointmentComponent',
title: 'Mes evenements actual',
description: '14 Novembre',
            List: [{
            date: '10:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'orange',
            description: 'Mar vs tun',
            target: 'work',
            action: 'set',
          }, {
            date: '10:00 12:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'green',
            description: 'Mar vs Bel',
            target: 'work',
            action: 'set',
          }, {
            date: '16:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'blue',
            description: 'Mar vs FRA',
            target: 'work',
            action: 'set',
          }, {
            date: '17:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'cyan',
            description: 'Mar vs Tun',
            target: 'work',
            action: 'set',
          }]},
          {
            name: 'ActivityLogComponent',
            title: 'Journal d activité',
            description: '',
                        List: [{
                        date: '15 AOUT 2020',
                        icon: 'fa-calendar',
                        name: 'Mr Dupond',
                        letter: 'AC',
                        color: '',
                        description: 'Visite programmé avec',
                        target: 'work',
                        action: 'set',
                      }, {
                        date: '15 AOUT 2020',
                        icon: 'fa-calendar',
                        name: 'Mr Luvink',
                        letter: 'DC',
                        color: '',
                        description: 'Visite programmé avec',
                        target: 'work',
                        action: 'set',
                      }, {
                        date: '15 AOUT 2020',
                        icon: 'fa-envelope',
                        name: 'Jerome D.',
                        letter: 'AB',
                        color: '',
                        description: 'a envoyé un mail à',
                        target: 'work',
                        action: 'set',
                      }, {
                        date: '15 AOUT 2020',
                        icon: 'fa-calendar',
                        name: 'Mr Luvink',
                        letter: 'NS',
                        color: '',
                        description: 'Visite programmé avec',
                        target: 'work',
                        action: 'set',
                      // tslint:disable-next-line: eofline
                      }]}];