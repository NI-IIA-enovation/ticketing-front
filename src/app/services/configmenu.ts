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
name: 'top',
responsive: 'xs',
listmenu: [{
            position: 0,
            icon: 'home',
            name: 'Biens',
            target: 'work',
            action: 'set',
            component: 'GoodsCompoment'
           }]}, 
{
name: 'star',
responsive: 'xl',
listmenu: [{
            position: 0,
            icon: 'home',
            name: 'Biens',
            target: 'work',
            action: 'set',
            component: 'GoodsCompoment'
        }]}]