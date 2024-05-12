.PHONY: up
up:
	docker-compose up -d

.PHONY: dev
dev: up # Toutes les commandes make avant les commandes bash
	npm install
	npm run start:dev