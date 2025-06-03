// src/pages/UploadPage.tsx
import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor, selecione um arquivo Excel.');
      return;
    }

    // Aqui você pode enviar para seu backend FastAPI
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        alert('Arquivo enviado com sucesso!');
        console.log(data);
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao enviar o arquivo.');
      });
  };

  return (
    <div className="upload-container">
      <h2>Enviar Arquivo Excel</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UploadPage;
