// Theme Toggle Script
class ThemeToggle {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    // Aplicar tema guardado
    this.applyTheme();
    
    // Crear y agregar el toggle al header
    this.createToggle();
    
    // Escuchar cambios en el toggle
    this.addEventListeners();
  }

  createToggle() {
    const header = document.querySelector('.header');
    if (!header) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'theme-toggle-container';
    
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Cambiar modo oscuro/claro');
    
    const icon = document.createElement('span');
    icon.className = 'theme-toggle-icon';
    icon.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
    
    toggle.appendChild(icon);
    toggleContainer.appendChild(toggle);
    
    // Insertar después del logo-nav-wrapper
    const logoNavWrapper = header.querySelector('.logo-nav-wrapper');
    if (logoNavWrapper) {
      logoNavWrapper.parentNode.insertBefore(toggleContainer, logoNavWrapper.nextSibling);
    } else {
      header.appendChild(toggleContainer);
    }
  }

  addEventListeners() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.updateIcon();
    localStorage.setItem('theme', this.theme);
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  updateIcon() {
    const icon = document.querySelector('.theme-toggle-icon');
    if (icon) {
      icon.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});

// También inicializar si el script se carga después del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
  });
} else {
  new ThemeToggle();
} 