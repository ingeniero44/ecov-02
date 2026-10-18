"use client"

import { ArrowDown, Home, Truck, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-14">
      <div className="container mx-auto px-4">
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-5 py-10 text-center shadow-[0_28px_80px_-36px_rgba(30,64,175,0.65)] sm:px-8 md:rounded-[2.5rem] md:px-12 md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 -z-10 size-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 -z-10 size-96 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-sm">
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              Vacantes disponibles
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-sky-100 bg-clip-text text-transparent">BodegasCOL</span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-blue-100/90 text-balance sm:text-lg md:text-xl">
              Genera ingresos desde la comodidad de tu hogar empacando y organizando productos como{" "}
              <strong className="font-semibold text-white">cosméticos, juguetes, accesorios de cocina</strong>{" "}
              y más. Nosotros nos encargamos de llevarte los productos y recogerlos una vez listos.
            </p>

            <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-white/70 bg-white p-6 shadow-xl shadow-blue-950/20">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Salario semanal
              </p>
              <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">500 mil pesos</p>
              <p className="mt-2 text-sm text-slate-600">Pagos puntuales cada semana</p>
            </div>

            <div className="mb-10">
              <p className="mb-2 text-sm font-medium text-blue-100">Si quieres postularte, presiona aquí</p>
              <ArrowDown aria-hidden="true" className="mx-auto mb-4 size-5 animate-bounce text-cyan-200" />
              <Button asChild size="lg" className="h-12 rounded-xl bg-cyan-300 px-8 font-semibold text-blue-950 shadow-lg shadow-cyan-950/20 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200">
                <Link href="#postularme">Postularme</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-sm">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Home aria-hidden="true" className="size-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-semibold">Desde tu casa</p>
                  <p className="text-sm text-blue-100/75">Sin traslados</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-sm">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Truck aria-hidden="true" className="size-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-semibold">Entrega a domicilio</p>
                  <p className="text-sm text-blue-100/75">Llevamos y recogemos</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-sm">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Banknote aria-hidden="true" className="size-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-semibold">Pago semanal</p>
                  <p className="text-sm text-blue-100/75">500 mil pesos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
