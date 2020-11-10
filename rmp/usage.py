from RMPClass import RateMyProfAPI
aapi = RateMyProfAPI(schoolId=1513, teacher="marius minea")
aapi.retrieveRMPInfo()
print(aapi.getRMPInfo())
