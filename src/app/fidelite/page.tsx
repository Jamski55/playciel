'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FidelitePage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: '',
  })

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire envoyé:', formData)
    router.push('/coffre')
  }

  const handleSkip = () => {
    router.push('/coffre')
  }

  return (
    <main className="min-h-screen bg-logo-white flex flex-col items-center justify-center p-6">
      <p className="mb-8 text-logo-skyBlue text-lg text-center">
        Vous êtes déjà client ? Scannez votre carte fidélité.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-logo-lightGrayWhite p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-logo-mediumBlue mb-4">
          Créer un compte fidélité
        </h2>

        <div className="mb-4">
          <label htmlFor="nom" className="block mb-1 text-sm text-logo-mediumBlue">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="w-full border border-logo-lightCyan p-2 rounded focus:outline-none focus:ring-2 focus:ring-logo-brightCyan"
            required
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="prenom" className="block mb-1 text-sm text-logo-mediumBlue">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="w-full border border-logo-lightCyan p-2 rounded focus:outline-none focus:ring-2 focus:ring-logo-brightCyan"
            required
            value={formData.prenom}
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm text-logo-mediumBlue">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-logo-lightCyan p-2 rounded focus:outline-none focus:ring-2 focus:ring-logo-brightCyan"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="dateNaissance" className="block mb-1 text-sm text-logo-mediumBlue">Date de naissance</label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            className="w-full border border-logo-lightCyan p-2 rounded focus:outline-none focus:ring-2 focus:ring-logo-brightCyan"
            value={formData.dateNaissance}
            onChange={(e) =>
              setFormData({ ...formData, dateNaissance: e.target.value })
            }
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-logo-turquoiseBlue text-white px-4 py-2 rounded hover:bg-logo-brightCyan transition-colors"
          >
            Valider le formulaire
          </button>
          <button
            type="button"
            className="text-logo-mediumBlue underline hover:text-logo-brightCyan transition-colors"
            onClick={handleSkip}
          >
            Passer le formulaire
          </button>
        </div>
      </form>
    </main>
  )
}
