from flask import Flask, request
from flask_restful import Api, Resource
from datetime import datetime, timedelta

import json

app = Flask(__name__)
# api = Api(app)

@app.route("/load_all_data", methods=['GET'])
def get_all_data():
        data = load_data()
        data = data["tickets"]

        return { "all_data" : data }

@app.route("/load_seats/<int:id>",  methods=['GET'])
def get_seats(id):
        data = load_data()
        data = data["tickets"]
        
        seats = []
        for train in data:
            print(train)
            if train["id"] == int(id):
                seats = train["trainSeats"]
                break
            
        return { "seats" : seats }

@app.route("/load_data_by_date_place",  methods=['GET', 'POST'])
def get_seats_by_date_place():

    body = request.get_json() # get the request body content
    if body is None:
        return "The request body is null", 400
    if "departure" not in body:
        return "You need to specify the departure",400
    if "arrive" not in body:
        return "You need to specify the arrive", 400
    if "datetime" not in body:
        return "You need to specify the datetime", 400

    departure = body["departure"]
    arrive = body["arrive"]
    date = datetime.strptime(body["datetime"], "%d/%m/%Y %H:%M:%S") 
    data = load_data()
    data = data["tickets"]

    ids = []
    for train in data:
        if(departure not in train["trainCities"]): continue
        if(arrive not in train["trainCities"]): continue
        if(train["trainCities"].index(departure) > train["trainCities"].index(arrive)): continue

        departure_index = train["trainCities"].index(departure)
        arrive_index = train["trainCities"].index(arrive)

        departure_time = 0

        for city in train["trainStops"]:
            if(city["city"] == departure): 
                departure_time = datetime.strptime(city["departure"], "%d/%m/%Y %H:%M:%S")
                break
        if(departure_time == 0 or date > departure_time or departure_time > (date + timedelta(days=1))): continue
        
        ids.append(train["id"])

    return { "ids" : ids }

def load_data():
    with open("data.json", "r") as read_file:
        data = json.load(read_file)
        
        return data

if __name__ == "__main__" :
    app.run(debug=True, port=5001,host="127.0.0.1")