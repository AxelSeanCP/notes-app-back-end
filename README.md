# notes-app-backend

notes app API with plugin. From Dicoding's Back-End Fundamental class.

## Getting Started

How to run the API on your local machine.

### Prerequisites

- npm & Node.js ([download_here](https://nodejs.org/en/download/package-manager))
- rabbitmq & erlang ([download_here](https://www.rabbitmq.com/download.html))
- redis (mac & linux), memurai (windows) or use [docker](#install-redis-with-docker)

### Install redis with docker

> make sure docker desktop is installed / docker engine is running

1. Open terminal / cmd / powershell
2. Pull redis image from docker

```bash
docker pull redis
```

3. Run redis container

```bash
docker run --name redis -p 6379:6379 -d redis
```

4. Execute redis container (optional)

```bash
docker exec -it redis redis-cli
```

### Installation

1. Fork & Clone the repository

   ```bash
   git clone https://github.com/AxelSeanCP/notes-app-back-end.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-directory
   ```

3. Install project dependencies'

   ```bash
   npm i

   npm run start:dev
   ```

### Run the API

Use the command:

```bash
npm run start
```

view the application in your web browser at http://localhost:3000

> note: when running newman make sure to do "set-executionpolicy remotesigned" then run the newman script, after that do "set-executionpolicy restricted"
