import http from "../../http_common";

class AnimeDataService {
  getAll() {
    return http.get("/animes");
  }

  findAll() {
    return http.get("/animes");
  }

  get(id) {
    return http.get(`/animes/${id}`);
  }

  create(data) {
    return http.post("/animes", data);
  }

  update(id, data) {
    return http.put(`/animes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/animes/${id}`);
  }

  deleteAll() {
    return http.delete(`/animes`);
  }

  findOne(id) {
    return http.get(`/animes/${id}`);
  }

  findByLevel(level) {
    return http.get(`/animes/level/${level}`);
  }

  findByYear(year) {
    return http.get(`/animes/year/${year}`);
  }

  findByType(type) {
    return http.get(`/animes/type/${type}`);
  }
}

export default new AnimeDataService();
