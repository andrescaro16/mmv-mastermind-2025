import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAButtonProps {
  children: React.ReactNode
  size?: 'default' | 'large'
  className?: string
}

export function CTAButton({ children, size = 'default', className = '' }: CTAButtonProps) {
  const WHATSAPP_URL = 'http://wa.link/x2iilf'
  
  const sizeClasses = size === 'large' 
    ? 'px-10 py-5 text-lg md:text-xl font-semibold' 
    : 'px-8 py-4 text-base md:text-lg font-semibold'
  
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-cta text-cta-foreground rounded-xl hover:opacity-90 transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl ${sizeClasses} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </Link>
  )
}
