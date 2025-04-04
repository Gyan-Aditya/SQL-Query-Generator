# SQL Query Generator

## Overview

The SQL Query Generator is a web-based application designed to convert natural language inputs into SQL queries. This tool aims to simplify database interactions by allowing users to describe their data needs in everyday language, which the application then translates into precise SQL commands.

## Features

- **Natural Language Processing**: Input queries in plain English to generate corresponding SQL statements.
- **User-Friendly Interface**: Intuitive design for seamless user experience.
- **Real-Time Query Generation**: Immediate SQL output upon input submission.
- **Customizable Database Connections**: Configure connections to various database systems as needed.
  
## 🛠️ Tech Stack

**Client:** React, Tailwind CSS (or your styling library)  
**Server:** Node.js, Express  
**AI Model:** OpenAI GPT-4o (or GPT-3.5-turbo)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Gyan-Aditya/SQL-Query-Generator.git
   ```
2. **Navigate to the Project Directory**:
```bash
cd SQL-Query-Generator
```
  
3. **Install Dependencies**:
   -For server:
  ```bash
    cd server
    npm install
  ```
 -For client:
   ```bash
     cd ../client
     npm install
   ```
## Running the application


1. **Start the server**:
```bash
cd server
npm start
```

2. **Start the Client**:
   ```bash
   cd client
   npm run dev
   ```
3. **Access the application**:
   Open your browser and navigate to http://localhost:5174 to use the SQL Query Generator. For local, server will be at http://localhost:3005.

## Preview
![Screenshot 2025-04-04 215330](https://github.com/user-attachments/assets/c6fd60e2-4d9a-40c1-9573-ab48e4d7299b)

## License
This project is licensed under the MIT License. See the [MIT License](LICENSE) file for details.

## Acknowledgment
Special thanks to all contributors and the open-source community for their invaluable support and resources.

 
   
