// pages/api/og-image.js
import { createCanvas } from '@napi-rs/canvas';

export default async function handler(req, res) {
  const { title } = req.query;

  // Create a canvas
  const width = 1200;
  const height = 600;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Set background color
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);

  // Add text
  context.fillStyle = '#000000';
  context.font = 'bold 70px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(title, width / 2, height / 2);

  // Convert the canvas to a buffer
  const buffer = canvas.toBuffer('image/png');

  // Set the response headers
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).send(buffer);
}