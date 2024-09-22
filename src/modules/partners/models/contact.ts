export interface Phone {
  number: string;
  note?: string;
}

export interface Email {
  email: string;
  note?: string;
}

export interface Contact {
  name: string;
  phones: Phone[];
  emails: Email[];
  note?: string;
}
