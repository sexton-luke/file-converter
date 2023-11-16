# Media Converter

## Overview

Fullstack application to upload and convert files from one format to another using NextJS (frontend) and FastAPI (python)/Go backend. Please see below for supported conversions.

### Supported Conversions

- `jpg` <--> `png`
- `mp3` <--> `wav`
- `mp4` <--> `avi`

## Getting Started

### Frontend

```bash
cd frontend
```

#### Environment Variables:

- Add `.env.local` file at the root of the `frontend` directory.
- Copy contents from `.env-template` into `.env.local` file.

```bash
# Subsitute pnpm with your package manager (npm, yarn, bun)
pnpm install && pnpm run dev
```

### Backend

```bash
cd backend
```

#### Python API

#### Important! - ffmpeg

- When converting `avi/mp3/mp4/wav`, the backend server requires **[ffmpeg](https://github.com/jiaaro/pydub#getting-ffmpeg-set-up)** to be installed for python **[pydub](https://pydub.com/)** and **[moviepy](https://zulko.github.io/moviepy/)** packages to work properly.

```bash
# MacOS (homebrew)
brew install ffmpeg

# Linux
apt-get install ffmpeg libavcodec-extra

# Windows (choco)
choco install ffmpeg
```

```bash
# Install python dependencies
pip install -r requirements.txt

# Start server - Defaults to port 8000
uvicorn main:app --reload
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Media Converter!
