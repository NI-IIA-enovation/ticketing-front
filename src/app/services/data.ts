export class PeriodicElement {
    name: string;
    info: string;
    user: string;
    notif: number;
    visite: number;
    deadline: string;
    priority: string;
    status: string;
    actions: number;
  }
export const styleControls = `
.controls{
  display: table;
  clear: both;
  width: 100%;
  margin:5px;

}
.control:nth-of-type(n+1){
  width:30%;
  float: left;
  margin-right:10px;
  max-height: 56px;
 }
 .control:nth-of-type(n+2){ 
  float: left;
  width:10%;
  margin-right:50px;
  margin-top: 10px;
 }
.ds-example-container {
  border: none !important;;
}
 .grid-container {
   margin: -0.01rem !important;
 
}
.control:nth-of-type(n+1){
 width:30%;
 float: left;
 margin-right:10px;
 max-height: 56px;
}
.control:nth-of-type(n+2){ 
 float: left;
 width:10%;
 margin-right:50px;
 margin-top: 10px;
}
.mat-stroked-button{
  border-radius: 27px;
  border: 1px solid #7892f6 !important;
}

.control mat-icon{
color: #AAA !important;
}

.control button.mat-stroked-button mat-icon{
color: #7892f6 !important;
}

.ds-section{
  margin-top:10px !important;
}



.mat-column-actions {
  text-align: right;
}
.hr-div{
max-width: 150px;
font-size: 11px;
text-transform: uppercase;
font-weight: bold;
font-family: system-ui;

}
.mat-stroked-button{
  border-radius: 27px;
  border: 1px solid #7892f6 !important;
}
`;
export const ResponsiveControls = `
.mat-stroked-button{
  border-radius: 27px;
  border: 1px solid #7892f6 !important;
  padding-left: 6px;
}
.control:nth-of-type(n+1){
  float: left;
  width:100%;
}
.control:nth-of-type(n+2){
  float: left;
  width: 33.33%;
  margin-top: 5px;
}
.control:nth-of-type(n+3){
  display: none !important;

}
.control:nth-of-type(n+4){
  display: inline-block !important;
  width: 33.33%;
  margin-top: 5px;
}
.control .mat-focus-indicator{
  font-size: 10px !important;
  width: 100% !important;

  font-family: system-ui !important;
}
.mat-badge-content{
  background-color: #fcb73d !important;
}
/* Clear floats after the columns */
.controls{
  display: table;
  clear: both;
  width: 100%;
  margin-bottom: 20px;

}`;
export const styleTable = `.ds-example-container {
  border: none !important;;
}
 .grid-container {
   margin: -0.01rem !important;
 
}

.mat-badge-content{
 background-color: #fcb73d !important;
}
.mat-cell{
 padding-right:10px !important;
}
/* Clear floats after the columns */
.controls{
 display: table;
 clear: both;
 width: 100%;
 margin:5px;

}
table{
  width:100%;
}
`;
export const styleResponsive = `
.mat-header-row {
    display: none;
    flex-wrap: wrap;
    height: auto;
    position: sticky;
    top: 0;
    z-index: 2;
  }
    th.mat-header-cell {
      display: none;
      flex: 1;
      align-items: center;
      padding: 1rem 0.5rem;
      justify-content: space-around;

    }


  .mat-row {
    height: auto;
    border-top: 1px solid rgb(187, 184, 184);}
    td.mat-cell:not(.mat-column-actions) {
      display: grid;
     // grid-template-columns: 50% 50%;
      padding: 0.5rem;
      text-align: left;
      word-break: break-word;
      border: none !important;
    }
    td:nth-of-type(n+1){
      display: inline-block !important;
      width:100%;
    }
    td:nth-of-type(n+2){
    display: inline-block !important;
      width: 20%;
    }
    td:nth-of-type(n+5){
     display: none !important;
    }
    td:nth-of-type(n+6){
      display: none !important;
}
    .div-status2{
      font-size: 12px;
      border: 1px solid #ccc !important;
      line-height: 24px !important;
      text-align: center !important;
      border-radius: 5px !important;
      padding-left: 7px;
    }
   .div-status2 mat-icon{
      display: none !important;
    }
    td:nth-of-type(n+7){
      display: inline-block !important;
      width: 40% !important;
    }
    td.mat-column-actions {
      display: none !important;
      justify-content: center !important;
      padding: 0 0.5rem;
      width:100% !important;
      border-bottom: 1px solid #777 !important;
    }

    &:last-of-type td:last-of-type {
      border: none;
    }

    &:not(:last-of-type) td:last-of-type {
      border-bottom: 0.5rem solid #fafafa;
    }`;


