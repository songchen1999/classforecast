from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup


# Each class found is made into a Course
class CourseInfo:
    def __init__(self, ID, title, instructor, description):
        self.ID = ID
        self.title = title
        self.instructor = instructor
        self.description = description

    def getCourseInfo(self):
        return("Course ID: " + self.ID + " Title: " + self.title + " Instructors: " + self.instructor + "\nDescription: " + self.description)


# URL of Course Offering Plan
my_url = 'https://www.cics.umass.edu/content/spring-21-course-descriptions'


# opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

# html parsing
page_soup = soup(page_html, "html.parser")

# Getting List of All Courses
all_classes = page_soup.find("div", {"class": "field-item even"})

# print(all_classes.findAll("h2")[1].a.get("id"))  # id
# print(all_classes.findAll("h2")[1].a.text)  # title
# print(all_classes.findAll("h3")[0].text)  # instructor
# print(all_classes.findAll("p")[0].text)  # description

courses_array = []
# print(all_classes.findAll("h2"))
# print(all_classes.findAll("h3"))
# print(all_classes.findAll("p"))
# print(all_classes.findAll("p")[74])

for i in range(0, len(all_classes.findAll("h2"))-1):
    # print(i)
    course_id = all_classes.findAll("h2")[i+1].a.get("id")
    course_title = all_classes.findAll("h2")[i+1].a.text
    # print(course_id + "\n" + course_title + "\n")

    course_instructor = ''
    if all_classes.findAll("h3")[i].text != None:
        course_instructor = all_classes.findAll("h3")[i].text

    course_description = all_classes.findAll("p")[i].text

    print("Course ID: " + course_id + " Title: " + course_title + " Instructor: " + course_instructor
          + "\nDescription: " + course_description + "\n")
