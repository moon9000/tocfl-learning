import http from "../../http_common";

class SongDataService {
  getAll() {
    return http.get("/songs");
  }

  findAll() {
    return http.get("/songs");
  }

  get(id) {
    return http.get(`/songs/${id}`);
  }

  create(data) {
    return http.post("/songs", data);
  }

  update(id, data) {
    return http.put(`/songs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/songs/${id}`);
  }

  deleteAll() {
    return http.delete(`/songs`);
  }

  findOne(id) {
    return http.get(`/songs/${id}`);
  }

  findByLevel(level) {
    return http.get(`/songs/level/${level}`);
  }

  findByYear(year) {
    return http.get(`/songs/year/${year}`);
  }

  findByType(type) {
    return http.get(`/songs/type/${type}`);
  }
}

export default new SongDataService();
