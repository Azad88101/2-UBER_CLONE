import React from "react";

const LocationSearchPanel = (props) => {
  const addresses = [

    "123 Main Street, Suite 400, Manhattan, New York, NY 10001, United States",
    "456 Elm Avenue, Apt 12B, Downtown, Los Angeles, CA 90012, United States",
    "789 Oak Lane, Floor 3, Lincoln Park, Chicago, IL 60614, United States",
    "101 Pine Street, Unit 8A, Midtown, Houston, TX 77002, United States",
    "202 Maple Blvd, Tech Park, San Francisco, CA 94107, United States",
    "123 Main Street, Suite 400, Manhattan, New York, NY 10001, United States",
    "456 Elm Avenue, Apt 12B, Downtown, Los Angeles, CA 90012, United States",
    "789 Oak Lane, Floor 3, Lincoln Park, Chicago, IL 60614, United States",
    "101 Pine Street, Unit 8A, Midtown, Houston, TX 77002, United States",
    "202 Maple Blvd, Tech Park, San Francisco, CA 94107, United States",
    "123 Main Street, Suite 400, Manhattan, New York, NY 10001, United States",
    "456 Elm Avenue, Apt 12B, Downtown, Los Angeles, CA 90012, United States",
    "789 Oak Lane, Floor 3, Lincoln Park, Chicago, IL 60614, United States",
    "101 Pine Street, Unit 8A, Midtown, Houston, TX 77002, United States",
    "202 Maple Blvd, Tech Park, San Francisco, CA 94107, United States",
    "123 Main Street, Suite 400, Manhattan, New York, NY 10001, United States",
    "456 Elm Avenue, Apt 12B, Downtown, Los Angeles, CA 90012, United States",
    "789 Oak Lane, Floor 3, Lincoln Park, Chicago, IL 60614, United States",
    "101 Pine Street, Unit 8A, Midtown, Houston, TX 77002, United States",
    "202 Maple Blvd, Tech Park, San Francisco, CA 94107, United States",
    "123 Main Street, Suite 400, Manhattan, New York, NY 10001, United States",
    "456 Elm Avenue, Apt 12B, Downtown, Los Angeles, CA 90012, United States",
    "789 Oak Lane, Floor 3, Lincoln Park, Chicago, IL 60614, United States",
    "101 Pine Street, Unit 8A, Midtown, Houston, TX 77002, United States",
    "202 Maple Blvd, Tech Park, San Francisco, CA 94107, United States",
  ];
const delhiBadarpurAddresses = [
  "123 Main Road, Suite 401, Badarpur, New Delhi, Delhi 110044, India",
  "456 Badarpur Extension, Apt 12B, Badarpur, New Delhi, Delhi 110044, India",
  "789 Mathura Road, Floor 3, Badarpur, New Delhi, Delhi 110044, India",
  "101 Molarband Road, Unit 8A, Badarpur, New Delhi, Delhi 110044, India",
  "202 Meethapur Road, Block C, Badarpur, New Delhi, Delhi 110044, India",
  "321 NTPC Colony, Flat 5C, Badarpur, New Delhi, Delhi 110044, India",
  "654 Lal Kuan, Apt 21C, Badarpur, New Delhi, Delhi 110044, India",
  "876 Harsh Vihar, Floor 5, Badarpur, New Delhi, Delhi 110044, India",
  "135 B-Block Street 4, Unit 10D, Badarpur, New Delhi, Delhi 110044, India",
  "908 Tajpur Pahari, House No. 13A, Badarpur, New Delhi, Delhi 110044, India",
  "121 Gali No. 7, Aali Village, Badarpur, New Delhi, Delhi 110044, India",
  "432 Jaitpur Extension, Floor 2, Badarpur, New Delhi, Delhi 110044, India",
  "567 NTPC Gate No. 2 Road, Apt 7B, Badarpur, New Delhi, Delhi 110044, India",
  "678 Pul Prahladpur Road, Unit 5A, Badarpur, New Delhi, Delhi 110044, India",
  "789 Tanki Road, Floor 4, Badarpur, New Delhi, Delhi 110044, India",
  "101 Madanpur Khadar, Suite 9C, Near Badarpur Border, Delhi 110044, India",
  "202 House No. 22, Meethapur Extension, Badarpur, Delhi 110044, India",
  "303 Gali No. 9, Hari Nagar Extension, Badarpur, Delhi 110044, India",
  "404 Saraswati Kunj, Unit 2B, Badarpur, Delhi 110044, India",
  "505 House No. 55, Block F, Badarpur, Delhi 110044, India",
  "606 Gali No. 3, Tajpur Extension, Badarpur, Delhi 110044, India",
  "707 LIG Flats, Sector 2, Badarpur, Delhi 110044, India",
  "808 Vinobapuri Road, House No. 74, Badarpur, Delhi 110044, India",
  "909 House No. 91, Aali Extension, Badarpur, Delhi 110044, India",
  "111 Street No. 1, Molarband Extension, Badarpur, Delhi 110044, India",
];
  return (
    <div className="p-5">
      {delhiBadarpurAddresses.map((address, index) => (
        <div 
        onClick={()=>{
          props.setVehiclePanel(true);

          props.setPanelOpen(false)
        }}
          key={index}
          className="flex items-center active:border-black  active:border-[2px] rounded-lg  my-5  justify-start gap-3 "
        >
          <div className="bg-[#eee] rounded-full p-2 flex items-center justify-center">
            <i className="ri-map-pin-fill text-2xl"></i>
          </div>
          <h4 className="font-medium">{address}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
