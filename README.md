# BizManager – A Customer Management System

## Overview
**BizManager** is a customer management system designed to streamline business interactions and customer handling. Built with a **Spring Boot** back-end and a **jQuery, HTML, and CSS** front-end, this application provides essential customer-related operations, including adding, updating, and managing customer data efficiently.

---

## Features
- ✅ **Customer Management** – Create, update, and delete customer records.
- ✅ **RESTful API Integration** – Backend services built using Spring Boot with RESTful APIs.
- ✅ **User-Friendly Interface** – Front-end powered by jQuery for smooth interactions.
- ✅ **Database Integration** – Stores customer data securely using MySQL/PostgreSQL.
- ✅ **Data Validation** – Ensures accurate input before storing in the database.
- ✅ **Scalable Architecture** – Designed to be extendable with additional features.

---

## Technologies Used

### Back-End (Spring Boot + Servlets)
- **Spring Boot** – Simplified back-end development with REST APIs.
- **Spring Data JPA** – Database integration with MySQL/PostgreSQL.
- **Servlets** – Manages request-response cycle efficiently.
- **Spring Security (Optional)** – Can be added for authentication and authorization.

### Front-End (jQuery + HTML + CSS)
- **jQuery** – Enhances user interactions and API requests.
- **HTML5 & CSS3** – Structured and styled UI.

---

## Installation

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
    git clone https://github.com/milinda55/bizmanager.git
    cd bizmanager
```
### Step 2: Set Up the Back-End
1. Open the `crud app-backend` folder in **IntelliJ IDEA**.
2. Configure the database connection in `application.properties`:
   ```properties
   spring.datasource.url=${DB_URL}
   spring.datasource.username=${DB_USERNAME}
   spring.datasource.password=${DB_PASSWORD}

3. Run the Spring Boot application:

```bash
  mvn spring-boot:run
```
### Step 3: Set Up the Front-End
1. Navigate to the crud app-frontend folder:

```bash
  cd crud app-frontend
```
2. Open index.html in a browser or use a simple web server to run it.

## Usage
- **Add New Customers:** Input detailed customer information and save it to the database.

- **Edit or Delete Records:** Update or remove existing customer records.

- **View Customer Details:** Dynamically display customer information using jQuery.

- **RESTful API Communication:** Front-end interacts with the back-end through RESTful APIs.

## Future Enhancements
🚀 Role-Based Authentication – Secure the system with user roles.

🚀 Advanced Reporting – Generate customer insights and reports.

🚀 Email Notifications – Notify customers automatically about updates.

🚀 Cloud Deployment – Deploy using AWS or Heroku.

## License
This project is licensed under the MIT License - see the [MIT LICENSE](LICENSE.txt) file for details.

## Acknowledgments
- Built to simplify customer management for businesses.
- Inspired by modern CRM solutions with an easy-to-use approach.