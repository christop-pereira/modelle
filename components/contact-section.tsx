"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    photo: null as File | null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, photo: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("phone", formData.phone)
      data.append("message", formData.message)
      if (formData.photo) data.append("photo", formData.photo)

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      })

      const result = await res.json()

      if (result.success) {
        alert("✅ Message envoyé avec succès !")
        // Reset du formulaire
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          photo: null,
        })
      } else {
        alert(`❌ Erreur : ${result.error || "Impossible d'envoyer le message"}`)
      }
    } catch (error) {
      console.error(error)
      alert("❌ Une erreur est survenue, veuillez réessayer.")
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contactez-Nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Écrivez-nous, nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Formulaire de contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Votre numéro"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photo">Photo (optionnelle)</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("photo")?.click()}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                    {formData.photo ? formData.photo.name : "Ajouter une photo"}
                  </Button>
                  {formData.photo && (
                    <span className="text-sm text-muted-foreground">Photo sélectionnée</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Pour les retouches, une photo peut nous aider à mieux comprendre votre demande
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full cursor-pointer">
                <Send className="h-4 w-4 mr-2" />
                Envoyer la Demande
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
