# TruthLens Backend

This folder contains the backend API services for the TruthLens project, built with Node.js and Express.

## Architecture

The backend provides API endpoints to process input data (Text, URLs, and Images) and orchestrate the AI forensic analysis pipeline.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the backend directory and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file for your environment variables (e.g., API keys, database URLs):
   ```env
   PORT=5000
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`.

## API Endpoints

- `GET /api/health`: Health check endpoint to verify the server is running.
- `POST /api/analyze`: Submit content (text, url, or image) for deepfake/misinformation analysis.
