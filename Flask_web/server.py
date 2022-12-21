from flask import Flask
import random

app = Flask(__name__)

topics = [
    {'id':1, 'title':'html', 'body':'html is ...'},
    {'id':2, 'title':'css', 'body' : 'csss is ... '},
    {'id':3, 'title':'javascript', 'body' : 'javascript is ...'}
]

def template(contents, content):
    return f'''<!doctype html>
    <html>
        <body>
            <h1><a href="/">WEB</a><h1>
            <ol>
                {contents}
            </ol>
            {content}
            <ul>
            <a href="/create/">create</a>
            </ul>
        </body>
    </html>    
    '''    


def getContents():
    liTags = ''
    for topic in topics:
        liTags = liTags + f'<li><a href="/read/{topic["id"]}/">{topic["title"]}</a></li>'
    return liTags

@app.route('/')
def index():
    return template(getContents(), '<h2>Welcome</h2>Hello, WEB') 

@app.route('/read/<int:id>/')
def read(id):
    liTags = ''
    for topic in topics:
        liTags = liTags + f'<li><a href="/read/{topic["id"]}/">{topic["title"]}</a></li>'
    title =''
    body = ''
    for topic in topics:
        if id == topic['id']:
            title = topic['title']
            body = topic['body']
            break
    return template(getContents(), f'<h2>{title}</h2>{body}')

@app.route('/create/')
def create():
    content = '''
        <form action="/create/">
            <p><input type="text" name="title" placeholder="title"></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="create"></p>
        </form>
    '''
    return template(getContents(), content)

app.run(port=5001, debug=True) # Address already in use 에러 날 수 있음 5000번에서 먼저 실행된 서버가 있다면 포트를 바꿔주면 됨

