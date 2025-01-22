from flask import Flask,render_template, request, redirect, url_for, session,send_file,jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import smtplib
import os
from werkzeug.utils import secure_filename
from datetime import datetime
import random
import mysql.connector
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import requests
import json
 
app = Flask(__name__)
#from app import routes, models
CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)
 
app.secret_key = 'your secret key'

aims_email='tarushi.tanejag1112@gmail.com'

conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="password",
    database="aims"
)
cursor = conn.cursor() 

def init_db():
    with app.app_context():
        try:
            with app.open_resource('schema.sql', mode='r') as f:
                sql_commands = f.read().split(';')
                for command in sql_commands:
                    if command.strip():
                        cursor.execute(command)
                conn.commit()
        except Exception as e:
            print(f"Error during DB initialization: {e}")

    

def generate_otp(length=6):
    otp = ''.join([str(random.randint(0, 9)) for _ in range(length)])
    return otp


    server.login(sender,"eipn qsmt ffbv zqjm")               # dummy passcode. Sender should be your email id. passcode is app password. Explained in detail in readme file
    server.sendmail(sender,receiver,text)

def send_email(sender,receiver):
    otp = generate_otp()
    cursor.execute(
            'delete from otp_table where user_id = %s and TIMESTAMPDIFF(MINUTE, created_at, NOW()) > 3', (receiver,) )
    conn.commit()
    cursor.execute('insert into otp_table (user_id,otp,created_at) values (%s,%s,%s)',(receiver,otp,datetime.now(),))
    conn.commit()
    text=f"Subject : OTP for AIMS Login\n\n Your login otp is {otp} \n\n This is valid for 3 minutes"
    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()

    server.login(sender,"eipn qsmt ffbv zqjm")               # dummy passcode. Sender should be your email id. passcode is app password. Explained in detail in readme file
    server.sendmail(sender,receiver,text)

@app.route('/login', methods=['GET','POST'])
def login():
    
    data = request.get_json()
    email_id=json.dumps(data.get('email'))

    if not email_id:
        return jsonify({"error": "Email is required"}), 400

    print(f"Received email: {email_id}")
    send_email(aims_email, email_id)



@app.route('/login_otp/<email_id>',methods=['GET','POST'])
def login_otp(email_id):
    return render_template('login_otp.html',email_id=email_id)

@app.route('/process_otp/<email_id>',methods=['GET','POST'])
def process_otp(email_id):
    if request.method=='POST' and 'otp' in request.form:
        otp = request.form['otp']
        cursor.execute('select otp from otp_table where user_id = %s and TIMESTAMPDIFF(MINUTE, created_at, NOW()) <= 3',(email_id,))
        otp_given=cursor.fetchone()
        if otp_given:
            if otp_given['otp']==otp:
               return redirect(url_for("dashboard_student"))

if __name__ == "__main__":
    with app.app_context():
        init_db()
    app.run(host="127.0.0.1", port=3000)