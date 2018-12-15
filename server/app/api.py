from aiohttp import web
from aiohttp_session import get_session

from .models import WORKFLOW, COMPONENTS, STATES, EVENTS

async def workflows_get(request):
    session = await get_session(request)
    session['state'] = WORKFLOW['states'][WORKFLOW['initial_state']]
    return web.json_response({
        'events':EVENTS,
        'states':STATES,
        'components':COMPONENTS,
        'workflow':WORKFLOW})

async def workflows_put(request):
    session = await get_session(request)
    event = await request.json()
    if event in session['state']['transitions']:
        next_state_id = session['state']['transitions'][event]
        session['state'] = WORKFLOW['states'][next_state_id]
        return web.json_response({'event': event, 'result':'success'})
    else:
        return web.json_response({'event': event, 'result':'denied'})
