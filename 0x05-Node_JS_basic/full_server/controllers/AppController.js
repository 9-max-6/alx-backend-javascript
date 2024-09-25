class AppController {
  static getHomePage(request, response) {
    response.statusCode = 200;
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
