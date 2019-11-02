from bs4 import BeautifulSoup
from urllib.request import urlopen
import pyrebase

# Connect te firebase
# config = {}

# firebase = pyrebase.initialize_app(config)

# Download mt project webpage
myUrl = 'https://www.mountainproject.com/'
client = urlopen(myUrl)
page_html = client.read()
client.close()

# Parse mt project for crag info
payload = {}
page_soup = BeautifulSoup(page_html, 'html.parser')
crag_guide = page_soup.findAll('div', {'id': 'route-guide'})[0]
crag_guide_columns = crag_guide.findAll('div', {'class': 'col-sm-3'})
for column in crag_guide_columns:
    states = column.findAll('div', {'class': 'mb-half'})
    for state in states:
        state_info = state.findAll('a', {'class': 'text-truncate'})
        state = state_info[0].text
        state_data = []
        for i in range(1, len(state_info)):
            crag = state_info[i].text
            state_data.append(crag)
        payload[state] = state_data
