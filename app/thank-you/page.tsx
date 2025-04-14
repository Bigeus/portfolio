export default function ThankYouPage() {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Thank you for reaching out! 🎉</h1>
          <p className="text-lg text-muted-foreground mb-6">
          Your message has been successfully sent. I’ll get back to you as soon as possible. 😊
          </p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }
  