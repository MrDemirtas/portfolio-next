import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Sayfa Bulunamadı</h2>
      <p className="text-muted-foreground mb-8 max-w-md">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Button asChild>
        <Link href="/">Ana Sayfaya Dön</Link>
      </Button>
    </div>
  )
}
