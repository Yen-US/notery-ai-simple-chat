import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
   
export const runtime = 'edge'

export async function GET(request: Request) {
        //const { searchParams } = new URL(request.url)
        //const id = searchParams.get('id')
        //const body = await request.json()
        //const headers = new Headers();
        //headers.append('Content-Type', 'application/json');

        const res = { 'data': 'hello' }
     
        return Response.json({ res })
    }

 
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const modelVersion = searchParams.get('model') || 'gpt-3.5-turbo'
  console.log('modelVersion', modelVersion)
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: modelVersion,
    stream: true,
    messages: messages,
    temperature: 1,
    max_tokens: 150,
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}