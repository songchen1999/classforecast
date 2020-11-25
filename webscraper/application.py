from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
from flask_cors import CORS
from flask import Flask, request
import json
from easydict import EasyDict as edict
from OfferingPlan import offering as offering
from RMPClass import RateMyProfAPI
from CourseDescriptions import descriptions as descriptions

app = Flask(__name__)
CORS(app)
# Each class found is made into a Course


class Course:
    def __init__(self, name, number, title, credits, semester):
        self.name = name
        self.number = number
        self.title = title
        self.credits = credits
        self.semester = semester

    def getCourse(self):
        return("Course: " + self.name + " " + self.number + ": " + self.title +
               "\nCredits: " + self.credits + ", Offered: " + self.semester)


@app.route('/course-offering', methods={"GET"})
def return_shit():
    return offering()


@app.route('/professor', methods={"GET"})
def return_staff():
    professor = "david fisher"
    name = request.args.get('name')
    if name != None:
        professor = name
    aapi = RateMyProfAPI(teacher=professor)
    aapi.retrieveRMPInfo()
    return(aapi.getRMPInfo())


@app.route('/course-description', methods={"GET"})
def return_description():
    return descriptions()


if __name__ == '__main__':
    app.run(debug=True, port=5000)  # run app in debug mode on port 5000
