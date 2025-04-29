"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactCardProps {
  email: string
  phone: string
  location: string
}

export function ContactCard({ email, phone, location }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-3xl p-8 shadow-xl border border-border h-full"
    >
      <h3 className="text-2xl font-bold mb-8">İletişim Bilgileri</h3>

      <div className="space-y-8">
        <motion.div className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">E-posta</p>
            <a href={`mailto:${email}`} className="text-lg hover:text-primary transition-colors duration-300">
              {email}
            </a>
          </div>
        </motion.div>

        <motion.div className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Telefon</p>
            <a href={`tel:${phone}`} className="text-lg hover:text-primary transition-colors duration-300">
              {phone}
            </a>
          </div>
        </motion.div>

        <motion.div className="flex items-start gap-4 group" whileHover={{ x: 5 }}>
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Konum</p>
            <p className="text-lg">{location}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
