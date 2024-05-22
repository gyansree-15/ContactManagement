# Contact Management App with Charts and Maps

This is a contact management app built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query from the TanstackQuery library. The app allows you to manage your contacts and also provides interactive charts and maps to visualize COVID-19 data.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![GIT BADGE](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GITHUB BADGE](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)


## Objective: Page Contacts 
- Form for adding new contacts.
- Display a list of all added contacts.
- Each contact has a button to view their details.
- Edit and delete contacts functionality.
- Redux is used to store the contact data.

## Objective: Page Charts and Maps 
The app features a simple dashboard with the following components:
- Line Graph : A line graph displaying the fluctuations in COVID-19 cases over time.
- React Leaflet Map : An interactive map with markers that indicate country-specific COVID-19 data. The markers display the country name, total number of active, recovered cases, and deaths as a popup.

## Data Sources  
The COVID-19 data is fetched from the following APIs:

- World-wide COVID-19 cases: `https://disease.sh/v3/covid-19/all`
- Country-specific COVID-19 cases: `https://disease.sh/v3/covid-19/countries`
- Historical COVID-19 graph data: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
