FROM node:14

WORKDIR /app

COPY . .

RUN apt-get update -y && apt-get install -y curl jq && \
    npm install

ENTRYPOINT [ "bash", "/app/devops/scripts/preview.sh" ]
