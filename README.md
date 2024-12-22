# Pika

## Overview
This app connects renters seeking roommates to save on rent and helps apartments or houses find renters more quickly. Users can join a waitlist for specific rooms, set preferences for compatibility, and connect with others once a waitlist is filled. Landlords and apartment owners can also benefit by quickly finding suitable tenants.

## Features
- **Waitlist System**: Users can add their names and information to a waitlist for a specific room.
- **Compatibility Filters**: Set filters to avoid certain types of people based on preferences.
- **Automatic Matching**: Once the waitlist matches the room's capacity, users can connect with each other.
- **Landlord Contact**: Facilitate communication with landlords or apartment owners to arrange visits.

## Tech Stack
- **Frontend**: React.js (with Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pika.git
   cd pika
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file at the root and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development servers:
   - Backend:
     ```bash
     npm run start:backend
     ```
   - Frontend:
     ```bash
     npm run dev
     ```

## Usage
- Open `http://localhost:5173` in your browser (Vite default port).
- Browse available rooms, join waitlists, and connect with others once matched.
- Landlords can manage listings via the admin panel.

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, feel free to open an issue or contact the repository maintainer at [your-email@example.com](mailto:your-email@example.com).
