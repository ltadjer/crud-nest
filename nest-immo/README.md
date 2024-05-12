# Immo nest

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![Nest.js](https://img.shields.io/badge/Nest.js-E0234D?style=for-the-badge&logo=nestjs&logoColor=white)]()

[![docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)


[![jest](https://img.shields.io/badge/Jest-99425B?style=for-the-badge&logo=jest&logoColor=FFFFFF)](https://jestjs.io/fr/)

[![Prettier](https://img.shields.io/badge/Prettier-1B2B34?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![Prettier](https://img.shields.io/badge/ESLINT-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a installed [Docker](https://docs.docker.com/get-docker/)
- You have a installed [Docker compose](https://docs.docker.com/compose/)
- You have installed [Make](https://www.gnu.org/software/make/manual/make.html)
- Install ESlint
- Install Prettier

> it is recommended to set tabSize to 2

if you want to run the project without docker
- You have installed the latest version of [Node.js and NPM](https://nodejs.org/en/download/)
- You have installed the last version of Nest.js CLI `npm i -g @nestjs/cli`


## Run project locally
> Create a .env file at the root of the project and fill it with the .env.example file

With docker and makefile
```bash
  make dev
```

Manually with npm
```bash
  docker-compose up -d
  npm install
  npm run start:dev
```

## Commit message convention
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Authors
- [Thomas Mouchelet](https://github.com/ThomasMouchelet)

## License

This project is proprietary and confidential. Code duplication and re-use without explicit permission is not allowed.