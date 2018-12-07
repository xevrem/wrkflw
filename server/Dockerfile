FROM alpine
RUN apk add --no-cache --update python3 git htop bash
RUN pip3 install pipenv
COPY . /data
WORKDIR /data
RUN pipenv install
ENTRYPOINT ["/usr/bin/env","pipenv"]
