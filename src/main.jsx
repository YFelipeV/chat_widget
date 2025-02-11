import "./index.css"; // 📌 Importa estilos globales
import "bootstrap/dist/css/bootstrap.min.css"; // 📌 Usa Bootstrap si lo necesitas
import {ChatWidget} from "./ChatWidget"; // 📌 Importa el widget

export { ChatWidget }; // 📌 Exporta el widget para que pueda ser usado globalmente

/// Función de inicialización
const init = (containerId, config = {}) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }
  
    try {
      const root = ReactDOM.createRoot(container);
      root.render(
        <ChatBot {...config} />
      );
      return root;
    } catch (error) {
      console.error('Error initializing ChatBot:', error);
    }
  };
  
  // Exportación global
  if (typeof window !== 'undefined') {
    window.ChatBot = init;
  }