
import { timestampConvertor , meanTemperature} from './functions.js';
import { coordData,resumeCard } from './tags.js';
import { plot } from './plots.js';
import { forecast ,forecast3hours } from './forecasts.js';


const apiKey ="0ecda526c9c0b753226bce63f940887d"
let averageTempByDay={}
let averageWindSpeedByDay={}
const citySelect = document.getElementById("citySelect"); 
const citySbmitBtn = document.getElementById('submitCity');
const main = document.querySelector('main');
const header = document.querySelector('header');

const resumecardDisplayer = document.createElement('div');
resumecardDisplayer.id = "resumecardDisplayer";
resumecardDisplayer.className ="resumecardDisplayer"

const resumecardDisplayer3hours = document.createElement('div');
resumecardDisplayer3hours.id = "resumecardDisplayer3hours";
resumecardDisplayer3hours.className ="resumecardDisplayer"

const plots = document.createElement('div');
plots.className ="plots";
const tempPlot = document.createElement('div');
tempPlot.id = "tempPlot";
tempPlot.className ='plot';
const windPlot = document.createElement('div');
windPlot.id = "windPlot";
windPlot.className ='plot'

//title sections
//title forcast per day
let titleAverage = document.createElement('h2');
titleAverage.className = 'titleSection';
titleAverage.innerText = '5 Days Extended Forecast ';
titleAverage.style.display= 'none';
//title forcast graph
let titleplots = document.createElement('h2');
titleplots.className = 'titleSection';
titleplots.innerText = 'Forcasts Per Hour Over 5 Days ';
titleplots.style.display= 'none';

const searchEvent = () =>{
    const cityName = citySelect.value
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    fetch(geoApi)
    .then(response => response.json())
    .then(data=> {
     
        citySelect.innerText="";
        
        let lat = Object.values(data[0])[2];
        let lon = Object.values(data[0])[3];
        document.body.style.display='block';
        forecast(lat,lon,averageTempByDay,averageWindSpeedByDay,resumecardDisplayer);
        titleAverage.style.display='block';
        titleplots.style.display='block';
        forecast3hours(lat,lon,resumecardDisplayer3hours);
    })
    .catch(error => {
      console.log('There was an error!', error);
    });
}
//fetch api 
citySbmitBtn.addEventListener('click',searchEvent);
citySelect.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchEvent();
   
    }
  });

  

  
main.append(titleAverage)
main.append(resumecardDisplayer)
main.append(titleplots)
plots.append(tempPlot)
plots.append(windPlot)
main.append(plots)





