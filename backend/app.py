from flask import Flask, request, session, jsonify
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

  
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(120))

    def __init__(self, username, password):
        self.username = username
        self.password= password 

    def __repr__(self):
        return '<User %r>' % self.username

def create_db():
  db.create_all()

def create_user(username, password):
  new_user = User(username, password)
  db.session.add(new_user)
  db.session.commit()
  return new_user

def user_exists(username):
  check = User.query.filter_by(username=username).first() #returns empty if doesn't exist
  return bool(check)

# routings

@app.route('/')
def default():
  return "Default API pagessss"

@app.route('/signup', methods=['POST'])
def signup():
  error = None
  username = request.form['username']
  password = request.form['password']
  if user_exists(username) == False:
    new_user = create_user(username, password)
    session['user'] = new_user.username
    return jsonify( {'result': 'success' } )
  else:
    return jsonify( {'error': 'Username already taken.' } )

@app.route('/login', methods=['POST'])
@app.route('/logout', methods=['GET'])
def logout():
 session.pop('user', None)
 return jsonify( { 'result': 'success' } )


if __name__ == '__main__':
  app.secret_key= '(nj32*H23i32h32bw39F(U&WBERHYBFR'
  app.run(host='0.0.0.0', debug=True)
