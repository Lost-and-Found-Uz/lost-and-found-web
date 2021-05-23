export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://192.168.1.188:4000"
    : "https://laf-web.herokuapp.com";

export const cases = ["All", "Lost", "Found"];
