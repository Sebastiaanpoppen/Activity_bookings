import axios from 'axios';
import Config from './Config';

class Api {
  static get myAxios() {
    return axios.create({
      baseURL: "http://localhost:3000",
    });
  }

  static getCollection(ClassRef) {
    return this.myAxios.get(`${ClassRef.endpoint}`)
    .then(response => response);
  }

  // static getRelated(ClassRef, property, id) {
  //   return this.myAxios.get(`${ClassRef.endpoint}`, {
  //     params: id })
  //     .then(response => (response);
  // }

  static getArray(ClassRef) {
    return this.myAxios.get(`${ClassRef.endpoint}`);
  }

  static getRelations(ClassRef, property, ids) {
    const params = ids.map(id =>
      `filters[${property}_in][]=${id}`,
    ).join('&');
    return this.myAxios.get(`${ClassRef.endpoint}?${params}`)
      .then(response => ({
        data: response.data.map(rawData => new ClassRef(rawData)),
      }));
  }

  static fetchError(error) {
    const message = `${error}`;
    this.$bus.$emit('requestFailed', message);
    this.sendNotification('danger', message);
  }

  static fetchSuccess(response) {
    const message = `${response}`;
    this.sendNotification('success', message);
  }

  static sendNotification(type, message) {
    this.$bus.$emit('setNotification', { type, message });
  }

  static getResource(ClassRef, id) {
    return this.myAxios.get(`${ClassRef.endpoint}/${id}`)
      .then(response => new ClassRef(response.data))
      .catch(error =>
        this.fetchError(error),
      );
  }

  static postResource(ClassRef, data) {
    const object = {};
    object[ClassRef.railsModel] = data;
    if (this.inRequest) {
      return {};
    }
    const promise = this.myAxios.post(`${ClassRef.endpoint}`, object)
      .then((response) => {
        this.inRequest = false;
        const created = `${ClassRef.name} was created succesfully`;
        this.fetchSuccess(created);
        this.$router.push(`/${ClassRef.routeName}/${response.data.id}`);
      })
      .catch((error) => {
        this.inRequest = false;
        error.response.data.forEach(message => this.fetchError(message));
      });
    this.inRequest = true;
    return promise;
  }

  static updateResource(ClassRef, id, data, route = null) {
    const object = {};
    object[ClassRef.railsModel] = data;
    if (this.inRequest) {
      return {};
    }
    const promise = this.myAxios.put(`${ClassRef.endpoint}/${id}`, object)
      .then((response) => {
        this.inRequest = false;
        const updated = `${ClassRef.name} was updated succesfully`;
        this.fetchSuccess(updated);
        this.$router.push(route || `/${ClassRef.routeName}/${response.data.id}`);
      })
      .catch((error) => {
        this.inRequest = false;
        error.response.data.forEach(message => this.fetchError(message));
      });
    this.inRequest = true;
    return promise;
  }

  static deleteResource(ClassRef, id, route = null) {
    return this.myAxios.delete(`${ClassRef.endpoint}/${id}`)
      .then(() => {
        const deleted = `${ClassRef.name} was deleted succesfully`;
        this.fetchSuccess(deleted);
        this.$router.push(route || `/${ClassRef.routeName}`);
      })
      .catch(error =>
        this.fetchError(error),
      );
  }

  static getCount(classRef, filters = {}) {
    const params = {};

    Object.keys(filters).forEach((property) => {
      if (typeof filters[property] === 'boolean') {
        params[`filters[${property}_eq]`] = filters[property];
      } else {
        params[`filters[${property}_cont]`] = filters[property];
      }
    });

    return this.myAxios.get(`${classRef.endpoint}/count`, { params })
      .then(response => response.data)
      .catch(error => this.fetchError(error));
  }

  static errorMsg(json) {
    return json.response.data.error;
  }
}

export default Api;
