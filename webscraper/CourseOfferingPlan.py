from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup


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


# URL of Course Offering Plan
my_url = 'https://www.cics.umass.edu/content/course-offering-plan'


# opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

# html parsing
page_soup = soup(page_html, "html.parser")


# Getting List of All Courses
all_classes = page_soup.findAll("div", {"class": "field-item even"})


# 100 Level Courses
one_hundred_level = all_classes[0].table.tr.next_sibling.findAll("tr")

one_hundred_level_courses = []

# Iterating through each class and adding to Courses class
for single_class in one_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    one_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in one_hundred_level_courses:
    print(course.getCourse())


# 200 Level Courses
two_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
two_hundred_level_courses = []

for single_class in two_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    two_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in two_hundred_level_courses:
    print(course.getCourse())


# 300 Level Courses
three_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
three_hundred_level_courses = []

for single_class in three_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    three_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in three_hundred_level_courses:
    print(course.getCourse())


# 400 Level Courses
four_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
four_hundred_level_courses = []

for single_class in four_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    four_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in four_hundred_level_courses:
    print(course.getCourse())


# 500 Level Courses
five_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
five_hundred_level_courses = []

for single_class in five_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    five_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in five_hundred_level_courses:
    print(course.getCourse())

# 600 Level Courses
six_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
six_hundred_level_courses = []

for single_class in six_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    six_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in six_hundred_level_courses:
    print(course.getCourse())

# 800 Level Courses
eight_hundred_level = all_classes[0].table.tr.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.findAll(
    "tr")
print("\n")
eight_hundred_level_courses = []

for single_class in eight_hundred_level:
    class_name = single_class.td.text
    class_number = single_class.td.next_sibling.text
    class_title = single_class.td.next_sibling.next_sibling.text
    class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
    semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

    eight_hundred_level_courses.append(
        Course(class_name, class_number, class_title, class_credits, semesters_offered))

for course in eight_hundred_level_courses:
    print(course.getCourse())


# CICS Courses
cics = all_classes[0].findAll("table")[0].table.findAll("tr")
itercics = iter(cics)
next(itercics)
cics_courses = []
print("\n")
for single_class in itercics:
    if(single_class.get("valign") == None):
        class_name = single_class.td.text
        class_number = single_class.td.next_sibling.text
        class_title = single_class.td.next_sibling.next_sibling.text
        class_credits = single_class.td.next_sibling.next_sibling.next_sibling.text
        semesters_offered = single_class.td.next_sibling.next_sibling.next_sibling.next_sibling.text

        cics_courses.append(Course(class_name, class_number, class_title,
                                   class_credits, semesters_offered))


for course in cics_courses:
    print(course.getCourse())
