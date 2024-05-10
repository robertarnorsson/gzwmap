export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-4 md:p-8 bg-muted/20 rounded-xl backdrop-blur-md text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-primary mb-4">Oops!</h1>
        <p className="text-base md:text-lg text-primary mb-6">It seems you&apos;ve changed your mind. No worries!</p>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a href="/donate" className="text-sm md:text-base text-muted-foreground underline">Back to Donation Page</a>
          <a href="/" className="text-sm md:text-base text-muted-foreground underline">Back to Map</a>
        </div>
      </div>
    </div>
  )
}