export const data = 
[{name: 'Maison bleue - Overijse', info:'4 chambres -2 salles de bain - 75m',user :'Alex',notif: 5, visite:19, deadline: '20 SEPT-10 OCT.', priority: 'org', status: 'Visite en cours', actions: 4},
{name: 'Maison bleue - Wavre', info: '2 chambres -2 salles de bain - 90m',user : 'Alex', notif: 11, visite:6, deadline: '01 OCT-11 NOV.', priority: 'info', status: 'Visite en cours', actions: 18},
{name: 'Maison bleue - Terveren', info: '1 chambres -4 salles de bain - 80m',user : 'Alex', notif: 8, visite:18, deadline: '09 DEC-02 JAN.', priority: 'biz', status: 'Visite en cours', actions: 16},
{name: 'Maison bleue - Bruxelle', info: '2 chambres -3 salles de bain - 75m',user : 'Alex', notif: 13, visite:4, deadline: '10 DEC-07 JAN.', priority: 'name', status: 'Visite en cours', actions: 14},
{name: 'Maison bleue - Overijse', info: '1 chambres -2 salles de bain - 50m',user : 'Alex', notif: 15, visite:18, deadline: '9/5/2020', priority: 'net', status: 'Visite en cours', actions: 8},
{name: 'Stronghold', info: 'Norfolk',user : 'Alex', notif: 14, visite:12, deadline: '4/5/2020', priority: 'mil', status: 'Virginia', actions: 2},
{name: 'Aerified', info: 'Charleston',user : 'Alex', notif: 11, visite:7, deadline: '7/19/2020', priority: 'gov', status: 'South Carolina', actions: 4},
{name: 'Daltfresh', info: 'Denver',user : 'Alex', notif: 14, visite:17, deadline: '5/7/2020', priority: 'info', status: 'Colorado', actions: 8},
{name: 'Daltfresh', info: 'Springfield',user : 'Alex', notif: 5, visite:13, deadline: '9/6/2020', priority: 'info', status: 'Missouri', actions: 17},
{name: 'Home Ing', info: 'El Paso',user : 'Alex', notif: 7, visite:10, deadline: '3/28/2020', priority: 'gov', status: 'Texas', actions: 13},
{name: 'Quo Lux', info: 'Lexington',user : 'Alex', notif: 15, visite:3, deadline: '3/25/2020', priority: 'info', status: 'Kentucky', actions: 20},
{name: 'Zamit', info: 'Katy',user : 'Alex', notif:20, visite: 9, deadline: '2/24/2020', priority: 'net', status: 'Texas', actions: 11},
{name: 'Prodder', info: 'Charlotte',user : 'Alex', notif:20, visite:14, deadline: '2/6/2020', priority: 'edu', status: 'North Carolina', actions: 12},
{name: 'Sub-Ex', info: 'Washington',user : 'Alex', notif: 17, visite:5, deadline: '5/21/2020', priority: 'info', status: 'District of Columbia', actions: 18},
{name: 'Fixflex', info: 'Charlottesville',user : 'Alex', notif:4, visite:5, deadline: '6/15/2020', priority: 'biz', status: 'Virginia', actions:12}]