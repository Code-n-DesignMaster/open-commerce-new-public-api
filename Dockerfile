FROM node:10.15-alpine

ARG TOKEN_NPM
ENV NPM_TOKEN=$TOKEN_NPM

WORKDIR /app

COPY . /app

RUN rm -rf .git/ && \
    date > ./DOCKER_IMAGE_BUILD_DATE

CMD ["npm", "start"]
