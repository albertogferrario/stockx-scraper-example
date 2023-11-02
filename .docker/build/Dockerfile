FROM node:18

LABEL org.opencontainers.image.source=https://github.com/albertogferrario/stockx-scraper-example

WORKDIR /usr/src/app

COPY . .

RUN \
    yarn --production

ENTRYPOINT [ "/usr/src/app/.docker/build/app/entrypoint.sh" ]
