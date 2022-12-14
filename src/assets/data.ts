import { DoctorsList } from 'src/app/types/doctors';

export const DOCTORS_DATA: Array<DoctorsList> = [
    {
        "id": 1,
        "name":"Dr. John Doe",
        "org":"Kings London Hospital",
        "availability":{
            "sun": "10:00 AM - 06:00 PM",
            "wed": "06:00 PM - 09:00 PM"
        },
        "visitDurationInMin": 15 
    },
    {
        "id": 2,
        "name":"Dr. Mary Ellis",
        "org":"ABC Hospital",
        "availability":{
            "sun": "10:00 AM - 06:00 PM",
            "mon": "09:00 PM - 11:00 PM",
            "thu": "11:00 AM - 02:00 PM"
        },
        "visitDurationInMin": 30 
    },
    {
        "id": 3,
        "name":"Dr. ABC XYZ",
        "org":"ABC Hospital",
        "availability":{
            "mon": "09:00 PM - 11:00 PM",
            "thu": "11:00 AM - 02:00 PM"
        },
        "visitDurationInMin": 30 
    }
]