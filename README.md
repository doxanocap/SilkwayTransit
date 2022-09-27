# KazSilkwayTransit

### I've contributed to this project by writing backend using Golang and frontend using React.

We have created a Web Application to track the whole road of the railway company Kaz Silkway Transit trains and create connections between the train driver and All Stations across the country. Every time the Driver comes to work, takes the train, or passes through a particular station, the driver waits for approval from the station admin.

We have implemented REST API architecture using C# and Golang for the project's backend while handling all GET and POST requests from the Frontend using React and Vanilla JavaScript.

I have designed the architecture of our database since we need to collect a large amount of data about drivers, trains, stations, roads, and handling approvals from the station admin.  Overall we had 5 tables in PostgreSQL and set connections between each of them.

I have implemented authentification with password hashing and storing user information in the cookies using JWT/bcrypto packages.  Also, I developed a process of approval from the System Admins of stations, every time a train driver sends a request about arrival to the station. Also, every driver provides information about the train's current state: the amount of fuel left, weight, distance passed, and arrival time.  Everything written by the driver is recorded in our database and sent to the main admin of the station.

## Stack: Golang, C#, React, JavaScript, HTML,CSS, Insomnia, Postgres
## Packages: gin-gonic/gin, gorilla/websockets, lib/pq, net/http, jwt4, gin-gonic/cors
