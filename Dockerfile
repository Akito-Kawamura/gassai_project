# ---- Builder ----
FROM python:3.7 as builder

RUN pip install pipenv
RUN python -m venv /venv

ENV PATH="/venv/bin:$PATH"

COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ---- Release  ----
ENV PORT 8080
FROM python:3.7-alpine as gassai-pro

COPY --from=builder /venv /venv

WORKDIR /root

COPY app/*.py .
COPY app/pymod ./pymod/
COPY app/html ./html/

ENV PYTHONPATH="." PATH="/venv/bin:$PATH"

CMD gunicorn -b 0.0.0.0:${PORT:-8080} main:app
