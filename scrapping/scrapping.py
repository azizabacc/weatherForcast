from bs4 import BeautifulSoup
import requests

url = 'https://weather.com/fr-BE/temps/10jours/l/eb4308c7faebf627932e185f2b28cb317468119418929a5f10d13239a4397057'
header ={
    "User-Agent" : "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
}
response =requests.get(url,headers=header)
#print(response.content)
soup =BeautifulSoup(response.content,'lxml')