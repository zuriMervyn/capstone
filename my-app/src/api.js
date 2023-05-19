
export function fetchAPI(date) {
    // Logic to fetch available times based on the selected date
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
        resolve(times);
      }, 1000);
    });
  }
  
  export function submitAPI(formData) {
    // Logic to submit form data to the API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          occasion: formData.occasion,
        };
        resolve(data);
      }, 1000);
    });
  }
  