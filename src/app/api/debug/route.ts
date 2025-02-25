import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/notes/sub1/Exp1a-observation-python.pdf')

  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found on server', { status: 404 })
  }

  return new NextResponse('File exists and is accessible', { status: 200 })
}
