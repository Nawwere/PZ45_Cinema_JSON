const list = document.querySelector("#movie-list");
const status = document.querySelector("#status");
const summary = document.querySelector("#summary");
const search = document.querySelector("#search");
const genre = document.querySelector("#genre");
let allMovies = [];
function setStatus(message, kind = "info") {
  status.textContent = message;
  status.dataset.kind = kind;
}
function normalizeMovie(raw) {
  // TODO 1: верните объект с title, genre, year, rating, duration,
  // sessions (массив строк) и tags (массив строк).
  // Учтите отсутствие либо неверный тип отдельных полей.
  return {
    title: typeof raw.title === "string"
      ? raw.title
      : "Без названия",
    genre: typeof raw.genre === "string"
      ? raw.genre
      : "Не указан",
    year: Number.isFinite(Number(raw.year))
      && raw.year !== null
      ? Number(raw.year)
      : null,
    rating: Number.isFinite(Number(raw.rating))
      && raw.rating !== null
      ? Number(raw.rating)
      : null,
    duration: Number.isFinite(Number(raw.duration))
      && raw.duration !== null
      ? Number(raw.duration)
      : null,
    sessions: Array.isArray(raw.sessions)
      ? raw.sessions.filter(item => typeof item === "string")
      : [],
    tags: Array.isArray(raw.tags)
      ? raw.tags.filter(item => typeof item === "string")
      : []
  };
}
function createTextElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.className = className;
  }
  return element;
}
function renderMovies(movies) {
  // TODO 2: создайте карточки createElement/textContent (без innerHTML).
  // Покажите жанр, год, рейтинг, длительность, ближайший сеанс и теги.
  // Для пустого списка создайте элемент .empty.
}
function applyFilters() {
  // TODO 3: найдите фильмы по подстроке названия (без учёта регистра),
  // затем примените фильтр жанра и обновите #summary и карточки.
}
async function fetchMovies(empty = false) {
  // TODO 4: fetch('/api/movies' + (empty?'?empty=1':'')), response.ok, response.json().
  // Извлеките data.movies, проверьте Array.isArray, преобразуйте normalizeMovie,
  // запишите в allMovies и вызовите applyFilters().
  setStatus("TODO: загрузите и обработайте JSON");
}
document
  .querySelector("#load-button")
  .addEventListener("click", () => fetchMovies());
document
  .querySelector("#clear-button")
  .addEventListener("click", () => fetchMovies(true));
search.addEventListener("input", applyFilters);
genre.addEventListener("change", applyFilters);
// TODO 5: вызовите fetchMovies() при открытии страницы.
