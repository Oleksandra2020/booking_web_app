from flask import Flask
from flask_restful import Api, Resource
import json
import codecs

app = Flask(__name__)
api = Api(app)

class LoadAllData(Resource):
    def get(self):
        data = load_data()
        return data

class LoadSeats(Resource):
    def __init__(self, id):
        self.id = id

    def get(self, id):
        data = load_data()
        print(type(int(id)))
        
        seats = []
        for train in data["tickets"]:
            print(train)
            if train["id"] == int(id):
                seats = train["trainSeats"]
                break
            
        return seats
        
api.add_resource(LoadData, "/load_all_data")
api.add_resource(LoadSeats, '/load_seats/<id>',
                 resource_class_kwargs={'id': id})

def load_data():
    with open("data.json", "r") as read_file:
        data = json.load(read_file)
        
        return data

if __name__ == "__main__" :
    app.run(debug=True, port=5001,host="127.0.0.1")