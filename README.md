# AOG.md

Production website for **AOG Moldova / UniversCargo**, providing 24/7 emergency aviation logistics support for Aircraft on Ground (AOG) situations at Chișinău International Airport (RMO) and beyond.

**Live website:** https://aog.md

## Project Goal

The goal of this project was to design, develop, and publish a dedicated digital entry point for urgent **Aircraft on Ground (AOG)** logistics requests in Moldova.

In aviation logistics, an AOG situation means that an aircraft is unable to operate until a technical issue is resolved. Delivering the required spare parts as quickly as possible is therefore highly time-critical.

The website was designed around this business requirement: allowing airlines, operators, maintenance organizations, and logistics partners to immediately identify available services and contact the AOG team with minimal friction.

## Business Context

The website represents the AOG logistics services of **UniversCargo**, with a particular focus on operations at **Chișinău International Airport (RMO)**.

The solution was built as a focused business landing page rather than a general corporate website.

Its main objectives are to:

- establish a dedicated online presence for AOG logistics in Moldova;
- clearly communicate 24/7 availability;
- present emergency transportation solutions;
- provide immediate contact channels;
- reduce the number of steps required to submit an urgent shipment request;
- improve search-engine discoverability for AOG-related services in Moldova.

## Main Features

### AOG Service Presentation

The website presents emergency logistics solutions such as:

- AOG logistics at Chișinău International Airport;
- express air freight;
- dedicated EU–Moldova road transportation;
- onboard courier / hand-carry solutions.

### Immediate Contact Channels

Because AOG operations are highly time-sensitive, the website provides several direct communication channels:

- Phone
- Email
- WhatsApp
- Telegram
- Viber

The mobile interface additionally emphasizes quick access to contact actions.

### Urgent Quote Form

Visitors can submit an urgent AOG request directly through the website.

The form collects:

- Name
- Company
- Email
- Phone / WhatsApp
- Shipment details

Requests are processed through a **Netlify serverless function**.

The backend:

1. receives the submitted request;
2. sends the AOG inquiry to the UniversCargo operations team;
3. sends an automatic confirmation email to the customer.

Transactional email delivery is implemented using **Resend**.

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Responsive design
- Custom animations and UI interactions

### Backend

- Netlify Functions
- Node.js
- Resend API

### Deployment

- Netlify
- Custom `.md` domain
- DNS configuration
- HTTPS
- Environment variables

## Project Structure

```text
AOG/
│
├── index.html
├── package.json
├── package-lock.json
│
└── netlify/
    └── functions/
        └── send-email.js
