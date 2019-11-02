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
stateList = []
payload = {}
page_soup = BeautifulSoup(page_html, 'html.parser')
crag_guide = page_soup.findAll('div', {'id': 'route-guide'})[0]
crag_guide_columns = crag_guide.findAll('div', {'class': 'col-sm-3'})
for column in crag_guide_columns:
    states = column.findAll('div', {'class': 'mb-half'})
    for state in states:
        state_info = state.findAll('a', {'class': 'text-truncate'})
        state = state_info[0].text
        if state == 'International' or state == '* In Progress':
            continue
        stateList.append(state)
        state_data = []
        for i in range(1, len(state_info)):
            crag = state_info[i].text.replace('*', '').strip()
            state_data.append({'type': 'crag', 'name': crag})
        payload[state] = state_data

stateList.append('Nebraska')
payload[stateList[-1]] = []
stateList.append('Mississippi')
payload[stateList[-1]] = []

for state in stateList:
    myUrl = 'https://www.mountainproject.com/gyms/' + state.lower().replace(' ', '-')
    print(myUrl)
    client = urlopen(myUrl)
    page_html = client.read()
    client.close()
    page_soup = BeautifulSoup(page_html, 'html.parser')

    gym_list = page_soup.findAll('div', {'id': 'gym-state-list'})[0]
    gyms = gym_list.findAll('div', {'class': 'gym'})
    for gym in gyms:
        gym_name = gym.find('a').text
        gym_location = gym.find('span', {'class': 'location'}).text
        gym_info = {
            'name': gym_name,
            'type': 'gym',
            'location': gym_location
        }
        payload[state].append(gym_info)

print(payload)

# Send payload to the firebase database
db = firebase.database()
db.child('locations').set(payload)
