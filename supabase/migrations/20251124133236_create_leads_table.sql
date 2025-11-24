/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Identificador único do lead
      - `name` (text) - Nome completo do lead
      - `email` (text) - E-mail de contato
      - `phone` (text) - Telefone de contato
      - `project` (text) - Empreendimento de interesse
      - `message` (text) - Mensagem adicional do lead
      - `created_at` (timestamptz) - Data e hora de criação do registro
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for authenticated users to view leads (for admin access)

  3. Notes
    - The table stores lead information from the contact form
    - Public can insert leads but cannot read them
    - Only authenticated users can read leads (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project text NOT NULL DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);