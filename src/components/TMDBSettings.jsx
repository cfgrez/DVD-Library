import React, { useState } from 'react';
import { Key, Check, Loader, X } from 'lucide-react';
import { getApiKey, setApiKey, testApiKey } from '../services/tmdb';

export default function TMDBSettings({ onKeyChange }) {
  const [key, setKey] = useState(getApiKey());
  const [status, setStatus] = useState(getApiKey() ? 'saved' : 'empty');
  const [message, setMessage] = useState('');

  const guardar = async () => {
    const clean = key.trim();
    if (!clean) {
      setStatus('error');
      setMessage('Pega tu API key antes de guardar.');
      return;
    }

    setStatus('testing');
    setMessage('Comprobando la key con TMDB...');

    try {
      await testApiKey(clean);
      setApiKey(clean);
      setStatus('saved');
      setMessage('Key válida y guardada en este navegador.');
      if (onKeyChange) onKeyChange(clean);
    } catch (err) {
      setStatus('error');
      if (err.message === 'KEY_INVALIDA') {
        setMessage('TMDB rechazó la key. Revisa que la copiaste completa (API Key v3).');
      } else if (err.message.startsWith('ERROR_TMDB_')) {
        setMessage(`TMDB respondió con un error (${err.message.replace('ERROR_TMDB_', '')}). Intenta más tarde.`);
      } else {
        setMessage('No se pudo conectar con TMDB. Revisa tu conexión.');
      }
    }
  };

  const borrar = () => {
    setApiKey('');
    setKey('');
    setStatus('empty');
    setMessage('Key eliminada de este navegador.');
    if (onKeyChange) onKeyChange('');
  };

  return (
    <div className="tmdb-settings">
      <div className="tmdb-head">
        <Key size={18} />
        <div>
          <h3>Buscar en TMDB</h3>
          <p>
            Con tu API key gratuita puedes buscar entre más de un millón de películas, en español y
            con clasificación chilena.
          </p>
        </div>
      </div>

      <div className="tmdb-row">
        <input
          type="password"
          className="input-large"
          placeholder="Pega aquí tu API Key (v3) de TMDB"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          autoComplete="off"
        />
        <button className="btn btn-primary" onClick={guardar} disabled={status === 'testing'}>
          {status === 'testing' ? <Loader size={16} className="spin" /> : <Check size={16} />}
          {status === 'testing' ? 'Probando' : 'Guardar'}
        </button>
        {status === 'saved' && (
          <button className="btn btn-secondary" onClick={borrar} title="Quitar la key">
            <X size={16} /> Quitar
          </button>
        )}
      </div>

      {message && <div className={`tmdb-msg ${status}`}>{message}</div>}

      <p className="tmdb-note">
        La key se guarda solo en este navegador: no viaja a ningún servidor nuestro ni queda en el
        código de GitHub. Datos e imágenes por cortesía de TMDB; este proyecto no está avalado ni
        certificado por TMDB.
      </p>
    </div>
  );
}
