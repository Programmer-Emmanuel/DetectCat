import { useState, useEffect } from 'react';
import { Upload, Cat, X, Loader2, CheckCircle, XCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface DetectionResult {
  success: boolean;
  message: string;
}

export default function Detection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setResult(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setResult(null);
  };

  const handleDetection = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:8000/detect', {
        method: 'POST',
        body: formData,
      });

      const data: DetectionResult = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Erreur lors de la détection. Veuillez réessayer.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Détection de Chats
          </h1>
          <p className="text-lg text-gray-600">
            Téléchargez une image pour vérifier si elle contient un chat
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
          {!previewUrl ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-3 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <input
                type="file"
                name="file"
                id="file-upload"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-100 p-6 rounded-full">
                    <Upload className="w-12 h-12 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-700 mb-2">
                      Glissez-déposez votre image ici
                    </p>
                    <p className="text-gray-500">ou cliquez pour parcourir</p>
                  </div>
                  <p className="text-sm text-gray-400">
                    PNG, JPG, JPEG jusqu'à 10MB
                  </p>
                </div>
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-96 object-contain rounded-2xl bg-gray-50"
                />
                <button
                  onClick={clearFile}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <button
                onClick={handleDetection}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Détection en cours...</span>
                  </>
                ) : (
                  <>
                    <Cat className="w-5 h-5" />
                    <span>Détecter le chat</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {result && (
          <div
            data-aos="zoom-in"
            className={`rounded-2xl p-8 shadow-lg ${
              result.success
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200'
                : 'bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-full ${
                  result.success ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {result.success ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600" />
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    result.success ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {result.success ? 'Chat détecté !' : 'Aucun chat détecté'}
                </h3>
                <p
                  className={`text-lg ${
                    result.success ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {result.message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
