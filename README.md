CURRENT_USER_ID=$(id -u) CURRENT_GROUP_ID=$(id -g) docker-compose build php
CURRENT_USER_ID=$(id -u) CURRENT_GROUP_ID=$(id -g) docker-compose build web

composer install

cd application

composer install

php artisan config:clear

cd ..

sls deploy

cd application 

npm install

npm install --save-dev vue-router

docker-compose up assets web php mysql redis

# TODO

- Upgrade to newest Laravel version
- GitHub Actions CI/CD

# Local Development

```bash
docker-compose up assets web php mysql redis
```