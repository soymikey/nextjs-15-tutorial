import { getData } from "@/utils";

export const revalidate = 60;
// export const dynamic = 'force-static'

export async function GET() {
  console.log("GET");
  const data = await getData("1");
  return Response.json({
    timestamp: new Date().toISOString(),
    data,
  });
}

// import { type NextRequest } from 'next/server'

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const query = searchParams.get('query')
//   // query is "hello" for /api/search?query=hello
// }

// export async function POST(request: Request) {
//   const res = await request.json()
//   return Response.json({ res })
// }
