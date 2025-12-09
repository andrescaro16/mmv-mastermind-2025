import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAButtonProps {
  children: React.ReactNode
  size?: 'default' | 'large'
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
}

export function CTAButton({ children, size = 'default', variant = 'primary', className = '', href }: CTAButtonProps) {
  const DEFAULT_URL = 'https://wa.link/sjmou8' // Entrada General link as default
  
  const sizeClasses = size === 'large' 
    ? 'px-10 py-5 text-lg md:text-xl font-semibold' 
    : 'px-8 py-4 text-base md:text-lg font-semibold'
    
  const variantClasses = variant === 'primary'
    ? 'bg-cta text-cta-foreground hover:opacity-90 shadow-lg hover:shadow-xl'
    : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
  
  return (
    <Link
      href={href || DEFAULT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-xl transition-all duration-300 uppercase tracking-wide ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </Link>
  )
}
