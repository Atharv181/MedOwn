# MedOwn

MedOwn is a decentralized medical record management system built on blockchain technology. It aims to empower patients by providing them with ownership and control over their medical
records, ensuring privacy, security, and easy access. Now Patient can earn money by selling his data using NFT's

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

MedOwn revolutionizes the way medical records are managed and accessed. It allows patients to securely store their medical records on a blockchain, granting them full control over who can access and modify their data. With MedOwn, patients can easily share their medical history with healthcare providers, reducing redundancy, improving treatment accuracy, and ensuring privacy.

## Features

- **Decentralized Storage**: Medical records are stored on a blockchain, ensuring security, immutability, and redundancy.
- **Patient Ownership**: Patients have full ownership and control over their medical records.
- **Privacy Protection**: Patient data is encrypted, and access is granted only to authorized individuals.
- **Permissioned Access**: Patients can grant healthcare providers or other authorized parties access to their medical records.
- **Auditable History**: Every change or access to medical records is recorded on the blockchain, creating a transparent and auditable history.

## Installation

To install and run MedOwn, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/Atharv181/MedOwn.git

2. Change directory to MedOwn and install project dependencies
 
     ```shell 
     cd MedOwn
     npm i
3. Configure Environment Variables
   - Create a .env file in the root directory of the project.
   - Add the following environment variables to the .env file and replace the values accordingly.
  
     ```shell
     
     METAMASK_PRIVATE_KEY='YOUR_METAMASK_PRIVATE_KEY'

     PINATA_API_KEY='YOUR_PINATA_API_KEY'

     PINATA_SECRETE_KEY='YOUR_PINATA_SECRETE_API_KEY'

     QUICKNODE_URL="YOUR_QUICKNODE_ENDPOINT_URL"

     ALCHEMY_ID='YOUR_ALCHEMY_ID'

Quicknode and Alchemy are Node providers, you can choose according to your convenience, In this project we are going with quicknode.

Note: Make sure you add .env to gitignore file as it contains your metamask private key and other secrete api keys, so that it won't be exposed to the internet.

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are greatly appreciated.

## License

Med-Own is licensed under the MIT License 
