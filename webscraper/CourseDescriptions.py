from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
from easydict import EasyDict as edict

# Each class found is made into a Course


class CourseInfo:
    def __init__(self, ID, title, description):
        self.ID = ID
        self.title = title
        # self.instructor = instructor
        self.description = description

    def getCourseInfo(self):
        return("Course ID: " + self.ID + " Title: " + self.title + "\n")


def descriptions():
    # URL of Course Offering Plan
    my_url = 'https://www.cics.umass.edu/content/spring-21-course-descriptions'

    professors_arr = []
    # opening up connection, grabbing the page
    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()

    # html parsing
    page_soup = soup(page_html, "html.parser")

    # Getting List of All Courses
    all_classes = page_soup.find("div", {"class": "field-item even"})

    courses_array = []

    instructors_arr = {
        "197R": "JASPER MCCHESNEY",
        "298A": "EMMA ANDERSON",
        "305": "SIOBHAN MEI, JUSTIN OBARA, THOMAS PICKERING, MICHELLE TRIM",
        "119": "WILLIAM VERTS",
        "121": "DAVID BARRINGTON, EDUARDO CALLE ORTIZ, JOSEPH CANNING, MENG-CHIEH CHIU, JAIME DAVILA, COLLIN GIGUERE, PETER KLEMPERER, ADAM KOHAN, GHAZALEH PARVINI, CHERYL SWANIER",
        "145": "WILLIAM VERTS",
        "186": "MARC LIBERATORE",
        "187": "GORDON ANDERSON, NEENA THOTA",
        "197U": "ARUN DUNNA",
        "198C": " MENG-CHIEH CHIU, TIMOTHY RICHARDS",
        "220": "MENG-CHIEH CHIU, MARIUS MINEA",
        "230": "TIMOTHY RICHARDS",
        "240": "SHITING LAN",
        "250": "GHAZALEH PARVINI, STAFF",
        "311": "HUNG LE, MARIUS MINEA",
        "320": "GORDON ANDERSON, DAVID FISHER",
        "326": "PETER KLEMPERER",
        "328": "DEEPAK GANESAN",
        "345": "JAIME DAVILA",
        "370": "SUBHRANSU MAJI",
        "373": "RUI WANG",
        "377": "MARK CORNER",
        "383": "MATTHEW RATTIGAN",
        "390A": "PHILIP THOMAS",
        "445": "GEROME MIKLAU",
        "446": "DAVID FISHER",
        "453": "PARVIZ KERMANI",
        "466": "ADAM O'NEILL",
        "490S": "NEENA THOTA",
        "501": "DAVID BARRINGTON",
        "514": "ANDREW MCGREGOR",
        "520": "HEATHER CONBOY",
        "529": "GORDON ANDERSON, DAVID FISHER",
        "532": "HUI GUAN",
        "535": "CHARLES WEEMS",
        "546": "HAMED ZAMANI",
        "574": "EVANGELOS KALOGERAKIS",
        "589": "JUSTIN DOMKE",
        "590A": "PARVIZ KERMANI",
        "590E": "MICHELLE TRIM",
        "590J": "SETH LANDSMAN, DANIEL WALTERS, EDWARD WALTERS, ADAM WOODBURY",
        "590M": "PETER HAAS",
        "590U": "TAUHIDUR RAHMAN",
        "590V": "ALI SARVGHAD BATN MOGHADDAM",
        "591NR": "HAVA SIEGELMANN",
        "596E": "JAGATH JAI KUMAR",
        "601": "NEIL IMMERMAN",
        "603": "RODERIC GRUPEN",
        "611": "RAMESH SITARAMAN",
        "630": "EMERY BERGER",
        "645": "YANLEI DIAO",
        "674": "EVANGELOS KALOGERAKIS",
        "677": "MARCO SERAFINI",
        "683": "YAIR ZICK",
        "685": "BRENDAN O'CONNOR",
        "688": "JUSTIN DOMKE",
        "690A": "NARGES MAHYAR",
        "690OP": "MADALINA FITERAU BROSTEAN",
        "690W": "JIE XIONG",
        "691DD": "DAVID JENSEN",
        "691NR": "HAVA SIEGELMANN",
        "696DS": "THOMAS BERNARDIN, ANDREW MCCALLUM",
        "697M": "ETHAN ZUCKERMAN",
        "701": "N/A",
        "701Y": "N/A",
        "791U": "RAZIEH RAHIMI",
        "891M": "NEIL IMMERMAN",
        "H250": "DAVID BARRINGTON",
        "H311": "MARIUS MINEA",
        "H446": "DAVID FISHER",
        "150": "MOHAMMADHASSAN HAJIESMAILI",
        "197P": "EMMA ANDERSON",
        "248": "GORDON ANDERSON",
        "490C": "LAURE THOMPSON",
        "690C": "LAURE THOMPSON"
    }
    for i in range(0, len(all_classes.findAll("h2"))-1):
        course_id = all_classes.findAll("h2")[i+1].a.get("id")
        course_title = all_classes.findAll("h2")[i+1].a.text
        course_description = all_classes.findAll("p")[i].text

        courses_array.append(CourseInfo(
            course_id, course_title, course_description))

    course_data = []

    for i in range(0, len(courses_array)):
        course_data.append(edict({
            "id": courses_array[i].ID,
            "title": courses_array[i].title,
            "instructor(s)": instructors_arr[courses_array[i].ID],
            "description": courses_array[i].description
        }))

    data = edict({
        "courses": course_data
    })
    return(data)
