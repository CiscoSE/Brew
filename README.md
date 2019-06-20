# Brew
[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/CiscoSE/Brew)

## Introduction
Following our mantra of ‘simplifying everything’, Brew removes the need for a separate IP phone in your meeting rooms to place an order with the canteen staff. Now, with a few taps on your personal Dx or the touch panel of a Room Device, you can easily place an order with the canteen. The staff in the canteen can view the order in real-time via a website and service it.

## Table of contents
* [Components](#components)
* [Prerequisite](#Prerequisite)
* [Setup](#setup)


## Components
* Any Cisco Video Endpoint with a Touch 10 panel or a Dx80. For more information on supported devices visit:   https://help.webex.com/en-us/n18glho/In-Room-Controls-and-Use-of-an-External-Video-Switch-with-Room-Devices


## Prerequisite
* NodeJS installed on your laptop: https://nodejs.org/en/download/
* MeteorJS installed on your laptop: https://blog.ajduke.in/2015/09/29/guide-to-meteor-install-and-uninstall/
* You must have admin access to the Cisco Endpoint


## Setup
To run this project, complete the following steps:

### Step 1
Create a User on the endpoint. To do this, you need to access the admin panel of the device. Add a new User with username and password as **integrator**.

![alt text](https://user-images.githubusercontent.com/12582569/54212591-2e943d80-4509-11e9-8978-28a5e3188387.png)

### Step 2
Clone the repository using the following command
```
$ git clone https://github.com/CiscoSE/Brew.git
```

### Step 3
Upload the XML File **roomcontrolconfig.xml** available in the repository to the system. To do so, visit the admin panel of the device. Under **Integrations**, click **In-room Control** and launch the Editor. Upload the XML file to the endpoint.

![alt text](https://user-images.githubusercontent.com/12582569/54215654-4b7f3f80-450e-11e9-9217-fb998c876d8f.png)

### Step 4
Make the change to IP address in the **main.js**.
```
const ipAddress = "ssh://ENDPOINT_IPADDRESS"
```

### Step 6
Install Dependencies
```
$ meteor npm install
```

### Step 7
Run the code
```
$ meteor
```
