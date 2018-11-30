FROM alpine
WORKDIR /data
RUN apk update
RUN apk add nodejs npm yarn git htop bash util-linux
RUN yarn global add parcel-bundler gulp-cli
ENTRYPOINT ["/usr/bin/yarn"]
