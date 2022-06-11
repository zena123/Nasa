const API_URL = 'http//localhost:8000';

async function httpGetPlanets() {
  /* 
  our client and server are on deifferent ports
  built in fetch to our browser,
  fetch return a promise object 
  we are return in controller json , array of js objects 

  SO LOAD PLANETS AND RETURN JSON
  */
  const response = await fetch(`${API_URL}/planets`);
  return response.json(); // return promise too

}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};