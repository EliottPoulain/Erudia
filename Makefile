up:
	docker-compose up

down:
	docker-compose down

remove:
	docker rm (docker ps -aq) && docker rmi (docker images -q)