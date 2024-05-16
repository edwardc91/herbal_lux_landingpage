# pull official base image
FROM node:alpine as build

RUN mkdir /project
WORKDIR /project

RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community