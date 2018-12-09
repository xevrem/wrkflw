from aiohttp import web

from .models import WORKFLOW, COMPONENTS, STATES, EVENTS

async def workflows_get(request):
    return web.json_response({
        'events':EVENTS,
        'states':STATES,
        'components':COMPONENTS,
        'workflow':WORKFLOW})

async def workflows_put(request):
    event = await request.json()
    return web.json_response({'event': event, 'result':'success'})
