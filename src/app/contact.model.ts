export interface Contact {
    id: number;
    name: string;
    phone: string;
  }
  
  export interface AppState {
    contacts: Contact[];
  }