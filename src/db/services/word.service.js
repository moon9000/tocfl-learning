import http from "../../http_common";

class WordDataService {
  getAll(params) {
    return http.get("/words", { params });
  }

  findAll() {
    return http.get("/words");
  }

  get(id) {
    return http.get(`/words/${id}`);
  }

  create(data) {
    return http.post("/words", data);
  }

  update(id, data) {
    return http.put(`/words/${id}`, data);
  }

  delete(id) {
    return http.delete(`/words/${id}`);
  }

  deleteAll() {
    return http.delete(`/words`);
  }

  findOne(id) {
    return http.get(`/words/${id}`);
  }

  findByLevel(level, params) {
    return http.get(`/words/level/${level}`, { params });
  }

  findByType(type) {
    return http.get(`/words/type/${type}`);
  }
}

export default new WordDataService();
