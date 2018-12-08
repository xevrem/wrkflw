import base64
from pathlib import Path

from aiohttp import web

import aiohttp_session
from aiohttp_session.cookie_storage import EncryptedCookieStorage

from .settings import Settings
from .views import index
from .api import workflows_post, workflows_get


THIS_DIR = Path(__file__).parent
BASE_DIR = THIS_DIR.parent


def setup_routes(app):
    app.router.add_get('/', index, name='index')
    app.router.add_get('/workflows', workflows_get, name='workflows-get')
    app.router.add_post('/workflows', workflows_post, name='workflows-post')


async def create_app():
    app = web.Application()
    settings = Settings()
    app.update(
        name='server',
        settings=settings
    )

    secret_key = base64.urlsafe_b64decode(settings.COOKIE_SECRET)
    aiohttp_session.setup(app, EncryptedCookieStorage(secret_key))

    setup_routes(app)
    return app
