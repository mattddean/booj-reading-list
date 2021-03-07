# serverless-reading-list

## Technologies

- GraphQL
- serverless cloud deployment (well, almost serverless - more on that later)
- Docker development environment that emulates the serverless cloud environment locally

## How the Repo was Set Up

### How Lighthouse was Installed

```bash
docker-compose up
docker-compose exec php bash
cd application
composer require nuwave/lighthouse
php artisan vendor:publish --tag=lighthouse-schema
php artisan lighthouse:ide-helper
composer require mll-lab/laravel-graphql-playground
```

## GraphQL

### Visit the GraphQL Playground

The GraphQL Playground is exposed via the Laravel Lighthouse plugin, through the `php` docker service.

After running:

`docker-comopse up`

Visit:

http://localhost:8000/graphql-playground

### Updating the GraphQL Schema

Make your updates, then run:

```bash
php artisan lighthouse:clear-cache
```

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

# TODO

- Create production .env file
  - Include passport keys in it as
    - PASSPORT_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
      <private key here>
      -----END RSA PRIVATE KEY-----"
    - PASSPORT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----
      <public key here>
      -----END PUBLIC KEY-----"

# Future Improvements

- Set up prettier as formatter for PHP
- Pre-populate database with genres so that any user's random (and possibly non-existent) genre does not appear for other users
- Consider converting frontend from a vue-clie app to a native webpack app
- Have GitHub Actions automatically deploy new versions of the app to AWS
- Compile JavaScript assets on deployment with GitHub Actions rather than committing them to the repo.
- Vuetify loader buttons
- Consider making users->books a many-to-many relation and adding functionality so that when any user creates a book, the book gets saved in the books table and can be retrieved by another user and instantly brought into their reading list
