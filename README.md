
# Flight Reservation System (Django + Angular + MySQL)

A full-stack flight reservation application built using **Django REST Framework** for the backend, **Angular** for the frontend, and **MySQL** as the database. Users can search for flights, book reservations, and view confirmed bookings.

## Features

* Search flights by departure city, arrival city, and date.
* Book flights with passenger details.
* View reservation confirmation.
* Backend API built with Django REST Framework.
* Frontend built with Angular communicating with the backend.
* Environment-based configuration for secure handling of sensitive data.

## Tech Stack

* **Backend:** Django, Django REST Framework, MySQL
* **Frontend:** Angular, HTML, CSS
* **Other Tools:** Python virtual environment, Node.js & npm

## Setup Instructions

### Backend (Django)

1. Clone the repository:


   git clone https://github.com/charankumar832/flight_reservation_drf_mysql_angular.git
   cd flight_reservation_drf_mysql_angular/flight_reservation_mysql_angular

2. Create and activate a Python virtual environment:

   python -m venv virtual
   virtual\Scripts\activate     # Windows
   source virtual/bin/activate  # Linux / Mac

3. Install backend dependencies:

   pip install -r requirements.txt


4. Create a `.env` file (ignored in Git) with:

   #TEXT
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   SECRET_KEY=your_django_secret_key
   

5. Apply migrations:
   
   python manage.py migrate
   

6. Start the Django server:

   python manage.py runserver

### Frontend (Angular)

1. Navigate to the Angular project:

   cd flight_reservation_angular_app


2. Install dependencies:

  
   npm install


3. Update environment variables (optional, only for development) in `src/environments/environment.ts`:

   export const environment = {
     production: false,
     apiUrl: 'http://127.0.0.1:8000/'
   };

4. Serve the Angular app:

   ng serve -o


5. Access the app at [http://localhost:4200](http://localhost:4200).

## Notes

* Sensitive information (database credentials, Django secret key) is stored in `.env` and ignored in Git.
* Angular environments allow secure separation of development and production settings.
* `requirements.txt` ensures all backend dependencies are installed easily.


