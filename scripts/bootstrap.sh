#!/bin/sh
docker-compose -f ./docker/docker-compose.yml -p tracker down
docker-compose -f ./docker/docker-compose.yml -p tracker up --build -d

echo ":: Waiting for database to be ready..."
export PGPASSWORD="test123"
until psql -h localhost -U tracker -d tracker -c "select 1" > /dev/null 2>&1; do
  sleep 1
done

yarn db:migrate
