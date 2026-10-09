export interface EventItem {
  day: number;
  date: string;
  title: string;
  theme: string;
  venue?: string;
  img: string;
  regLink?: string;
  details: string;
}

export interface CoordinatorContact {
  name: string;
  phone?: string;
  role?: string;
}

export interface EventCoordinatorGroup {
  event: string;
  contacts: CoordinatorContact[];
}

export interface Leadership {
  conveners: string;
  convenersTitle: string;
  chiefConvener: string;
  chiefConvenerTitle: string;
  principal: string;
  principalTitle: string;
}