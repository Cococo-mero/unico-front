export default function Login() {
  return (
    <main className="p-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
      <form className="space-y-4" aria-label="Formulario de inicio de sesión">
        <label className="block">
          <span className="text-sm font-medium">Correo electrónico</span>
          <input
            type="email"
            className="border p-2 w-full"
            placeholder="correo@ejemplo.com"
            aria-label="Correo electrónico"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Contraseña</span>
          <input
            type="password"
            className="border p-2 w-full"
            placeholder="********"
            aria-label="Contraseña"
          />
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="border" aria-label="Recordarme" />
          <span>Recordarme</span>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}
