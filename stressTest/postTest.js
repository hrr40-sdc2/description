import http from 'k6/http';
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 300  }
  ]
};

export default function() {
  let url = "http://localhost:3010/api/houses";
  let payload = JSON.stringify({
    title: "Home in Etobicoke",
    is_entire_place: true,
    location: "Toronto",
    super_host_name: "Kevin Johnson",
    super_host_photo: "https://hrr40-sdc-images.s3.us-east-2.amazonaws.com/sdc-house-images/houseimage1.jpg",
    rating: 4,
    desc: "Lovely 4 bedroom house in Etobicoke",
    space_desc: "not a lot of space, don't bring big guests",
    guest_desc: "Maximum guests for this location is 10 people",
    other_desc: "Don't ask about the last occupants that went missing"
  });
  let params =  { headers: { "Content-Type": "application/json" } };
  let request = http.post(url, payload, params);
  check(request, {
    "status was 201": (r) => r.status == 201,
    "transaction time OK": (r) => r.timings.duration < 1000
  });
};