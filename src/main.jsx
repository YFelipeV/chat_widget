import "./index.css"; // 📌 Importa estilos globales
import "bootstrap/dist/css/bootstrap.min.css"; // 📌 Usa Bootstrap si lo necesitas
import {ChatWidget} from "./ChatWidget"; // 📌 Importa el widget

export { ChatWidget }; // 📌 Exporta el widget para que pueda ser usado globalmente

/// Función para montar el componente
const mount = (element, props = {}) => {
    if (!element) return null
    
    const root = ReactDOM.createRoot(element)
    root.render(
      <React.StrictMode>
        <MyComponent {...props} />
      </React.StrictMode>
    )
    
    return root
  }
  
  // Exportamos la función mount para uso via CDN
  export { mount }
  
  // Auto-inicialización para uso via CDN
  if (typeof window !== 'undefined') {
    window.MyLibrary = {
      mount,
      ChatWidget
    }
  }