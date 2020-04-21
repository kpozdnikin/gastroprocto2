// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface PathStyleInterface {
  stroke: string;
  fill: string;
}

export interface ZoneInterface {
  id: number;
  title: string;
  subTitle: string;
  zones: Array<number>;
}

export interface ZoneDiseases {
    id: number;
    title: string;
    zones: Array<number>;
}
