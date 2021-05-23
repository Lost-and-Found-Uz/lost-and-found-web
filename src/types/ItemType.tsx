export type Item = {
  _id: string;
  date: Date;
  description: String[];
  region: String;
  title: String;
  user: {
    email: string;
    fullName: string;
    password: string;
    phone: string;
    _id: string;
  };
};

export type ItemListType = {
  next: {
    limit: Number;
    page: Number;
  };
  result: Item[];
};

export type SnackType = "success" | "warning" | "error";
