from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, JWTManager, create_access_token # type: ignore
from flask_bcrypt import Bcrypt # type: ignore
import mysql.connector # type: ignore

# Initialize authentication components
auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()

# Function to get a database connection
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='',  # your password
        database='techtrack'
    )
    return connection

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a database connection
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute('INSERT INTO users(email, password) VALUES(%s, %s)', (email, hashed_password))
        connection.commit()
    except mysql.connector.Error as err:
        return jsonify({"message": f"Error: {err}"}), 500
    finally:
        cursor.close()
        connection.close()

    return jsonify({"message": "User created successfully!"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Create a database connection
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
    user = cursor.fetchone()
    cursor.close()
    connection.close()

    if user and bcrypt.check_password_hash(user[1], password):
        # Generate JWT token
        access_token = create_access_token(identity=email)
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route!"}), 200
