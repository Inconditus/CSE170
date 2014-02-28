from flask import Flask, request, session, jsonify, render_template, redirect
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

class Item(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.Integer)
  description = db.Column(db.String)
  origprice = db.Column(db.String)
  price = db.Column(db.String)
  min_buyers = db.Column(db.Integer)
  photo = db.Column(db.String) # make sure this is a url
  user_id = db.Column(db.Integer) # relationships are hard 

  def __init__(self, name, description, origprice, price, min_buyers, photo, user_id):
    self.name = name
    self.description = description
    self.origprice = origprice
    self.price = price
    self.min_buyers = min_buyers
    self.photo = photo
    self.user_id = user_id

  def __repr__(self):
    return '<Item %r:%r>' % (self.id, self.name)

def create_db():
  db.create_all()

def create_user(username, password):
  new_user = User(username, password)
  db.session.add(new_user)
  db.session.commit()
  return new_user

def create_item(name, description, origprice, price, min_buyers, photo, user_id):
  new_item = Item(name, description, origprice, price, min_buyers, photo, user_id)
  db.session.add(new_item)
  db.session.commit()
  print "commit"
  return new_item 

def get_item_by_id(item_id):
  item = Item.query.filter_by(id=item_id).first()
  return item

def user_exists(username):
  check = User.query.filter_by(username=username).first() #returns empty if doesn't exist
  return bool(check)

def get_user_by_id(user_id):
  user = User.query.filter_by(id=user_id).first() # already verified by session to exist
  return user

def verify_account(username, password):
  check = User.query.filter_by(username=username).filter_by(password=password).first()
  return check

def is_logged_in():
  return 'user' in session

# Templating

@app.route('/')
def default():
  return render_template('index.html')

@app.route('/singleitem/<name>')
def single_item(name=None):
  if name:
    item = get_item_by_id(name)
    return render_template('singleitem.html', item=item.__dict__)
  else:
    return "error"

@app.route('/items/')
def items():
  if not is_logged_in(): return redirect('/', code=302)
  print "yolo"
  listings = Item.query.order_by(Item.id.desc()).all()
# convert list of objects to list of dic
  list_dicts = [item.__dict__ for item in listings]
  return render_template('items.html', listings=list_dicts)

@app.route('/profile/')
def profile():
  return render_template('profile.html')

@app.route('/add/')
def add():
  return render_template('add.html')

@app.route('/manage/')
def manage():
  return render_template('manage.html')

# API Routings

@app.route('/signup', methods=['POST'])
def signup():
  error = None
  username = request.form['username']
  password = request.form['password']
  if user_exists(username) == False:
    new_user = create_user(username, password)
    session['user'] = new_user.id
    return jsonify( {'result': 'success' } )
  else:
    return jsonify( {'error': 'Username already taken.' } )

@app.route('/login', methods=['POST'])
def login():
  if is_logged_in():
    logout()
  username = request.form['username']
  password = request.form['password']
  account = verify_account(username, password)
  if bool(account):
    session['user'] = account.id
    return jsonify( {'result': 'success' } )
  else:
    logout()
    return jsonify( { 'error' : 'Invalid username or password.' } )

@app.route('/logout', methods=['GET'])
def logout():
 session.pop('user', None)
 return jsonify( { 'result': 'success' } )

@app.route('/item/add', methods=['POST'])
def add_item():
  if not is_logged_in():
    return jsonify( {'error': 'Not logged in' } )
  else:
    name = request.form['name']
    description = request.form['desc']
    origprice = request.form['origprice']
    price = request.form['price']
    min_buyers = request.form['minnum']

  # TODO create a method that uploads the image to the server or imgur
    photo = request.form['imgsrc']

  # TODO add original price

  create_item(name, description, origprice, price, min_buyers, photo, session['user'])

  return jsonify({'result': 'success'})

if __name__ == '__main__':
  app.secret_key= '(nj32*H23i32h32bw39F(U&WBERHYBFR'
  app.run(host='0.0.0.0', debug=True)

