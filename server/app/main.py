import base64
from pathlib import Path

from aiohttp import web

import aiohttp_session
from aiohttp_session.cookie_storage import EncryptedCookieStorage

import aiohttp_cors

from .settings import Settings
from .views import index
from .api import workflows_put, workflows_get


THIS_DIR = Path(__file__).parent
BASE_DIR = THIS_DIR.parent


def setup_routes(app):
    app.router.add_get('/', index, name='index')


def setup_cors_routes(cors, app):
    resource = cors.add(app.router.add_resource('/workflows'))
    cors.add(resource.add_route('GET', workflows_get))
    cors.add(resource.add_route('PUT', workflows_put))

    resource = cors.add(app.router.add_resource('/workflows/init'))


async def create_app():
    app = web.Application()
    settings = Settings()
    app.update(
        name='server',
        settings=settings
    )

    cors = aiohttp_cors.setup(app,defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })

    secret_key = base64.urlsafe_b64decode(settings.COOKIE_SECRET)
    aiohttp_session.setup(app, EncryptedCookieStorage(secret_key))

    setup_routes(app)
    setup_cors_routes(cors, app)
    return app
