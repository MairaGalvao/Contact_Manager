//todo - get the token(key access) for the call api

export function CallApiCities() {
  console.log("alo");
  fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8"
  )
    .then((res) => res.json())

    .then((result) => {
      console.log(result);
    });
}
