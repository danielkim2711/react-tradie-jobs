# Tradie Jobs

<img width="80%" src="./src/assets/images/preview.png" alt="tradie jobs" />

<br />

## Requirements

This is an application that allows a tradie (plumbers, electricians) to see their jobs.

Jobs have the following information associated with them:

- Unique job identifier.
- Status: one of "scheduled", "active", "invoicing", “to priced” or “completed”.
- A creation date and time.
- And some general information like name and contact details of the client.

The Tradie can also take notes for each job. A job can have no to several notes associated with them.

The Tradie should be able to:

- Filter and sort the list of jobs.
- Click on a job in the list to view their details and add/edit notes for that job.
- Change the status of a job.

## How to run this application

Please clone this repository and run these commands:

```
npm install or npm ci
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

<h3>:star: List of Packages Used</h3>
<a href="https://www.npmjs.com/package/uuid">uuid</a>
<br/>
<a href="https://www.npmjs.com/package/react-icons">React Icons</a>
<br/>
<a href="https://www.npmjs.com/package/react-toastify">React Toastify</a>

<h3>:star: Design Inspiration</h3>
<a href="https://www.tech5.co.nz/jobs">Tech5</a>
