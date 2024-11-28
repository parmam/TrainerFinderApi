# TrainerFinder API

Backend API for the TrainerFinder application built with Node.js, Express, TypeScript, and Prisma.

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)
- Yarn package manager

## Project Structure

```
src/
├── config/         # Configuration files and environment variables
├── controllers/    # Route controllers
├── services/       # Business logic
├── models/         # Data models and types
├── repositories/   # Database queries and data access
├── routes/         # API routes
├── middlewares/    # Express middlewares
└── utils/          # Utility functions and helpers
```

## Environment Setup

The project supports three environments:

- Development (local development)
- Staging (pre-production testing)
- Production (live environment)

### Environment Files

1. Copy the example environment file:

```bash
cp .env.example .env.development   # For development
cp .env.example .env.staging       # For staging
cp .env.example .env.production    # For production
```

2. Update the environment variables in each file according to your needs.

## Available Scripts

### Environment Management

```bash
# Set up development environment
yarn dev:env

# Set up staging environment
yarn staging:env

# Set up production environment
yarn prod:env
```

### Development Environment

```bash
# Start development containers
yarn dev:up

# Build and start development containers
yarn dev:up:build

# Stop development containers
yarn dev:down
```

### Staging Environment

```bash
# Start staging containers
yarn staging:up

# Build and start staging containers
yarn staging:up:build

# Stop staging containers
yarn staging:down
```

### Production Environment

```bash
# Start production containers
yarn prod:up

# Build and start production containers
yarn prod:up:build

# Stop production containers
yarn prod:down
```

### Database Management

```bash
# Generate Prisma client
yarn prisma:generate

# Run database migrations
yarn prisma:migrate
```

### Development Tools

```bash
# Start development server with hot-reload
yarn dev

# Build the project
yarn build

# Start production server
yarn start

# Run tests
yarn test

# Run linter
yarn lint
```

### Docker Management

```bash
# Remove unused Docker resources
yarn docker:prune

# Complete cleanup (images, containers, and volumes)
yarn docker:clean
```

## Quick Start Guide

1. Clone the repository:

```bash
git clone [repository-url]
cd trainerfinder-api
```

2. Install dependencies:

```bash
yarn install
```

3. Set up development environment:

```bash
# Copy environment file
cp .env.example .env.development

# Set up development environment
yarn dev:env

# Start development containers
yarn dev:up:build
```

4. The API will be available at `http://localhost:3000`

## Environment-Specific Configurations

### Development

- Hot-reloading enabled
- Debug logging
- Local database on port 5432
- Generous rate limits
- Long-lived JWT tokens

### Staging

- Pre-production environment
- Info level logging
- Database on port 5433
- Moderate rate limits
- 24-hour JWT tokens

### Production

- Optimized build
- Minimal logging
- Database on port 5434
- Strict rate limits
- 12-hour JWT tokens
- Multiple API replicas

## Database Management

Each environment has its own database:

- Development: `trainerfinder_dev`
- Staging: `trainerfinder_staging`
- Production: `trainerfinder_prod`

## Docker Volumes

Persistent data is stored in Docker volumes:

- Development: `postgres_data_dev`
- Staging: `postgres_data_staging`
- Production: `postgres_data_prod`

## Security Notes

1. Never commit `.env` files to version control
2. Use strong passwords in staging and production
3. Change default database credentials
4. Keep dependencies updated
5. Follow security best practices for production deployment

## Troubleshooting

1. If containers won't start:

```bash
# Clean up Docker resources
yarn docker:clean

# Try rebuilding
yarn dev:up:build
```

2. If database connection fails:

```bash
# Check if database container is running
docker ps

# Check database logs
docker compose logs db
```

3. For permission issues:

```bash
# Make scripts executable
chmod +x scripts/set-env.sh
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT
