"use client"

import { useState } from "react"
import { ArrowRight, Calendar, CreditCard, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Step = "form" | "disability" | "interview" | "bank" | "complete"

type FormData = {
  nombre: string
  telefono: string
  ciudad: string
  hasDisability: string
  interviewDate: string
  interviewTime: string
  hasBankAccount: string
}

const initialFormData: FormData = {
  nombre: "",
  telefono: "",
  ciudad: "",
  hasDisability: "",
  interviewDate: "",
  interviewTime: "",
  hasBankAccount: "",
}

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState<Step>("form")
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    setIsSubmitting(false)
    setCurrentStep("disability")
  }

  const handleInterviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCurrentStep("bank")
  }

  if (currentStep === "complete") {
    return (
      <section id="postularme" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-foreground">¡Gracias por postularte!</h3>
            <p className="text-sm text-muted-foreground">
              Recibimos tus datos. Nos comunicaremos contigo para continuar el proceso.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (currentStep === "disability") {
    return (
      <section id="postularme" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Phone className="size-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Una pregunta importante</h3>
              <p className="text-muted-foreground">
                ¿Tienes alguna discapacidad física de la que debamos enterarnos?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[{ label: "No", value: "no" }, { label: "Sí", value: "si" }].map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setFormData((current) => ({ ...current, hasDisability: option.value }))
                    setCurrentStep("interview")
                  }}
                  variant="outline"
                  className="w-full border-2 border-primary/20 bg-card py-6 text-base font-medium hover:bg-primary/5"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (currentStep === "interview") {
    return (
      <section id="postularme" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="size-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Entrevista telefónica</h3>
              <p className="text-muted-foreground">
                ¿Qué día y hora estás disponible para que te llamemos?
              </p>
            </div>
            <form onSubmit={handleInterviewSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="interviewDate">Fecha disponible</Label>
                <Input
                  id="interviewDate"
                  name="interviewDate"
                  placeholder="Ej: Lunes 15 de junio"
                  required
                  value={formData.interviewDate}
                  onChange={(event) => setFormData((current) => ({ ...current, interviewDate: event.target.value }))}
                  className="bg-input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="interviewTime">Hora disponible</Label>
                <Input
                  id="interviewTime"
                  name="interviewTime"
                  placeholder="Ej: 10:00 a. m."
                  required
                  value={formData.interviewTime}
                  onChange={(event) => setFormData((current) => ({ ...current, interviewTime: event.target.value }))}
                  className="bg-input"
                />
              </div>
              <Button type="submit" className="w-full bg-primary py-6 text-base hover:bg-primary/90">
                Continuar
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  if (currentStep === "bank") {
    return (
      <section id="postularme" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="size-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Información bancaria</h3>
              <p className="text-muted-foreground">¿Tienes una cuenta bancaria?</p>
            </div>
            <div className="mb-6 flex flex-col gap-3">
              {[{ label: "No", value: "no" }, { label: "Sí", value: "si" }].map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData((current) => ({ ...current, hasBankAccount: option.value }))}
                  variant="outline"
                  aria-pressed={formData.hasBankAccount === option.value}
                  className={`w-full border-2 py-6 text-base font-medium ${
                    formData.hasBankAccount === option.value
                      ? "border-primary bg-primary/10"
                      : "border-primary/20 bg-card hover:bg-primary/5"
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <div className="rounded-lg border border-border bg-muted/50 p-4">
              <p className="text-sm leading-relaxed text-foreground">
                No necesitas abrir una cuenta ni hacer depósitos para postularte. No compartas claves, números de tarjeta ni capturas de tus cuentas.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setCurrentStep("complete")}
              disabled={!formData.hasBankAccount}
              className="mt-4 w-full bg-primary hover:bg-primary/90"
            >
              Finalizar postulación
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="postularme" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-foreground">¡Postúlate ahora!</h3>
            <p className="text-sm text-muted-foreground">Completa tus datos y te contactaremos pronto</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Ej: María García Rodríguez"
                required
                value={formData.nombre}
                onChange={(event) => setFormData((current) => ({ ...current, nombre: event.target.value }))}
                className="bg-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Ej: 300 123 4567"
                required
                value={formData.telefono}
                onChange={(event) => setFormData((current) => ({ ...current, telefono: event.target.value }))}
                className="bg-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ciudad">Ciudad / Departamento</Label>
              <Input
                id="ciudad"
                name="ciudad"
                placeholder="Ej: Bogotá, Cundinamarca"
                required
                value={formData.ciudad}
                onChange={(event) => setFormData((current) => ({ ...current, ciudad: event.target.value }))}
                className="bg-input"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
              {isSubmitting ? (
                "Procesando información..."
              ) : (
                <>
                  Postularme
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
