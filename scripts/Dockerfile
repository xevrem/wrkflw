FROM alpine
WORKDIR /data
RUN apk update
RUN apk add nodejs npm git htop
RUN npm i -g parcel-bundler gulp-cli
ENTRYPOINT ["/usr/bin/npm"]
