FROM node:18

LABEL org.opencontainers.image.source=https://github.com/albertogferrario/stockx-scraper-example

WORKDIR /usr/src/app

COPY . .

RUN \
    yarn --production

COPY .docker/build/app/entrypoint.sh .

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]
