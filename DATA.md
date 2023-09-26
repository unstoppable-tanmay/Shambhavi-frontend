## Route

```
{
    "route_id": "ROUTE23412"
    "source": "fromLocation",
    "destination": "toLocation",
    "bus_number": "BUS673251",
    "departure_time": "12.45",
    "arival_time": "3.56",
    "intermideate_places": ["fromLocation","midLocation1","midLocation2","toLocation"]
}
```

## Bus-Info

```
{
    "bus_number": "BUS673251",
    "bus_name": "HRTC-1",
    "model": "Volvo-23d",
    "seat_capacity": 60,
    "seat_model": "model-1",
    "emmission_cirtificate": "BS-4/2019",
    "driver": [driver_id,driver_id]    // defined in next table
}
```

## Driver Info
```
{
    "driver_id": "DRIVER87213",
    "driver_name": "Nikunja bihari Das",
    "driver_phone": "+91 87567 78456",
    "address": "yahan Wahan Me Kahin Vi Rehejata Hun",
}
```

## Bookings

```
{
    "pnr": "2189461248",
    "route_id": "ROUTE23412"
    "bus_number": "BUS673251",
    "from_to": ["from_location","to_location"],
    "travellers": [
        {
            "name": "Me hun Kon",
            "age": 12,
            "sex": Male|Female
        },
    ],
    "email": "someexapmplemail@gmail.com",
    "date": DATE(12-04-2023),
    "expire": DATE(12-04-2023) + ms('1d'),
}
```

