import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, practiceArea, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log the form submission (in production, you'd want to store this in a database)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      practiceArea: practiceArea || 'Not specified',
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'
    })

    // In a production environment, you would:
    // 1. Save to database
    // 2. Send email notification to the law firm
    // 3. Send confirmation email to the client
    // 4. Integrate with CRM system
    
    // For now, we'll simulate successful processing
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate processing time

    // Example email content that could be sent
    const emailContent = {
      to: 'hlwoo@jswlaw.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Practice Area:</strong> ${practiceArea || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    // Here you would integrate with an email service like:
    // - SendGrid
    // - Mailgun  
    // - AWS SES
    // - Nodemailer with SMTP
    // - Or a service like Formspree

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}