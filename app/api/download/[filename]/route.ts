import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, statSync } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params;
    
    // Security check: only allow specific executable files
    const allowedFiles = ['BitshredW.exe', 'Bitshred.exe'];
    
    if (!allowedFiles.includes(filename)) {
      return new NextResponse('File not found', { status: 404 });
    }
    
    // Get the file path from the public directory
    const filePath = path.join(process.cwd(), 'public', filename);
    
    try {
      // Check if file exists and get stats
      const stats = statSync(filePath);
      
      // Create a readable stream for the file
      const stream = createReadStream(filePath);
      
      // Convert the stream to web stream
      const readableStream = new ReadableStream({
        start(controller) {
          stream.on('data', (chunk) => {
            controller.enqueue(new Uint8Array(chunk));
          });
          
          stream.on('end', () => {
            controller.close();
          });
          
          stream.on('error', (error) => {
            console.error('Stream error:', error);
            controller.error(error);
          });
        },
        
        cancel() {
          stream.destroy();
        }
      });
      
      // Set proper headers for download
      const headers = new Headers();
      headers.set('Content-Type', 'application/octet-stream');
      headers.set('Content-Disposition', `attachment; filename="${filename}"`);
      headers.set('Content-Length', stats.size.toString());
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      
      return new NextResponse(readableStream, {
        status: 200,
        headers,
      });
    } catch (fileError) {
      console.error('File access error:', fileError);
      return new NextResponse('File not found', { status: 404 });
    }
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}