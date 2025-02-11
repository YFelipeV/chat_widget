import "./index.css"; // 📌 Importa estilos globales
import "bootstrap/dist/css/bootstrap.min.css"; // 📌 Usa Bootstrap si lo necesitas
import ChatWidget from "./ChatWidget"; // 📌 Importa el widget

export { ChatWidget }; // 📌 Exporta el widget para que pueda ser usado globalmente

// 📌 También lo asignamos a `window` para que pueda usarse con un `<script>` externo
if (typeof window !== "undefined") {
  window.ChatWidget = ChatWidget;
}
