// client app: http://notesapp-v1.dicodingacademy.com/
const hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: "localhost"
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();