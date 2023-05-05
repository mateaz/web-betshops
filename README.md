# Betshops - task

"Betshops" is a testing assignment for a single page application

## Behavior:

- Application shows client betshops on the map (using a mapping library for the platform of your choice) -> bet shops are located in Romania
- Users can move the map and zoom-in/zoom-out
- When clicking on the betshop icon, details are shown and users can see the relevant information about the betshop

## Tips:

- Our app makes a defined API call and draws markers on the map
- If the user denies their location, center of the map is set to center of Munich `48.137154, 11.576124`
- Working time - suppose that working time is 08:00 - 16:00
  - If a betshop is OPEN at the moment, clock label should present `Open now until [END TIME]`
  - If a betshop is CLOSED, clock label should present `Opens tomorrow at [START TIME]`
- Betshop detail data is presented in 3 rows:
  1. Name
  2. Address
  3. [City] - [County]
- Selected betshop has a different asset (large green pin)
- Fetch the weather from the `https://openweathermap.org/forecast5` API
- The weather widget should contain dates for the upcoming 5 days with the corresponding min/max temperature, weather description, cloud percentage and air pressure
- "Today" should be displayed next to the current date and that widget row highlighted with a left blue border
- The min/max temperature tags should be colored based on the actual temperature ( < 14C - blue, 14-20C - green, 20-25C - orange, 25C+ - red

## Layout

- Map:
  - 400px width
  - 2px white border
- Right sidebar:
  - 215px width
  - white background
  - 22px top/bottom, 18px left/right padding
- 15px margins between map/sidebar and sidebar boxes
- Colors:
  - dark grey: #6e6e6e
  - light grey: #ebebeb
  - odd weather widget row background: #f7f7f7
  - blue: #3e5b9d
  - red: #e82e00
  - orange: #e78f09
  - green: #8bba0a
- Fonts - whatever tickles your fancy :)
- Make the overall layout responsive on viewports below 780px (map shown first)

## Rest API:

**Host**:

- `https://interview.superology.dev`

**Resource**:

- GET `/betshops?boundingBox={0}`

**Query parameters**:

- `boundingBox`
- bounding box in CSV format "top-right latitude (lat1), top-right longitude (lon1), bottom-left latitude (lat2), bottom-left longitude (lon2)"
- example: `48.16124,11.60912,48.12229,11.52741`

**Response** : (HTTP 200)

```json
  {
	"count": 109,
	"betshops": [
		{
		  "name": " Lenbachplatz 7",
		  "location": {
			"lng": 11.5689638,
			"lat": 48.1405515
		  },
		  "id": 2350329,
		  "county": "Bayern",
		  "city_id": 80333,
		  "city": "Muenchen",
		  "address": "80333 Muenchen"
		},
		{
		  "name": " St-Galler-Str 4",
		  "location": {
			"lng": 11.5310798,
			"lat": 48.1600108
		  },
		  "id": 2350575,
		  "county": "Bayern",
		  "city_id": 80637,
		  "city": "Muenchen",
		  "address": "80637 Muenchen"
		}
		...
  ]
}
```

# To Start This Project

### `npm i`

Install all the packages you need by running the command in your terminal.

### create a `.env` file

Create a .env file with the following code and add the provided Api key, in the root of your project.

```
REACT_APP_WEATHER_API_KEY=provided_api_key
```

### `npm run start:frontend`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### `npm run start:backend`

This will start the server on http://localhost:8000.
