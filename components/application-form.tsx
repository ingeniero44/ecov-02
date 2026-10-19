                        </div>

                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                            <p className="text-sm text-gray-800">
                              Este es un paso muy importante que debes realizar para que tu postulacion sea valida. Una vez realizado el deposito me mandas una captura de pantalla.
                            </p>
                            <p className="text-[10px] text-gray-500 text-right mt-1">
                              {new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Input del chat */}
                  <div className="p-3 bg-[#f0f0f0] flex items-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      ref={fileInputRef}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ImagePlus className="h-5 w-5 text-gray-600" />
                    </button>
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                      {selectedImage ? "Imagen seleccionada" : "Selecciona una imagen..."}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Formulario inicial
  return (
    <section id="postularme" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-foreground">¡Postúlate ahora!</h3>
            <p className="text-sm text-muted-foreground">
              Completa tus datos y te contactaremos pronto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Ej: María García Rodríguez"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Ej: 300 123 4567"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ciudad">Ciudad / Departamento</Label>
              <Input
                id="ciudad"
                name="ciudad"
                placeholder="Ej: Bogotá, Cundinamarca"
                required
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="bg-input"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                  Procesando información...
                </>
              ) : (
                <>
                  Postularme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
