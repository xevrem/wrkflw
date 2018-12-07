from bottle import route, run, response


@route('/workflow/foo/state')
def workflow():
    return {'status':True}

run(host='localhost', port=8000)
