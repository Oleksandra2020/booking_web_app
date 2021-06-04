from flask import Flask
from flask_restful import Api, Resource
import json
import datetime

app = Flask(__name__)
api = Api(app)

class LoadAllData(Resource):
    def get(self):
        data = load_data()
        data = data["tickets"]

        return data

class LoadSeats(Resource):
    def __init__(self, id):
        self.id = id

    def get(self, id):
        data = load_data()
        data = data["tickets"]
        
        seats = []
        for train in data:
            print(train)
            if train["id"] == int(id):
                seats = train["trainSeats"]
                break
            
        return seats
        
class LoadByDatePlace(Resource):
    def get(self, departure, arrive, datetime):
        data = load_data()
        data = data["tickets"]

        ids = []
        for train in data:
            if(departure not in data["trainCities"]) continue
            if(arrive not in data["trainCities"]) continue
            if(data["trainCities"].index(departure) > data["trainCities"].index(arrive)) continue

            departure_index = data["trainCities"].index(departure)
            arrive_index = data["trainCities"].index(arrive)

        date_time_str = '18/09/19 01:55:19'
        date_time_obj = datetime.strptime(date_time_str, "%d/%m/%y %H:%M:%S")

api.add_resource(LoadData, "/load_all_data")
api.add_resource(LoadSeats, '/load_seats/<id>',
                 resource_class_kwargs={'id': id})

def load_data():
    with open("data.json", "r") as read_file:
        data = json.load(read_file)
        
        return data

if __name__ == "__main__" :
    app.run(debug=True, port=5001,host="127.0.0.1")