import React, { useState, useEffect } from 'react';
import { Search, Trash2, Download, Upload, ChevronDown } from 'lucide-react';
import DVDForm from './components/DVDForm';
import DVDLibrary from './components/DVDLibrary';
import MovieBrowser from './components/MovieBrowser';
import './App.css';

export default function App() {
  const [dvds, setDvds] = useState([]);
  const [sortBy, setSortBy] = useState('titulo');
  const [filterGenre, setFilterGenre] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [activeView, setActiveView] = useState('biblioteca'); // 'biblioteca' o 'explorador'

  // Cargar DVDs desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('dvdLibrary');
    if (saved) {
      try {
        setDvds(JSON.parse(saved));
      } catch (e) {
        console.error('Error cargando biblioteca:', e);
      }
    }
  }, []);

  // Guardar DVDs en localStorage cada que cambien
  useEffect(() => {
    localStorage.setItem('dvdLibrary', JSON.stringify(dvds));
  }, [dvds]);

  // Agregar un nuevo DVD
  const addDVD = (newDVD) => {
    const dvdWithId = {
      ...newDVD,
      id: Date.now(),
      dateAdded: new Date().toLocaleDateString('es-ES')
    };
    setDvds([dvdWithId, ...dvds]);
    setShowForm(false);
  };

  // Eliminar un DVD
  const deleteDVD = (id) => {
    if (window.confirm('¿Eliminar este DVD de la biblioteca?')) {
      setDvds(dvds.filter(dvd => dvd.id !== id));
    }
  };

  // Obtener géneros únicos
  const genres = [...new Set(dvds.map(dvd => dvd.genre).filter(Boolean))];

  // Ordenar y filtrar DVDs
  const sortedDVDs = [...dvds]
    .filter(dvd => !filterGenre || dvd.genre === filterGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case 'titulo':
          return (a.titulo || '').localeCompare(b.titulo || '');
        case 'año':
          return (b.año || 0) - (a.año || 0);
        case 'genero':
          return (a.genre || '').localeCompare(b.genre || '');
        case 'edad':
          return (a.edad || '').localeCompare(b.edad || '');
        case 'recientemente':
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        default:
          return 0;
      }
    });

  // Exportar biblioteca como JSON
  const exportData = () => {
    const dataStr = JSON.stringify(dvds, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dvd-library-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Importar biblioteca desde JSON
  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (Array.isArray(imported)) {
          setDvds(imported);
          alert(`Se importaron ${imported.length} DVDs correctamente`);
        } else {
          alert('Formato de archivo inválido');
        }
      } catch (error) {
        alert('Error al importar archivo: ' + error.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-title">
            <h1>📀 Mi Biblioteca de DVD</h1>
            <p className="subtitle">{dvds.length} películas catalogadas</p>
          </div>
          
          <div className="header-actions">
            <div className="view-switcher">
              <button 
                className={`btn view-btn ${activeView === 'biblioteca' ? 'active' : ''}`}
                onClick={() => setActiveView('biblioteca')}
              >
                📚 Mi Biblioteca
              </button>
              <button 
                className={`btn view-btn ${activeView === 'explorador' ? 'active' : ''}`}
                onClick={() => setActiveView('explorador')}
              >
                🔍 Explorador
              </button>
            </div>

            {activeView === 'biblioteca' && (
              <button 
                className="btn btn-primary"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? '✕ Cerrar' : '+ Agregar DVD'}
              </button>
            )}
            
            {activeView === 'biblioteca' && (
              <div className="dropdown">
                <button className="btn btn-secondary">
                  ⚙️ Opciones <ChevronDown size={16} />
                </button>
                <div className="dropdown-menu">
                  <button onClick={exportData}>
                    <Download size={16} /> Exportar JSON
                  </button>
                  <label className="dropdown-item">
                    <Upload size={16} /> Importar JSON
                    <input 
                      type="file" 
                      accept=".json"
                      onChange={importData}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Formulario para agregar DVD */}
      {showForm && (
        <div className="form-section">
          <DVDForm onAdd={addDVD} />
        </div>
      )}

      {/* VISTA: EXPLORADOR DE PELÍCULAS */}
      {activeView === 'explorador' ? (
        <MovieBrowser />
      ) : (
        <>
          {/* VISTA: BIBLIOTECA PERSONAL */}
          {/* Formulario para agregar DVD */}
          {showForm && (
            <div className="form-section">
              <DVDForm onAdd={addDVD} />
            </div>
          )}

          {/* Controles de filtro y orden */}
          <div className="controls">
            <div className="control-group">
              <label htmlFor="sortBy">Ordenar por:</label>
              <select 
                id="sortBy"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="select"
              >
                <option value="titulo">Título (A-Z)</option>
                <option value="año">Año (Más reciente)</option>
                <option value="genero">Género</option>
                <option value="edad">Clasificación de edad</option>
                <option value="recientemente">Recientemente agregado</option>
              </select>
            </div>

            {genres.length > 0 && (
              <div className="control-group">
                <label htmlFor="filterGenre">Filtrar por género:</label>
                <select 
                  id="filterGenre"
                  value={filterGenre} 
                  onChange={(e) => setFilterGenre(e.target.value)}
                  className="select"
                >
                  <option value="">Todos los géneros</option>
                  {genres.sort().map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="control-group info">
              Mostrando {sortedDVDs.length} de {dvds.length} DVDs
            </div>
          </div>

          {/* Biblioteca de DVDs */}
          {sortedDVDs.length > 0 ? (
            <DVDLibrary dvds={sortedDVDs} onDelete={deleteDVD} />
          ) : (
            <div className="empty-state">
              <p>🎬 Tu biblioteca está vacía</p>
              <p className="empty-text">Comienza usando el explorador para agregar películas a tu colección</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
