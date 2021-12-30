import { useEffect, useState } from "react";

export const useNewsSearch = (query, pageNumber) => {
  useEffect(() => {
    const fetchMyAPI = async () => {
      let res = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_29318cd2d47bff58927cc06650faa7501bdd&language=en&category=business&page=${pageNumber}`
      );
      res = await res.json();
      console.log(res);
    };
    fetchMyAPI();
  }, [query, pageNumber]);

  return null;
};
