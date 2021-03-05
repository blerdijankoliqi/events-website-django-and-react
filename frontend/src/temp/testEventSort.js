// import djangoAPI from '../api/djangoAPI';
// import axios from 'axios';
const axios = require('axios');

const adaptEvent = (festEvent) => {
  const splitStartTime = festEvent.start_time.split(':');
  const startHours = splitStartTime[0];
  const startMinutes = splitStartTime[1];

  const splitEndTime = festEvent.end_time.split(':');
  const endHours = splitEndTime[0];
  const endMinutes = splitEndTime[1];

  return {
    id: festEvent.id,
    eventName: festEvent.event_name,
    day: parseInt(festEvent.day),
    startTime: {
      hours: startHours,
      minutes: startMinutes,
    },
    endTime: {
      hours: endHours,
      minutes: endMinutes,
    },
    description: festEvent.description,
    eventImg: festEvent.event_img,
    host: festEvent.host,
    stage: festEvent.stage,
  };
};

const sortEventsFunction = (firstEvent, secondEvent) => {
  if (firstEvent.day > secondEvent.day) {
    return 1;
  }
  if (firstEvent.day === secondEvent.day) {
    if (firstEvent.startTime.hours > secondEvent.startTime.hours) {
      return 1;
    }
    if (firstEvent.startTime.hours === secondEvent.startTime.hours) {
      if (firstEvent.startTime.minutes > secondEvent.startTime.minutes) {
        return 1;
      }
      if (firstEvent.startTime.minutes === secondEvent.startTime.minutes) {
        if (firstEvent.endTime.hours > secondEvent.endTime.hours) {
          return 1;
        }
        if (firstEvent.endTime.hours === secondEvent.startTime.hours) {
          if (firstEvent.startTime.minutes > secondEvent.startTime.minutes) {
            return 1;
          }
        }
      }
    }
  }
  return -1;
};

const fetchEvents = async () => {
  const { data } = await axios.get('http://localhost:8000/api/showEvents/');
  console.log(data.map((event) => adaptEvent(event)).sort(sortEventsFunction));
};

fetchEvents();
