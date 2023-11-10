# Media Converter

## Overview

Fullstack application to upload and convert files from one format to another using NextJS (frontend) and FastAPI (python)/Go backend. Please see below for supported conversions.

### Supported Conversions

- `jpg` <--> `png`
- `mp3` <--> `wav`
- `mp4` <--> `avi`

## Getting Started

First, ensure all dependencies are installed:

```bash
# Frontend
cd frontend

# Subsitute pnpm with your package manager (npm, yarn, bun)
pnpm install && pnpm run dev

# Backend -- Python API
cd backend && cd python_api

# Install python dependencies
pip install -r requirements.txt

# Start server - Defaults to port 8000
uvicorn main:app --reload

# Backend -- Go API
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Media Converter!

## TODO Tasks

- Update favicon
- Implement Go backend
