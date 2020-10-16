const cacheName = "cache-v1";
const precacheResources = [
  "/",
  "index.html",
  "assets/css/style.css",
  "assets/css/materializecss.min.css",
  "assets/css/slick-theme.css",
  "assets/css/slick.css",
  "assets/img/TeamTigers_2.webp",
  "assets/img/teamtigers.jpg",
  "assets/img/svg/banner.svg",
  "assets/img/svg/teams-pana.svg",
  "assets/img/projects/coronainfobd.webp",
  "assets/img/projects/Routine_Explorer.webp",
  "assets/img/projects/cuntato.webp",
  "assets/img/projects/Minisauras.webp",
  "assets/img/projects/reTone.webp",
  "assets/img/projects/NoResume.webp",
  "assets/img/projects/Donate_Plasma_Light.webp",
  "assets/img/projects/covid-map.webp",
  "assets/img/achivements/TeamTigers_Hack20.gif",
  "assets/img/achivements/GP.gif",
  "assets/img/achivements/MSFT.gif",
  "assets/img/achivements/Project_Fair.gif",
  "assets/img/achivements/Studentofsummer.gif",
  "assets/img/team/shunjid.webp",
  "assets/img/team/himel.webp",
  "assets/img/team/fahad.webp",
  "assets/img/team/sheble.webp",
  "assets/img/team/anindo.webp",
  "assets/img/team/zihadul.webp",
  "assets/img/team/morol.webp",
];

self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
