# Mohamed Amin Smida Laravel Developer Portfolio

A modern, responsive portfolio website showcasing my Laravel development skills and projects.

## Features

- **Modern UI** with animations using Framer Motion
- **Responsive design** with Tailwind CSS
- **Light/Dark mode** toggle
- **Multi-language support** (English, French, Arabic)
- **3D elements** using Three.js
- **Contact form** with email functionality
- **Mobile-friendly** navigation
- **Blog section** to showcase Laravel articles
- **Testimonials section** to display client feedback

## Technologies & Skills Highlighted

- Laravel
- Livewire
- Filament
- Alpine.js
- Tailwind CSS
- TALL Stack
- MySQL
- PHP
- Blade Templates
- Eloquent ORM

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables (for email functionality):
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   ```

## Deployment

This portfolio is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Customization

- Update personal information in `lib/data.ts`
- Modify language translations in the `messages` directory
- Replace project images in the `public/images` directory
- Update your CV at `public/CV.pdf`
