# Best Cars Dealership Review Website

This project is the Capstone for the IBM Full Stack Software Developer Professional Certificate, completed in April 2024. The project involves developing a full-stack website for Best Cars Dealership, a national car dealership with branches across the US. The website serves as a central platform for dealership reviews and includes a robust backend, various microservices, and CI/CD pipelines.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

In this capstone project, I worked as a full-stack developer to build a website that enables users to:
- View dealership locations across the US.
- Post and read dealership reviews with sentiment analysis.
- Manage user registration and authentication.

The project includes both frontend and backend components, with services for CI/CD and container orchestration using Kubernetes and Docker.

## Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, React
- **Backend**: Python, Django, SQLite
- **Microservices**: 
  - Sentiment Analysis Service: Python, Flask, Natural Language Toolkit (NLTK)
  - Dealership and Review Service: Node.js, Express, MongoDB
- **CI/CD**: Git, GitHub Actions
- **Deployment**: Docker, Kubernetes, IBM Cloud Code Engine

## Features

1. **Static Pages**:
   - **Homepage**: Overview of Best Cars Dealership.
   - **About Us**: Mission, values, and leadership team.
   - **Contact Us**: Contact details including phone, email, and address.

2. **User Authentication**:
   - **Registration and Login**: Users can sign up or log in to access features like posting reviews.
   
3. **Dealership Listings**:
   - **View Dealerships**: Accessible to all users; displays dealership locations.
   - **State-Wise Filtering**: Allows users to filter dealerships by state.

4. **Dealership Reviews**:
   - **View Reviews**: All users can view reviews of each dealership.
   - **Write Reviews**: Registered users can post reviews with details like car make, year, and sentiment analysis.

5. **Sentiment Analysis**:
   - A microservice powered by Flask and NLTK provides sentiment analysis for reviews.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PromiseUgochukwuNnanemere/xrwvm-fullstack_developer_capstone.git
   cd xrwvm-fullstack_developer_capstone

2. **Install Dependencies**:

   - For Python (Django backend and sentiment analysis):
     ```bash
     pip install -r requirements.txt
     ```
   - For Node.js (Express dealership and review service):
     ```bash
     cd dealership-service
     npm install
     ```

3. **Set Up Databases**:

   - Initialize SQLite and MongoDB databases as required.

4. **Run Services**:

   - Start Django backend, Flask microservice, and Node.js service as separate processes.

5. **Deploy**:

   - Optionally deploy using Docker and Kubernetes (refer to `docker-compose.yml` and `k8s/` folder).

## Usage

Visit the homepage to browse dealerships and reviews, or register and log in to post a review. State filtering and sentiment insights enhance the user experience, making it easy to explore dealership feedback nationwide.

## Contributing

Contributions are welcome! Please open an issue or create a pull request to suggest improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

