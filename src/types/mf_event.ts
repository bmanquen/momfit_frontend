type MF_Event = {
  id: number;
  image?: string;
  title: string;
  summary: string;
  description?: string;
  start_date?: Date;
  end_date?: Date;
  street_address?: string;
  city?: string;
  state?: string;
  zipcode?: number;
  cost?: number;
  url?: string;
  childcare?: Childcare;
};
