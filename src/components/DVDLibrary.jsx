import React, { useState } from 'react';
import { Trash2, ChevronDown } from 'lucide-react';

export default function DVDLibrary({ dvds, onDelete }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getAgeColor = (age) => {
    switch (age) {
      case 'G':
        return 'age-g';
      case 'PG':
        return 'age-pg';
      case 'PG-13':
        return 'age-pg13';
      case 'R':
        return 'age-r';
      case 'NC-17':
        return 'age-nc17';
      default:
        return 'age-default';
    }
  };

  return (
    <div className="dvd-library">
      <div className="dvd-grid">
        {dvds.map(dvd => (
          <div
            key={dvd.id}
            className={`dvd-card ${expandedId === dvd.id ? 'expanded' : ''}`}
          >
            {/* Carátula */}
            <div className="dvd-poster">
              {dvd.caratula ? (
                <img 
                  src={dvd.caratula} 
                  alt={dvd.titulo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : null}
              <div className={`dvd-poster-fallback ${!dvd.caratula || !dvd.caratula.trim() ? 'visible' : ''}`}>
                📀
              </div>

              {/* Info rápida */}
              <div className="dvd-badge-year">{dvd.año || 'S/A'}</div>
              <div className={`dvd-badge-age ${getAgeColor(dvd.edad)}`}>
                {dvd.edad}
              </div>
            </div>

            {/* Info Principal */}
            <div className="dvd-info">
              <h3 className="dvd-title">{dvd.titulo}</h3>
              
              <div className="dvd-meta">
                {dvd.genre && <span className="badge-genre">{dvd.genre}</span>}
                {dvd.region && <span className="badge-region">{dvd.region}</span>}
              </div>

              {dvd.actores && (
                <p className="dvd-actors">
                  <strong>Actores:</strong> {dvd.actores}
                </p>
              )}

              {/* Detalles expandibles */}
              {expandedId === dvd.id && (
                <div className="dvd-details">
                  <div className="details-grid">
                    <div>
                      <strong>Clasificación:</strong> {dvd.edad}
                    </div>
                    <div>
                      <strong>Año:</strong> {dvd.año || 'No especificado'}
                    </div>
                    <div>
                      <strong>Región:</strong> {dvd.region || 'No especificada'}
                    </div>
                    <div>
                      <strong>Género:</strong> {dvd.genre || 'No especificado'}
                    </div>
                  </div>
                  
                  {dvd.notas && (
                    <div className="dvd-notes">
                      <strong>Notas:</strong> {dvd.notas}
                    </div>
                  )}

                  {dvd.dateAdded && (
                    <div className="dvd-date">
                      <small>Agregado: {dvd.dateAdded}</small>
                    </div>
                  )}
                </div>
              )}

              {/* Acciones */}
              <div className="dvd-actions">
                <button 
                  className="btn-expand"
                  onClick={() => toggleExpand(dvd.id)}
                  title={expandedId === dvd.id ? 'Contraer' : 'Expandir'}
                >
                  <ChevronDown size={18} className={expandedId === dvd.id ? 'rotated' : ''} />
                </button>
                
                <button 
                  className="btn-delete"
                  onClick={() => onDelete(dvd.id)}
                  title="Eliminar DVD"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
