import http from '../../http-common'

class services {
  getAll() {
    return http.get(`https://reqres.in/api/users?page=2`);
  }

    list(){
      return http.get(`/api/unknown`);
    }
  login(data) {
    return http.post(`/api/login`,data);
  }
  
  create(data) {
    return http.post("/api/register", data);
  }

  
  update(id, data) {
    return http.put(`/api/users ${id}`);
  }

  remove(id) {
    return http.delete(`/api/users ${id}`);
  }
}

export default new services();