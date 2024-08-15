import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmJkYjcwNmQ5YzQ5YmE2M2MxODhhNWUzMTE0MzA4MCIsIm5iZiI6MTcyMzYwNTA3Ny41NDkwOSwic3ViIjoiNjZiOTkyMGI0NzE5M2MyOTMwYTkxMjA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OqtQoekL7GV3Bea6vOlZ9Es0oyyHWTfB9DBbUfk_Akw";
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
