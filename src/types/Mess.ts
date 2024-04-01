export default interface Mess {
  id?: number;
  name: string;
  landmark: string;
  timings: MessTimings;
  rating: number;
  menu?: MessMenu;
  location: {
    latitude: number;
    longitude: number;
  };
  image: string;
}

export interface MessTimings {
  breakfast: {
    start: string;
    end: string;
  };
  lunch: {
    start: string;
    end: string;
  };
  snacks: {
    start: string;
    end: string;
  };
  dinner: {
    start: string;
    end: string;
  };
}

export interface MessMenu {
  id: number;
  month: number;
  year: number;

  monday: MessMenuItems;
  tuesday: MessMenuItems;
  wednesday: MessMenuItems;
  thursday: MessMenuItems;
  friday: MessMenuItems;
  saturday: MessMenuItems;
  sunday: MessMenuItems;
}

export interface MessMenuItems {
  [index: string]: MessMenuItem[];
  breakfast: MessMenuItem[];
  lunch: MessMenuItem[];
  snacks: MessMenuItem[];
  dinner: MessMenuItem[];
}

export interface MessMenuItem {
  id: number;
  name: string;
  description: string;
  rating: number;
  cal: number;
  // image: string;
}
