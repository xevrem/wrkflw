FROM python:3.7
RUN pip3 install pipenv
COPY . /data
WORKDIR /data
RUN pipenv install
ENTRYPOINT ["/usr/bin/env","pipenv"]
