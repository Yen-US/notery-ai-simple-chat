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
  const imageSize = searchParams.get('size') as "256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792" | null | undefined || "1024x1024"
  const { messages } = await req.json();
  let response

  if (modelVersion === 'dall-e-3' ) {
    response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "a white siamese cat",
      n: 1,
      size: imageSize,
    });

    const image =  `![imageGenerated](${response.data[0].url})`

    return new Response(image)
  }else{
    response = await openai.chat.completions.create({
      model: modelVersion,
      stream: true,
      messages: messages,
      temperature: 1,
      max_tokens: 150,
    })

    const stream = OpenAIStream(response)
 
    return new StreamingTextResponse(stream)
  }

  
 
  
}