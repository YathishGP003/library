import Link from "next/link"
import { Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900 text-slate-100">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Book className="h-10 w-10 text-amber-300" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-amber-300">404</h1>
          <p className="text-2xl font-semibold text-slate-100">Page Not Found</p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-400">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Book className="h-5 w-5 text-slate-400" />
            <p className="text-sm text-slate-400">Let's help you find your way back to our collection.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full bg-amber-300 text-slate-900 hover:bg-amber-400">
            <Link href="/">Return to Home</Link>
          </Button>
          <div className="text-center text-sm text-slate-400">
            <Link href="/contact" className="hover:text-amber-300 hover:underline">
              Need help? Contact support
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

