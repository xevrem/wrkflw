from aiohttp import web

async def hello(request):
    return web.Response(text='hello world')


app = web.Application()
app.add_routes([ web.get('/', hello) ])

web.run_app(app, host='0.0.0.0', port=8000)
