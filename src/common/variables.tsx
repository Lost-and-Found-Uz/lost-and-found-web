export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://laf-web.herokuapp.com"
    : "https://laf-web.herokuapp.com";

export const cases = ["All", "Lost", "Found"];
