from aiohttp import web
import json

async def workflows_get(request):
  return web.json_response({'hello':'world'})

async def workflows_put(request):
  foo = await reqeust.json()
  return web.json_response({'event':foo.type, 'result':'success'})
