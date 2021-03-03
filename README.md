## Initial Backend Setup

```bash
CURRENT_USER_ID=$(id -u) CURRENT_GROUP_ID=$(id -g) docker-compose build php

docker-compose up --entrypoint bash php

# install serverless.yml dependencies at repo root (serverless itself is already installed globally in the php Docker image)
npm install

composer install

cd application

composer install

exit

docker-compose up

# in another terminal
docker-compose exec php bash

cd application/

php artisan migrate
```

## Initial Frontend Setup

```bash
docker-compose up --entrypoint bash php

cd application 

npm install

exit

docker-compose up
```

## Development

### Start all services

This will give you a Laravel application hosted at port 8080, complete with a running redis store, a running mySQL database, nginx to serve static assets, and more.

```bash
docker-compose up
```

Once the services are running with `docker-compose up`, you can use the following command to get a shell in Docker dev environment in which you can run artisan commands, etc. with no dependency on having php and other applications installed on your host computer. For consistency, it's recommended that all developers simply use the shell provided by this command to run commands for this project.

```bash
docker-compose exec php bash
```

## Deployment to AWS

```bash
docker-compose up --entrypoint bash php

php artisan config:clear

cd ..

sls deploy
```


# Future Improvements

- Upgrade to newest Laravel version
- GitHub Actions
- Compile JavaScript assets on deployment with GitHub Actions rather than committing them to the repo.
