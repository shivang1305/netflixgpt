export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const HOME_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_LOGO_IMG =
  "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const GITHUB_USER_IMG =
  "https://avatars.githubusercontent.com/u/45060274?v=4";

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const GET_VIDEOS_API = (movieID) => {
  return `https://api.themoviedb.org/3/movie/${movieID}/videos`;
};

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQzMDhmODhjMjlmZTFhN2FmMGIyYjY4ZGIyYmYwOSIsInN1YiI6IjY0NDQyMGY4Y2VlMmY2NjdlNzM2Y2Q2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWetREBgf0hiSLaBTaDGD_yePkkKYGBcDt7mjGWs618",
  },
};
