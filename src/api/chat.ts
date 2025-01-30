import { createClient } from '@vercel/edge';
import { OpenAIStream } from 'ai';

export const config = {
  runtime: 'edge',
};

const openAIKey = process.env.OPENAI_API_KEY;

export default async function handler(req: Request) {
  if (!openAIKey) {
    return new Response('OpenAI API key not configured', { status: 500 });
  }

  try {
    const { messages } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const stream = OpenAIStream(response);
    return new Response(stream);
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Error processing chat request', { status: 500 });
  }
} 