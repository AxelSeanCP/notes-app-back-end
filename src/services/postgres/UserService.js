const { Pool } = require("pg");

class UserService {
  constructor() {
    this._pool = new Pool();
  }
}
