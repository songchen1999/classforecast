from RMPClass import RateMyProfAPI
aapi = RateMyProfAPI(teacher="david fisher")
aapi.retrieveRMPInfo()
print(aapi.getRMPInfo())
print(aapi.getWouldTakeAgain())
print(aapi.getTags())
print(aapi.getFirstTag())
