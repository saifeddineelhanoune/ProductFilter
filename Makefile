all:
	docker-compose up --build
	docker-c

stop:
	docker-compose down

logs:
	docker-compose logs -f
