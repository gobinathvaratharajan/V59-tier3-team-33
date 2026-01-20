# Backend Setup

## Prerequisites

- Install [uv](https://github.com/astral-sh/uv): `curl -LsSf https://astral.sh/uv/install.sh | sh`
- Python 3.14 (managed by uv via `.python-version`)

## Local Setup

1. **Install dependencies:**
   ```bash
   uv sync
   ```

2. **Run migrations:**
   ```bash
   uv run python manage.py migrate
   ```

3. **Start development server:**
   ```bash
   uv run python manage.py runserver
   ```

## Common Commands

- Run any Django command: `uv run python manage.py <command>`
- Add a dependency: `uv add <package>`
- Update dependencies: `uv sync`
