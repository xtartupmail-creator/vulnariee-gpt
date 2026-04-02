CREATE TABLE IF NOT EXISTS lab_users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user'
);

INSERT INTO lab_users (username, email, role)
VALUES
  ('alice', 'alice@example.local', 'user'),
  ('bob', 'bob@example.local', 'analyst'),
  ('carol', 'carol@example.local', 'admin')
ON CONFLICT DO NOTHING;
