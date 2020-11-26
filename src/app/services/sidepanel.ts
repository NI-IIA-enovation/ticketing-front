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
name: 'appointment',
title: 'Mes rendez-vous',
description: '14 Novembre',
            List: [{
            date: '10:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'orange',
            description: 'Maison Auderghem',
            target: 'work',
            action: 'set',
          }, {
            date: '10:00 12:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'green',
            description: 'Maison Ouverjise',
            target: 'work',
            action: 'set',
          }, {
            date: '16:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'blue',
            description: 'Maison Ouverjise',
            target: 'work',
            action: 'set',
          }, {
            date: '17:00',
            icon: '',
            name: 'Jerome D.',
            letter: '',
            color: 'cyan',
            description: 'Maison Ouverjise',
            target: 'work',
            action: 'set',
          }]},
          {
            name: 'activity-log',
            title: "Journal d'activité",
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
                      }]} ]