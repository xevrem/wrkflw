#!/usr/bin/env bash
# App settings go here, they're validated in app.settings

# the AIO_ env variables are used by `adev runserver` when serving your app for development
export AIO_APP_PATH="app/"
export AIO_STATIC_PATH="static/"

# this is the key used to encrypt cookies. Keep it safe!
# you can generate a new key with `base64.urlsafe_b64encode(os.urandom(32))`
export APP_COOKIE_SECRET="I3jFLQAZFWqt1DIOi3M9iv8_UR-l3iB1MA-W8QlTotU="

# also activate the python virtualenv for convenience, you can remove this if you're python another way
. env/bin/activate
