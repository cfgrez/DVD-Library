import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { searchBarcodeLocally } from '../data/barcodeDatabase';

const OMDb_API_KEY = 'k_fx7nk87h'; // API key gratuita de OMDb

export default function DVDForm({ onAdd }) {
  const [barcode, setBarcode] = useState('');
  const [formData, setFormData] = useState({
    titulo: '',
    año: '',
    region: 'USA',
    genre: '',
    edad: 'PG',
    actores: '',
    caratula: '',
    notas: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [useManual, setUseManual] = useState(false);

  // Búsqueda por código de barras o título
  const searchByBarcode = async () => {
    if (!barcode.trim()) {
      setError('Ingresa un código de barras o título');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const query = barcode.trim();
      let movieTitle = query;
      
      // PASO 1: Verificar si es un código numérico
      if (/^\d+$/.test(query) && query.length >= 10) {
        // PASO 2: Buscar primero en la base de datos local
        const localMatch = searchBarcodeLocally(query);
        if (localMatch) {
          movieTitle = localMatch;
        } else {
          // PASO 3: Si no está en local, intentar decodificar con Open Food Facts
          try {
            const barcodeResponse = await fetch(
              `https://world.openfoodfacts.org/api/v0/product/${query}.json`
            );
            const barcodeData = await barcodeResponse.json();
            
            if (barcodeData.product && barcodeData.product.product_name) {
              movieTitle = barcodeData.product.product_name;
            } else {
              setError('Código de barras no está en la base de datos. Por favor, ingresa el título manualmente o agrega el código a barcodeDatabase.js');
              setUseManual(true);
              setLoading(false);
              return;
            }
          } catch (err) {
            setError('Código de barras no identificado. Ingresa el título manualmente.');
            setUseManual(true);
            setLoading(false);
            return;
          }
        }
      }
      
      // PASO 4: Buscar la película en OMDb
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDb_API_KEY}&t=${encodeURIComponent(movieTitle)}&type=movie`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        setFormData({
          titulo: data.Title || '',
          año: data.Year || '',
          region: 'USA',
          genre: data.Genre?.split(',')[0].trim() || '',
          edad: data.Rated || 'PG',
          actores: data.Actors || '',
          caratula: data.Poster && data.Poster !== 'N/A' ? data.Poster : '',
          notas: `IMDB: ${data.imdbID} - ${data.Plot || ''}`
        });
        setBarcode('');
      } else {
        setError(`Película "${movieTitle}" no encontrada en IMDb. Intenta con otro título o completa manualmente.`);
        setUseManual(true);
      }
    } catch (err) {
      setError('Error de conexión. Completa los datos manualmente.');
      setUseManual(true);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.titulo.trim()) {
      setError('El título es obligatorio');
      return;
    }

    onAdd(formData);
    
    // Limpiar formulario
    setFormData({
      titulo: '',
      año: '',
      region: 'USA',
      genre: '',
      edad: 'PG',
      actores: '',
      caratula: '',
      notas: ''
    });
    setBarcode('');
    setError('');
    setUseManual(false);
  };

  return (
    <form className="dvd-form" onSubmit={handleSubmit}>
      <h2>Agregar DVD a la Biblioteca</h2>

      {/* Búsqueda por código de barras */}
      <div className="form-section-barcode">
        <div className="search-group">
          <div className="input-with-button">
            <input
              type="text"
              placeholder="Código de barras o título de película..."
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchByBarcode()}
              className="input-large"
            />
            <button
              type="button"
              onClick={searchByBarcode}
              disabled={loading}
              className="btn btn-search"
            >
              {loading ? (
                <><Loader size={18} className="spin" /> Buscando...</>
              ) : (
                <><Search size={18} /> Buscar</>
              )}
            </button>
          </div>
          <small className="hint">
            Ingresa el código de barras, ISBN o el título de la película
          </small>
        </div>
      </div>

      {error && <div className="error-box">{error}</div>}

      {/* Formulario manual */}
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="titulo">Título *</label>
          <input
            id="titulo"
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            placeholder="Título de la película"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="año">Año</label>
          <input
            id="año"
            type="number"
            name="año"
            value={formData.año}
            onChange={handleInputChange}
            placeholder="ej: 2023"
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">Zona/Región</label>
          <select name="region" value={formData.region} onChange={handleInputChange} className="input">
            <option value="USA">USA (Región 1)</option>
            <option value="Europa">Europa (Región 2)</option>
            <option value="Asia">Asia (Región 3)</option>
            <option value="Australia">Australia (Región 4)</option>
            <option value="Latinoamérica">Latinoamérica (Región 5)</option>
            <option value="Rusia">Rusia (Región 6)</option>
            <option value="Multi-región">Multi-región</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="genre">Género</label>
          <select name="genre" value={formData.genre} onChange={handleInputChange} className="input">
            <option value="">Selecciona un género</option>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Animación">Animación</option>
            <option value="Comedia">Comedia</option>
            <option value="Crimen">Crimen</option>
            <option value="Documental">Documental</option>
            <option value="Drama">Drama</option>
            <option value="Familia">Familia</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ficción Científica">Ficción Científica</option>
            <option value="Histórico">Histórico</option>
            <option value="Horror">Horror</option>
            <option value="Misterio">Misterio</option>
            <option value="Música">Música</option>
            <option value="Romance">Romance</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Terror">Terror</option>
            <option value="Thriller">Thriller</option>
            <option value="Occidental">Occidental</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="edad">Clasificación de Edad</label>
          <select name="edad" value={formData.edad} onChange={handleInputChange} className="input">
            <option value="G">G (Apto para todos)</option>
            <option value="PG">PG (Se sugiere participación de padres)</option>
            <option value="PG-13">PG-13 (Algunos materiales no apropiados para menores de 13)</option>
            <option value="R">R (Restringido - menores de 17 requieren padre/tutor)</option>
            <option value="NC-17">NC-17 (No se permite menores de 17)</option>
            <option value="Sin clasificar">Sin clasificar</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="actores">Actores Principales</label>
          <input
            id="actores"
            type="text"
            name="actores"
            value={formData.actores}
            onChange={handleInputChange}
            placeholder="ej: Tom Hanks, Meg Ryan"
            className="input"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="caratula">URL de la Carátula</label>
          <input
            id="caratula"
            type="url"
            name="caratula"
            value={formData.caratula}
            onChange={handleInputChange}
            placeholder="https://ejemplo.com/caratula.jpg"
            className="input"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="notas">Notas Adicionales</label>
          <textarea
            id="notas"
            name="notas"
            value={formData.notas}
            onChange={handleInputChange}
            placeholder="Condición, ubicación en estantería, observaciones..."
            className="input"
            rows="3"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-submit">
          ✓ Agregar DVD a la Biblioteca
        </button>
      </div>
    </form>
  );
}
