The Automatic Lighting System is an IoT/embedded systems project designed to automatically control lighting based on environmental conditions such as ambient light levels and/or human presence. The system helps reduce energy consumption by turning lights on only when needed and switching them off when sufficient natural light is available or when no occupancy is detected.

Features :

Automatic ON/OFF control of lights
Ambient light sensing using an LDR (Light Dependent Resistor)
Energy-efficient operation
Real-time monitoring of light conditions
Simple and cost-effective design
Suitable for homes, offices, classrooms, and smart buildings
Hardware Components :

Microcontroller (Arduino Uno/Nano, ESP8266, ESP32, etc.)
LDR (Light Dependent Resistor)
Relay Module
LED/Bulb
Resistors
Breadboard and Jumper Wires
Power Supply
Working Principle :

The LDR continuously measures the surrounding light intensity.
The microcontroller reads the sensor values.
When the ambient light level falls below a predefined threshold, the system automatically turns the light ON.
When sufficient natural light is detected, the system turns the light OFF.
This process runs continuously, ensuring efficient lighting control without manual intervention.
Applications :

Smart homes
Street lighting systems
Office buildings
Educational institutions
Warehouses and storage facilities
Energy-saving automation projects
Benefits :

Reduces electricity consumption
Minimizes human intervention
Extends the lifespan of lighting devices
Improves convenience and automation
Supports sustainable energy usage
Future Enhancements :

Mobile app monitoring and control
IoT cloud integration for remote access
Motion detection using PIR sensors
Brightness adjustment with PWM control
Energy usage analytics and reporting
Project Structure :

Automatic-Lighting-System/
│
├── src/                 # Source code
├── circuit_diagram/     # Circuit diagrams and schematics
├── images/              # Project images
├── documentation/       # Additional documentation
└── README.md
